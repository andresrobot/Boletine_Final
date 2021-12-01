// Libraries
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'

const HomeButton = ({ text }) => {
  let nav = text
  const navigation = useNavigation();
  if (nav == "Inicio de sesión") {
    nav = "Inicio"
  }
  else if (text == "Cerrar Sesión") {
    nav = "Inicio de sesión"
  }
  else if (text == "Buscar")
  {
    nav = "Resultados"
  }

  return (
    <TouchableOpacity
      style={{ height: y(60), width: x(200), borderRadius: x(10), backgroundColor: Colors.gray, justifyContent: "center", alignItems: "center", ...styles.Shadow }}
      onPress={() => { navigation.navigate(nav) }}
    >
      <Text style={{ fontSize: x(25), fontFamily: "JostBold", color: Colors.middle }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 2
  }
})

export default HomeButton