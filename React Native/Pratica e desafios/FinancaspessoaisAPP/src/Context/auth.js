import React, { createContext, useState, useEffect } from "react";
import { Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {


  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function laodingStorage() {
      const storageUser = await AsyncStorage.getItem("@finToken");

      if (storageUser) {
        const response = await api
          .get("/me", {
            headers: {
              Authorization: `Bearer ${storageUser}`,
            },
          })
          .catch(() => {
            setUser(null);
          });
        api.defaults.headers["Authorization"] = `Baerer ${storageUser}`;
        setUser(response.data);
        setLoading(false);
      }
      setLoading(false);
    }
    laodingStorage();
  }, []);



  async function signUp(email, password, nome) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/users", {
        name: nome,
        password: password,
        email: email,
      });
      setLoadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log("erro ao cadastrar", err);
      setLoadingAuth(false);
    }
  }


  const [user, setUser] = useState(null);

  async function signIn(email, password) {
    setLoadingAuth(true);
    try {
      const response = await api.post("/login", {
        email: email,
        password: password,
      });
      const { id, name, token } = response.data;
      const data = { id, name, token, email };
      await AsyncStorage.setItem("@finToken", token);
      api.defaults.headers["Authorization"] = `Barer ${token}`;
      setUser({ id, name, email });
      console.log(data);
      setLoadingAuth(false);
    } catch (err) {
      console.log("Erro ao Logar ", err);
      setLoadingAuth(false);
    }
  }


  async function signOut() {
    await AsyncStorage.clear()
    .then(()=>{
      setUser(null);
    })
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, signIn, signOut, loadingAuth, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
