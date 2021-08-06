import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostCheckout from '../screens/TabScreens/upload/PostCheckout'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
      <Stack.Screen name="PostCheckout" component={PostCheckout} options={{headerShown: true}} />
    </Stack.Navigator>
  );
}