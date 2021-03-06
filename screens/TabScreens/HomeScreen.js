import React from 'react';
import { StyleSheet, Text, FlatList, TextInput, TouchableOpacity, SafeAreaView, View, Image, Dimensions } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
import { getPosts, likePost, unLikePost, savePost, unSavePost } from '../../actions/post'

import PostComponent from '../Components/PostComponent'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class HomeScreen extends React.Component {

  componentDidMount = () => {
    this.props.getPosts(10);
    if (this.props.user.uid !== undefined) {
      this.props.getUser(this.props.user.uid, 'GET_PROFILE')
    }
}


  render(){
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}}>
            <View style={{height:50, width: screenWidth, borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth:0.5, justifyContent: 'space-between', flexDirection: 'row', marginTop:60}}>
              <Text style={{fontSize:25, fontFamily: 'logo-font', color: '#007aff', marginLeft: 30}}>NotInstagram</Text>
              <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('SavedPosts')}>
                      <Image source={require('../../assets/images/heart.png')} style={{width: 25, height:25, margin:10, bottom:4}} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('MessagesScreen')}>
                      <Image source={require('../../assets/images/share.png')} style={{width: 25, height:25, margin:10, bottom:5}} />
                  </TouchableOpacity>
              </View>
            </View>
            <FlatList 
            refreshing={true}
            data={this.props.post.feed}
            keyExtractor={(item) => JSON.stringify(item.uid)}
            renderItem={({item}) => (
              <PostComponent 
              item={item} 
              user={this.props.user} 
              likePost={(item)=>this.props.likePost(item)}
              unLikePost={(item)=>this.props.unLikePost(item)} 
              savePost={(item)=>this.props.savePost(item)}
              unSavePost={(item)=>this.props.unSavePost(item)} 
              navigation={this.props.navigation} 
              profile={this.props.profile} />
            )}
            />
      </SafeAreaView>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser, getPosts, likePost, unLikePost, savePost, unSavePost }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)