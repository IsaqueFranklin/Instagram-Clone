import * as React from 'react';
import { View, Text } from 'react-native'
import { useFonts } from '@use-expo/font';
//import { AppLoading } from 'expo'
import { NavigationContainer } from '@react-navigation/native';
import { Assets, createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/AuthScreens/Login'
import Signup from '../screens/AuthScreens/SignUp'


const Stack = createStackNavigator();

export default function App() {

    let [fontsLoaded] = useFonts({
        'logo-font': require('../assets/fonts/Handlee-Regular.ttf')
    });

    if (!fontsLoaded){
        return <View />
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={Login} options={{headerShown: false, title: 'Login'}} />
                    <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}