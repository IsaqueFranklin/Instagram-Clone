import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostCheckout from '../screens/TabScreens/upload/PostCheckout'
import SavedPosts from '../screens/TabScreens/HeaderScreens/SavedPosts';
import ProfileScreen from '../screens/TabScreens/ProfileScreen'
import OnePost from '../screens/TabScreens/OnePost'
import MessagesScreen from '../screens/TabScreens/HeaderScreens/MessagesScreen'

import { uploadPost, getPosts } from '../actions/post'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../actions/user'


const Stack = createStackNavigator();

class MyStack extends React.Component {

  uploadPost=()=>{
    this.props.navigation.navigate('TabNavigator')
    //alert('posted')
    this.props.uploadPost()
    this.props.getPosts()
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
        <Stack.Screen name="SavedPosts" component={SavedPosts} />
        <Stack.Screen name="OnePost" component={OnePost} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{
          headerStyle: {
            backgroundColor: 'white', borderWidth: 0
          }
        }} />
        <Stack.Screen name="PostCheckout" component={PostCheckout} 
        options={{
          headerShown: true, 
          headerTitle: 'See your post',
          headerRight: () => (
              <TouchableOpacity style={{margin:22, flexDirection: 'row'}}
              onPress={()=> this.uploadPost()}>
                <Text style={{color: 'blue', fontWeight: 'bold', fontSize:22, marginHorizontal:5, bottom:0}}>Post</Text>
                  <FontAwesome name='check' color={'blue'} size={25} style={{top:2}} />
              </TouchableOpacity>
          )
          }} />
      </Stack.Navigator>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUser, uploadPost, getPosts }, dispatch)
}

const mapStateToProps = (state) => {
  return{
      user: state.user,
      post: state.post
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyStack)