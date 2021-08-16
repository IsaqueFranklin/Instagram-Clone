import React from 'react';
import * as firebase from 'firebase'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Dimensions } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'


class ProfileScreen extends React.Component {

  componentDidMount = () => {
    const { params } = this.props.route
    if (params !== undefined) {
      this.props.getUser(params, 'GET_PROFILE')
    }
  }
  
  render(){
    const { params } = this.props.route
    if(params == undefined){
      return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',  backgroundColor: '#f5f5dc'}}>
              <Text style={{fontSize:35, fontFamily: 'logo-font', marginVertical: 60, color: '#007aff'}}>Your Profile</Text>
              <TouchableOpacity onPress={()=> firebase.auth().signOut()}>
                <Text>Logout</Text>
              </TouchableOpacity>
        </View>
      );
    } 
    
    
    else {
      return (
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',  backgroundColor: '#f5f5dc'}}>
              <Text style={{fontSize:35, fontFamily: 'logo-font', marginVertical: 60, color: '#007aff'}}>{this.props.profile.username}</Text>
              <TouchableOpacity onPress={()=> firebase.auth().signOut()}>
                <Text>Logout</Text>
              </TouchableOpacity>
        </View>
      );
    }
    
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        profile: state.profile,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)