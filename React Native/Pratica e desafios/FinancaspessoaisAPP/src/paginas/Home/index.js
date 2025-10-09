import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../Context/auth";
import Header from "../../Components/Header/Index";
import { Backgroud, ListBalance } from "./styles";
import api from "../../services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../Components/BalanceItem";

export default function Home() {
  const isfocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);

  const [dateMovements, setDateMovements] = useState(new Date());

  useEffect(() => {
    let isActive = true;
    async function getMovements() {
      let dateFormated = format(dateMovements, "dd/MM/yyyy");

      const balance = await api.get("/balance", {
        params: {
          date: dateFormated,
        },
      });
      if (isActive) {
        setListBalance(balance.data);
      }
    }
    getMovements();
    return () => (isActive = false);
  }, [isfocused]);

  return (
    <Backgroud>
      <Header title="Minhas Movimentações" />

      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />
    </Backgroud>
  );
}
