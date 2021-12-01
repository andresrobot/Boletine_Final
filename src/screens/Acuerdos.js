//Libraries
import React, {useState,  useEffect} from 'react';
import {View, Image, Text } from 'react-native'
//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'

//Components 
import Button from '../components/Button'

export default function Acuerdos() {


    return (
        <View style={{flex:1}}>   
            <View style={{marginBottom:x(40), marginHorizontal:x(25)}}>
                <Image
                    source={require("../../assets/icons/logo.png")}
                    resizeMode="contain"
                    style={{width:x(280),height:y(200),tintColor:"rgba(139,170,173, 0.5)"}}
                />  
                <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>  
                <Text style={{fontSize: x(70),fontFamily:"Jost", color:Colors.dark_green}}>MIS ACUERDOS</Text> 
                    <Image
                        source={require("../../assets/icons/LIBRO.png")}
                        resizeMode="contain"
                        style={{width:x(224),height:y(200),opacity:0.2, position:"absolute", right:0}}
                    />
                </View> 
            </View>
           <View style={{flexDirection:"row",marginHorizontal:x(25)}}>
               
           </View>
            <View style={{alignItems:"flex-end", marginHorizontal:x(25)}}>
                <Button text={"Eliminar"}/>
            </View>  
        </View>
    )
}