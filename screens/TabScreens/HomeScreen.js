import React from 'react';
import { StyleSheet, Text, FlatList, TextInput, TouchableOpacity, View, Image, Dimensions } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
import { getPosts } from '../../actions/post'

import PostComponent from '../Components/PostComponent'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class HomeScreen extends React.Component {
  

  componentDidMount = () => {
    this.props.getPosts(10)
  }


  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{fontSize:30, fontFamily: 'logo-font', bottom: 0, marginTop: 70, color: '#007aff', justifyContent: 'left'}}>Home</Text>
            <FlatList 
            style={{marginTop:50,}}
            data={this.props.post.feed}
            keyExtractor={(item) => JSON.stringify(item.uid)}
            renderItem={({item}) => (
              <PostComponent 
              item={item} />
            )}
            />
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser, getPosts }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)