//Libraries
import React from 'react'
import { View, Image, Text, TextInput, StyleSheet } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons';
//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'

//Components
import HomeButton from '../components/HomeButton'
import Button from '../components/Button'

export default function InicioSesion() {

    const [text, onChangeText, password, onChangePassword] = React.useState(null);
    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
    });
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginBottom: x(40), marginHorizontal: x(25) }}>
                <Image
                    source={require("../../assets/icons/logo.png")}
                    resizeMode="contain"
                    style={{ width: x(280), height: y(200), tintColor: "rgba(139,170,173, 0.5)" }}
                />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: x(80), fontFamily: "Jost", color: Colors.dark_green }}>Iniciar sesión</Text>
                    <Image
                        source={require("../../assets/icons/PERSONA.png")}
                        resizeMode="contain"
                        style={{ width: x(200), height: y(180), tintColor: "rgba(139,170,173, 0.5)" }}
                    />
                </View>
            </View>
            <View style={{ marginHorizontal: x(25), marginBottom: x(80) }}>
                <View style={{ position: "absolute", top: -30 }}>
                    <Ionicons name="settings-sharp" size={70} color="rgba(139,170,173, 0.2)" />
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: x(40), fontFamily: "JostBold", color: Colors.dark_green }}>E-MAIL: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="E-MAIL"
                    />

                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: x(40), fontFamily: "JostBold", color: Colors.dark_green }}>PASSWORD: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
  
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <HomeButton text={"Inicio de sesión"} />
            </View>
        </View>
    )
}