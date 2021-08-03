import {Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import firebase from 'firebase/app'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'


class Welcome extends React.Component {

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                getUser(user.uid)
                if(this.props.user != null){
                    this.props.navigation.navigate('StackNavigator')
                    this.props.navigation.reset({
                        index:0,
                        routes: [{ name: 'StackNavigator'}]
                    })
                }
            } else {
                this.props.navigation.navigate('Login')
            }
        })
    }
  
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
          <Text>Waiting</Text>
          <TouchableOpacity style={{alignItems: 'center', flexDirection: 'row', margin:10}}
            onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{fontSize: 18}}>Already have an account? </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0095f6'}}>Login</Text>
            </TouchableOpacity>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)