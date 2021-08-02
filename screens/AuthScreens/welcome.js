import {Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


class Login extends React.Component {
  
  render(){
    return (
      <View>
          
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)