import {Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { uploadPhoto } from '../../actions/index'
import { updatePhoto } from '../../actions/user'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class ProfilePicture extends React.Component {

    openLibrary = async () => {
        const { status } = await Permissions.askAsync(permissions.CAMERA_ROLL)
        if( status === 'granted'){
            const image = await ImagePicker.launchImageLibraryAsync({
                allowsEditing:true
            })
            if(!image.cancelled){
                const url = await this.props.uploadPhoto(image)
                this.props.uploadPhoto(url)
            }
        }
    }

  
  render(){
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', bottom:100}}>
        <Text style={{fontWeight: 'bold', fontSize:24, color: 'black', margin:15}}>Choose a profile picture</Text>
            {
                (this.props.user.photo === undefined) ?
                <TouchableOpacity onPress={() => this.openLibrary()}>
                    <View style={{width:screenWidth*0.5, height:screenHeight*0.5, borderRadius: screenWidth*.25, backgroundColor: "beige"}}/>
                </TouchableOpacity>
                : 
                <TouchableOpacity onPress={() => this.openLibrary()}>
                    <Image 
                    source={{uri:this.props.user.photo}} 
                    style={{width:screenWidth*0.5, height:screenHeight*0.5, borderRadius: screenWidth*.25, backgroundColor: "beige"}}/>
                </TouchableOpacity>
            }
            <TouchableOpacity style={{margin:25, padding:20, borderRadius:14, backgroundColor: "rgba(0,0,0,0.05)", width:screenWidth*.9, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize24,color: "black"}}>Continue</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ uploadPhoto, updatePhoto }, dispatch)
}

const mapStateToProps = (state) => {
  return{
    user: state.user,
    post: state.post
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture)