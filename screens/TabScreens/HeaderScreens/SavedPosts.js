import React from 'react';
import { StyleSheet, Text, FlatList, TextInput, TouchableOpacity, SafeAreaView, View, Image, Dimensions } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../../actions/user'
import { getPosts, likePost, unLikePost, savePost, unSavePost } from '../../../actions/post'

import PostComponent from '../../Components/PostComponent'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class SavedPosts extends React.Component {
  

  componentDidMount = () => {
    this.props.getPosts(10)
  }


  render(){
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}}>
            <FlatList 
            style={{marginTop:0,}}
            data={this.props.post.feed}
            keyExtractor={(item) => JSON.stringify(item.uid)}
            renderItem={({item}) => (
              <PostComponent 
              item={item} 
              user={this.props.user} 
              likePost={(item)=>this.props.likePost(item)}
              unLikePost={(item)=>this.props.unLikePost(item)} 
              savePost={(item)=>this.props.savePost(item)}
              unSavePost={(item)=>this.props.unSavePost(item)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SavedPosts)