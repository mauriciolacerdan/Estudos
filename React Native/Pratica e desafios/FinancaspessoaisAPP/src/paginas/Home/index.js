import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

import { AuthContext } from "../../Context/auth";
import Header from "../../Components/Header/Index";
import { Backgroud, ListBalance, Area, Title, List } from "./styles";
import api from "../../services/api";
import { format } from "date-fns";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../Components/BalanceItem";
import { MaterialIcons } from "@expo/vector-icons";
import HistoricoList from "../../Components/HistoricoList/Index";
import CalendarModal from "../../Components/CalendarModal/Index";

export default function Home() {
  const isfocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let date = new Date(dateMovements);
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 100;
      let dateFormated = format(onlyDate, "dd/MM/yyyy");

      const receives = await api.get("/receives", {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get("/balance", {
        params: {
          date: dateFormated,
        },
      });
      if (isActive) {
        setMovements(receives.data);
        setListBalance(balance.data);
      }
    }
    getMovements();
    return () => (isActive = false);
  }, [isfocused, dateMovements]);

  async function handleDelet(id) {
    try {
      await api.delete("/receives/delete", {
        params: {
          item_id: id,
        },
      });
      setDateMovements(new Date());
    } catch (err) {
      console.log(err);
    }
  }

  function filterDateMovements(dateSelected) {
    //console.log(dateSelected);
    setDateMovements(dateSelected);
  }

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

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>
      <List
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HistoricoList data={item} deleteItem={handleDelet} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
      </Modal>
    </Backgroud>
  );
}
