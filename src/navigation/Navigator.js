import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Style 
import * as Colors from '../styles/colors'
//Components
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Acuerdos from '../screens/Acuerdos';
import Notifications from '../screens/Notifications';
import InicioSesion from '../screens/InicioSesion';
import Resultados from '../screens/Resultados';


const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
            headerTintColor:Colors.middle,
            headerStyle:{
                backgroundColor:Colors.light_blue
            },
            headerTitle: "",
            drawerStyle: {
              backgroundColor: Colors.light_blue,
            },
            drawerActiveTintColor: Colors.middle,
            drawerInactiveTintColor:Colors.dark_green,
        }}
      >
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Perfil" component={Profile} />
        <Drawer.Screen name="Buscar Acuerdos" component={Search} />
        <Drawer.Screen name="Mis Acuerdos" component={Acuerdos} />
        <Drawer.Screen name="Notificaciones" component={Notifications} />
        <Drawer.Screen name="Inicio de sesión" component={InicioSesion} />
        <Drawer.Screen name="Resultados" component={Resultados} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}