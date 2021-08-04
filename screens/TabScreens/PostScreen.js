import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, SafeAreaView, Platform, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class PostScreen extends React.Component {

  openLibrary = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if(status === 'granted') {
        const image = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
        })
        if(!image.cancelled){
          //const url = await this.props.uploadPhoto(image)
          alert('Image has been uploaded.')
          alert(image.uri)
        }
      }
    } catch(error) {
      alert(error.message)
    }
  }
  
  render(){
    return (
      <SafeAreaView style={{flex: 1}}>
          <View style={(Platform.OS == 'ios' ? {width: screenWidth, height:55, borderBottomColor: 'grey', borderBottomWidth:1} : {width: screenWidth, height: 55, borderBottomColor:'blue', borderBottomWidth:1, marginTop:30, justifyContent: 'space-between', alignItems: 'center', flexDirection:'row'})}>
              <Text style={{margin:10, fontWeight: 'bold', fontSize:22}}>Create a new post</Text>
              <TouchableOpacity style={{margin:10}}>
                  <Text style={{margin:10, fontWeight: 'bold', fontSize:22, color:'#007aff'}}>Upload</Text>
              </TouchableOpacity>
          </View>

          <View style={{width:screenWidth, height:360,}}>
              <Image source={require('../../assets/images/image.jpg')} style={{width:screenWidth, height:360,}} />
          </View>

          <View style={{flexDirection: 'row', width:screenWidth, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={{width:95, height:90, backgroundColor:'rgba(0, 0, 0, 0.1)', justifyContent: 'center', alignItems: 'center', borderRadius:5}}
              onPress={() => this.openLibrary()}>
                  <View style={{width:40, height:40, borderRadius:20, backgroundColor:'rgba(0, 0, 0, 0.1)', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{color:'white', fontSize:30}}>+</Text>
                  </View>
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