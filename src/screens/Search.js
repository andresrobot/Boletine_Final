//Libraries
import React from 'react'
import { View, StatusBar, Text, Image, StyleSheet, TextInput } from 'react-native'
//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'
import Button from '../components/Button'
import HomeButton from '../components/HomeButton'

export default function Search() {

    const [text, onChangeText] = React.useState(null);
    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
    });
    return (
        <View style={{flex:1}}>   
            <View style={{marginBottom:x(40), marginHorizontal:x(25)}}>
                <Image
                    source={require("../../assets/icons/logo.png")}
                    resizeMode="contain"
                    style={{width:x(280),height:y(200),tintColor:"rgba(139,170,173, 0.5)"}}
                />  
                <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-between"}}>  
                <Text style={{fontSize: x(70),fontFamily:"Jost", color:Colors.dark_green}}>BUSCAR</Text> 
                    <Image
                        source={require("../../assets/icons/LUPA.png")}
                        resizeMode="contain"
                        style={{width:x(224),height:y(200),opacity:0.2, position:"absolute", right:0}}
                    />
                </View> 
            </View>
           <View style={{flexDirection:"row",marginHorizontal:x(25)}}>
               
           </View>
           <TextInput
                        style={styles.input}
                        value={text}
                        placeholder="Buscar..."
                    />
            <View style={{alignItems:"flex-end", marginHorizontal:x(25)}}>
                <HomeButton text={"Buscar"}/>
            </View>  
        </View>
    )
}