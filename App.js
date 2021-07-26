import {Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import SwitchNavigator from './navigation/LoginNavigator'

export default class App extends React.Component {
  
  render(){
    return (
      <SwitchNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
