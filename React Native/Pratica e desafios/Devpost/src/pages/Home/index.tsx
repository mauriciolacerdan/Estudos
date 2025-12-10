import React, { useState, useContext, useCallback } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Container, ButtonPost, ListPosts } from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import firestore from '@react-native-firebase/firestore';
import PostsList from '../../components/PostList';

export default function Home() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [lastItem, setLastItem] = useState('');
  const [emptyList, setEmptyList] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      function fetchPosts() {
        firestore()
          .collection('posts')
          .orderBy('created', 'desc')
          .limit(5)
          .get()
          .then(snapshot => {
            if (isActive) {
              setPosts([]);
              const postList = [];
              snapshot.docs.map(u => {
                postList.push({
                  ...u.data(),
                  id: u.id,
                });
              });

              setEmptyList(!!snapshot.empty);
              setPosts(postList);
              setLastItem(snapshot.docs[snapshot.docs.length - 1]);
              setLoading(false);
            }
          });
      }
      fetchPosts();

      return () => {
        isActive = false;
      };
    }, []),
  );

  // buscar mais posts quando puchar lista para cima
  async function handleRefreshPosts() {
    setLoadingRefresh(true);

    firestore()
      .collection('posts')
      .orderBy('created', 'desc')
      .limit(5)
      .get()
      .then(snapshot => {
        setPosts([]);
        const postList = [];

        snapshot.docs.map(u => {
          postList.push({
            ...u.data(),
            id: u.id,
          });
        });

        setEmptyList(false);
        setPosts(postList);
        setLastItem(snapshot.docs[snapshot.docs.length - 1]);
        setLoading(false);
      });
    setLoadingRefresh(false);
  }

  // buscar mais posts ao chegar no final da lista
  async function getListsPosts() {
    if (emptyList) {
      setLoading(false);
      return null;
    }
    if (loading) return;

    firestore()
      .collection('posts')
      .orderBy('created', 'desc')
      .limit(5)
      .startAfter(lastItem)
      .get()
      .then(snapshot => {
        const postList = [];

        snapshot.docs.map(u => {
          postList.push({
            ...u.data(),
            id: u.id,
          });
        });

        setEmptyList(!!snapshot.empty);
        setLastItem(snapshot.docs[snapshot.docs.length - 1]);
        setPosts(oldPosts => [...oldPosts, ...postList]);
        setLoading(false);
      });
  }

  return (
    <Container>
      <Header />
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={50} color="#e52246" />
        </View>
      ) : (
        <ListPosts
          showsVerticalScrollIndicator={false}
          data={posts}
          renderItem={({ item }) => (
            <PostsList data={item} userId={user?.uid} />
          )}
          refreshing={loadingRefresh}
          onRefresh={handleRefreshPosts}
          onEndReached={() => getListsPosts()}
          onEndReachedThreshold={0.1}
        />
      )}

      <ButtonPost
        activeOpacity={0.8}
        onPress={() => navigation.navigate('NewPost')}
      >
        <Feather name="edit-2" color="#fff" size={25} />
      </ButtonPost>
    </Container>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
