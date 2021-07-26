import {Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Login extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Isso é um puta de um desrespeito.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});