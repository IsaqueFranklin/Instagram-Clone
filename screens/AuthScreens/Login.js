import {Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Login extends React.Component {
  
  render(){
    return (
      <View style={styles.container}>
        <Text>Login page</Text>
        <TouchableOpacity 
        style={{backgroundColor: 'black', padding: 10, margin: 10, borderRadius: 5}}
        onPress={()=> this.props.navigation.navigate('Signup')}>
          <Text style={{color: 'white'}}>Go to signup page</Text>
        </TouchableOpacity>
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