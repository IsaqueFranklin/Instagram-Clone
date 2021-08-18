import React from 'react';
import * as firebase from 'firebase'
import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View, Button, Dimensions } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser, followUser, unFollowUser } from '../../actions/user'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class ProfileScreen extends React.Component {

  componentDidMount = () => {
    const { params } = this.props.route
    if (params !== undefined) {
      this.props.getUser(params, 'GET_PROFILE')
    }
  }

  follow = () => {
    this.props.followUser(this.props.profile.uid)
  }

  unFollow = () => {
    this.props.unFollowUser(this.props.profile.uid);
  }
  
  render(){
    const { params } = this.props.route

    this.props.navigation.setOptions({
      title: this.props.profile.username
    })


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
        <View style={{flex: 1, backgroundColor: 'white', backgroundColor: 'white'}}>
            <View style={{width: '100%', height:120, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Image source={{uri: this.props.profile.photo}}  style={{width: 90, height:90, borderRadius:45, margin:20}} />
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                  <View style={{justifyContent: 'center', alignItems: 'center', margin:8}}>
                      <Text style={{fontSize:20, fontWeight: 'bold'}}>
                        {this.props.profile.posts?.length}
                      </Text>
                      <Text style={{fontSize:15,}}>
                        Posts
                      </Text>
                  </View >
                  <View style={{justifyContent: 'center', alignItems: 'center', margin:8}}>
                      <Text style={{fontSize:20, fontWeight: 'bold'}}>
                      {this.props.profile.followers?.length}
                      </Text>
                      <Text style={{fontSize:15,}}>
                        Followers
                      </Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems: 'center', margin:8}}>
                      <Text style={{fontSize:20, fontWeight: 'bold'}}>
                      {this.props.profile.following?.length}
                      </Text>
                      <Text style={{fontSize:15,}}>
                        Following
                      </Text>
                  </View>
                </View>
            </View> 

            <View style={{paddingHorizontal:20, width: '100%', marginBottom:20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>
                {this.props.profile.username}
              </Text>
              <Text>
                {this.props.profile.bio}
              </Text>
            </View>

            {
              (this.props.profile.followers?.includes(this.props.user.uid))?
                <View style={{height:60, width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity 
                  onPress={() => this.unFollow()}
                  style={{flexDirection: 'row', width:screenWidth*.45, height:35, justifyContent: 'center',alignItems: 'center', borderWidth:0.5, borderColor: 'grey', borderRadius:7, margin:screenWidth*0.0125}}>
                      <Text style={{fontWeight: 'bold', fontSize:18, margin:5}}>Following</Text>
                      <Image source={require('../../assets/images/check.png')} style={{width:20, height:18}} />
                  </TouchableOpacity>

                  <TouchableOpacity style={{width:screenWidth*.45, height:35, justifyContent: 'center',alignItems: 'center', borderWidth:0.5, borderColor: 'grey', borderRadius:7, margin:screenWidth*0.0125}}>
                      <Text style={{fontWeight: 'bold', fontSize:18}}>Message</Text>
                  </TouchableOpacity>
                </View>
              :
                <View style={{height:60, width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity 
                  onPress={() => this.follow()}
                  style={{width: '90%', height: 35, backgroundColor: '#007aff', justifyContent: 'center', alignItems: 'center', borderRadius:8}}>
                      <Text style={{fontWeight: 'bold', fontSize:18, margin:5, color: 'white'}}>Follow</Text>
                  </TouchableOpacity>
                </View>

            }
        </View>
      );
    }
    
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser, followUser, unFollowUser }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        profile: state.profile,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)