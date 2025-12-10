import React, { useState } from 'react';
import {
  Container,
  Name,
  Header,
  Avatar,
  Content,
  ContentView,
  Actions,
  LikeButton,
  Like,
  TimePost,
} from './styles';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function PostsList({ data, userId }) {
  const navigation = useNavigation();
  const [likePost, setLikePost] = useState(data?.likes);

  async function handleLikePost(id, Likes) {
    const docId = `${userId}_${id}`;

    const doc = await firestore().collection('likes').doc(docId).get();

    if (doc.exists()) {
      await firestore()
        .collection('posts')
        .doc(id)
        .update({
          likes: Likes - 1,
        });

      await firestore()
        .collection('likes')
        .doc(docId)
        .delete()
        .then(() => {
          setLikePost(Likes - 1);
        });

      return;
    }

    await firestore().collection('likes').doc(docId).set({
      postId: id,
      userId: userId,
    });

    await firestore()
      .collection('posts')
      .doc(id)
      .update({
        likes: Likes + 1,
      })
      .then(() => {
        setLikePost(Likes + 1);
      });
  }

  function formateTimePost() {
    const datePost = new Date(data.created.seconds * 1000);
    return formatDistance(new Date(), datePost, {
      locale: ptBR,
    });
  }

  return (
    <Container>
      <Header
        onPress={() =>
          navigation.navigate('PostsUser', {
            title: data.autor,
            userId: data.userId,
          })
        }
      >
        {data.avatarUrl ? (
          <Avatar source={{ uri: data.avatarUrl }} />
        ) : (
          <Avatar source={require('../../assets/avatar.png')} />
        )}

        <Name numberOfLines={1}>{data?.autor}</Name>
      </Header>

      <ContentView>
        <Content>{data?.content}</Content>
      </ContentView>

      <Actions>
        <LikeButton onPress={() => handleLikePost(data.id, likePost)}>
          <Like>{likePost === 0 ? '' : likePost}</Like>
          <MaterialCommunityIcons
            name={likePost === 0 ? 'heart-plus-outline' : 'cards-heart'}
            size={20}
            color="#e52246"
          />
        </LikeButton>

        <TimePost>{formateTimePost()}</TimePost>
      </Actions>
    </Container>
  );
}
