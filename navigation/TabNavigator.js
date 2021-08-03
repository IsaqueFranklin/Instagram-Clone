import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import PostScreen from '../screens/TabScreens/PostScreen';


const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
    </Tab.Navigator>
  );
}