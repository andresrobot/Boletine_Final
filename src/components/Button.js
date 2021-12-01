// Libraries
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'

const Button = ({text}) => {
  
    return (
        <TouchableOpacity
        style={{height: y(60),width: x(200),borderRadius:x(10) ,backgroundColor:Colors.gray, justifyContent:"center", alignItems:"center", ...styles.Shadow}}
      >
        <Text style={{fontSize:x(25),fontFamily:"JostBold" ,color:Colors.middle}}>{text}</Text>
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
        elevation:2
     }
  })
  
  export default Button