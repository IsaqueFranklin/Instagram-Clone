import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/AuthScreens/Login'
import Signup from '../screens/AuthScreens/SignUp'


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
                <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}