import React from 'react';
import { StyleSheet, Text, FlatList, TextInput, TouchableOpacity, View, Image, Dimensions } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
import { getPosts } from '../../actions/post'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


class HomeScreen extends React.Component {
  

  componentDidMount = () => {
    this.props.getPosts(10)
  }


  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',  backgroundColor: '#f5f5dc'}}>
            <Text style={{fontSize:35, fontFamily: 'logo-font', marginVertical: 60, color: '#007aff'}}>Home</Text>
            <FlatList 
            data={this.props.post.feed}
            keyExtractor={(item) => JSON.stringify(item.uid)}
            renderItem={({item}) => (
              <View>
                  <Image source={{uri:item.photos[0]}} style={{width:screenWidth, height:360,}} />
              </View>
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