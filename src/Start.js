//Libraries
import React from 'react'
import { View, StatusBar, Text } from 'react-native'
import { useFonts } from 'expo-font';
//Styles
import * as Colors from './styles/colors'
import LoadingAnimation from './components/LoadingAnimation';

//Components
import Navigator from './navigation/Navigator';

export default function Start() {

    const [loaded] = useFonts({
        JostItalic: require('../assets/fonts/Jost-Italic.ttf'),
        JostBold: require('../assets/fonts/Jost-Bold.ttf'),
        Jost: require('../assets/fonts/Jost-Regular.ttf'),
    });
    
    if (!loaded) {
    return <LoadingAnimation/>;
    }
    
  return(
    <View style={{ flex: 1, backgroundColor: Colors.middle }}>
      <StatusBar barStyle= 'light-content' />
      <Navigator/>
    </View>
  )
}