import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { getAuth, signOut } from '@react-native-firebase/auth'; //import auth from '@react-native-firebase/auth';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import FabButton from '../../components/FabButton';
import ModalNewRoom from '../../components/ModalNewRoom';

export default function ChatRoom() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [user, setUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const authInstance = getAuth();
    const hasUser = authInstance.currentUser
      ? authInstance.currentUser.toJSON()
      : null;
    setUser(hasUser);
    console.log(hasUser);
  }, [isFocused]);

  async function handleSignOut() {
    try {
      await signOut(getAuth());
      setUser(null);
      navigation.navigate('SignIn');
    } catch (error) {
      console.log('Erro ao sair:', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRoom}>
        <View style={styles.headerRoomLeft}>
          {user && (
            <TouchableOpacity onPress={handleSignOut}>
              <MaterialIcons name="arrow-back" size={28} color="#fff" />
            </TouchableOpacity>
          )}
          <Text style={styles.title}>Grupos</Text>
        </View>

        <TouchableOpacity>
          <MaterialIcons name="search" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <FabButton setVisible={() => setModalVisible(true)} userStatus={user} />
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalNewRoom setVisible={() => setModalVisible(false)} />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRoom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#2e54d4',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerRoomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 10,
  },
});
