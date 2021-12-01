//Libraries
import React from 'react'
import { View, Image, Text } from 'react-native'
//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'

//Components
import HomeButton from '../components/HomeButton'
import Button from '../components/Button'

export default function Home() {

    return (
        <View style={{flex:1, alignItems:"center", justifyContent:"space-around"}}>     
            <View>   
                <Image
                    source={require("../../assets/icons/logo.png")}
                    resizeMode="contain"
                    style={{width:x(280),height:y(200)}}
                />
                <Text style={{fontSize: x(50),fontFamily:"Jost", color:Colors.dark_green}}>Bienvenido! </Text>
            </View> 
            <View>
                <Image
                    source={require("../../assets/icons/LIBRO.png")}
                    resizeMode="contain"
                    style={{width:x(200),height:y(200)}}
                />
                <HomeButton text={"Mis Acuerdos"}/>
            </View>
            <View style={{width:x(450), flexDirection:"row"}}>
                <Image
                    source={require("../../assets/icons/PERSONA.png")}
                    resizeMode="contain"
                    style={{width:x(200),height:y(180)}}
                />
                <View style={{justifyContent:"space-around"}}>
                    <HomeButton text={"Perfil"}/>
                    <Button text={"Cerrar Sesión"}/>
                </View>
            </View>
        </View>
    )
}