//Libraries
import React from 'react'
import { View, Image, Text } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons';
//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'

//Components
import Button from '../components/Button'

export default function Profile() {


    return (
        <View style={{flex:1}}>   
            <View style={{marginBottom:x(40), marginHorizontal:x(25)}}>
                <Image
                    source={require("../../assets/icons/logo.png")}
                    resizeMode="contain"
                    style={{width:x(280),height:y(200),tintColor:"rgba(139,170,173, 0.5)"}}
                />  
                <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>  
                <Text style={{fontSize: x(80),fontFamily:"Jost", color:Colors.dark_green}}>PERFIL</Text> 
                    <Image
                        source={require("../../assets/icons/PERSONA.png")}
                        resizeMode="contain"
                        style={{width:x(200),height:y(180), tintColor:"rgba(139,170,173, 0.5)"}}
                    />
                </View> 
            </View>
            <View style={{marginHorizontal:x(25),marginBottom:x(80)}}> 
                <View style={{position:"absolute", top:-30}}>
                    <Ionicons name="settings-sharp" size={70} color="rgba(139,170,173, 0.2)" />  
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize: x(40),fontFamily:"JostBold", color:Colors.dark_green}}>NOMBRE: </Text>
                    <Text style={{fontSize: x(40),fontFamily:"Jost", color:Colors.dark_green}}>Andrés </Text>
                </View>  
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize: x(40),fontFamily:"JostBold", color:Colors.dark_green}}>E-MAIL: </Text>
                    <Text style={{fontSize: x(40),fontFamily:"Jost", color:Colors.dark_green}}>abogados@gmail.com</Text>
                </View>  
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize: x(40),fontFamily:"JostBold", color:Colors.dark_green}}>CONTRASEÑA: </Text>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </View>  
            </View>
            <View style={{alignItems:"center"}}>
                <Button text={"Editar"}/>
            </View>  
        </View>
    )
}