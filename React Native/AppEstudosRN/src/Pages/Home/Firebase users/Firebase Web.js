import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqBVnAM6g4ybsUWdGmCz-HoUfyzZwto7E",
  authDomain: "estudos-reactn.firebaseapp.com",
  projectId: "estudos-reactn",
  storageBucket: "estudos-reactn.firebasestorage.app",
  messagingSenderId: "909818857534",
  appId: "1:909818857534:web:4463c3ec13d3f61ce6a96f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
