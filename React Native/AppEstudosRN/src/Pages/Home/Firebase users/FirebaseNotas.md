// ========== FIREBASE ==========
esse é um arquivo comentando e explicando o arquivo Firebase.js por motivos de segurança

// Firebase é uma plataforma do Google que oferece serviços como autenticação, banco de dados, armazenamento e outros recursos para apps web e mobile.
// Este arquivo inicializa o Firebase e exporta as instâncias de autenticação e banco de dados Firestore para uso no app React Native.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";//Firestore (banco de dados NoSQL)

import { initializeAuth, getReactNativePersistence } from "firebase/auth"; //autenticação e persistência
import AsyncStorage from "@react-native-async-storage/async-storage";//AsyncStorage para persistência local no dispositivo

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
// Inicializa o app Firebase com as configurações acima

const db = getFirestore(app);
// Cria uma instância do Firestore usando o app inicializado

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Configura a autenticação para persistir dados usando AsyncStorage no React Native
});

export { db, auth };
// Exporta as instâncias do Firestore e Auth para uso em outros arquivos
