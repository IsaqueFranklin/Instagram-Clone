import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import * as firebase from 'firebase'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'


class NotifyScreen extends React.Component {
  
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{fontSize:35, fontFamily: 'logo-font', marginVertical: 60, color: '#007aff'}}>Notifications</Text>
            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
              <Text>Logout</Text>
            </TouchableOpacity>
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifyScreen)