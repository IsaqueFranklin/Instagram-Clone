import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, SafeAreaView, Platform } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class PostScreen extends React.Component {
  
  render(){
    return (
      <SafeAreaView style={{flex: 1}}>
          <View style={(Platform.OS == 'ios' ? {width: screenWidth, height:55, borderBottomColor: 'grey', borderBottomWidth:1} : {width: screenWidth, height: 55, borderBottomColor:'grey', borderBottomWidth:1, marginTop:30, justifyContent: 'space-between', alignItems: 'center', flexDirection:'row'})}>
              <Text style={{margin:10, fontWeight: 'bold', fontSize:22}}>Create a new post</Text>
              <TouchableOpacity style={{margin:10}}>
                  <Text style={{margin:10, fontWeight: 'bold', fontSize:22, color:'#007aff'}}>Upload</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)