//Libraries
import React, { useState } from 'react'
import { View, StatusBar, Text, Image } from 'react-native'
//Styles
import * as Colors from '../styles/colors'
import { x, y } from '../styles/styles'
import Button from '../components/Button'
import { ListItem, Avatar, CheckBox } from 'react-native-elements'

const listAcuerdos = [
    {
        name: 'Boletín'
    }
]
export default function Acuerdos() {

    const [isChecked, setChecked] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginBottom: x(100), marginHorizontal: x(25) }}>
                <Image
                    source={require("../../assets/icons/logo.png")}
                    resizeMode="contain"
                    style={{ width: x(280), height: y(200), tintColor: "rgba(139,170,173, 0.5)" }}
                />
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: x(69), fontFamily: "Jost", color: Colors.dark_green }}>MIS ACUERDOS</Text>
                    <Image
                        source={require("../../assets/icons/LIBRO.png")}
                        resizeMode="contain"
                        style={{ width: x(224), height: y(200), opacity: 0.2, position: "absolute", right: 0 }}
                    />
                </View>
                <View>
                    {
                        listAcuerdos.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <Avatar source={require("../../assets/icons/BOLETIN.png")} />

                                <ListItem.Content>
                                    <ListItem.Title>{l.name}</ListItem.Title>
                                    <CheckBox
                                        title='Boletín 1234 con fecha 01/12/2021 en el juzgado 123'
                                        checked={isChecked}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        onPress={() => setChecked(!isChecked)}
                                        checkedColor={Colors.dark_green}
                                    />
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </View>
            </View>
            <View style={{ flexDirection: "row", marginHorizontal: x(25) }}>

            </View>

        </View>
    )
}


