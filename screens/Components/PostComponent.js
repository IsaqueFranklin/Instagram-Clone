import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList, TextInput, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height


export default class PostComponent extends React.Component {
    static propTypes = {
        prop: PropTypes
    }

    state = {
        liked: undefined,
        numLike: 0,
        saved: undefined,
    }

    likePost = () => {
        if((this.props.item.likes.includes(this.props.user.uid)) || this.state.liked == true){
            if(this.state.liked == false){
                this.setState({liked: true})
                this.setState({numLike:this.state.numLike+1})
                this.props.likePost(this.props.item)
            } else {
                this.setState({liked: false})
                this.setState({numLike:this.state.numLike-1})
                this.props.unLikePost(this.props.item)
            }
        } else {
            this.setState({liked: true})
            this.props.likePost(this.props.item)
            this.setState({numLike: this.state.numLike+1})
        }
    }

    savePost = () => {
        if((this.props.item.savedBy.includes(this.props.user.uid)) || this.state.saved == true){
            if(this.state.liked == false){
                this.setState({saved: true})
                this.props.savePost(this.props.item)
            } else {
                this.setState({saved: false})
                this.props.unSavePost(this.props.item)
            }
        } else {
            this.setState({saved: true})
            this.props.savePost(this.props.item)
        }
    }


  render(){
    return (
        <View style={{marginBottom:10}}>
            <View style={{width:screenWidth, height:60, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: 'grey', borderBottomWidth: 0.07}}>
                <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row',}}>
                    <Image source={{uri: this.props.item.photo}} style={{width:40, height:40, borderRadius:20, margin:15}} />
                    <Text style={{fontWeight: '400', fontSize:16}}>{this.props.item.username}</Text>
                </View>
                <Text style={{margin:15}}>{moment(this.props.item.date).format('ll')}</Text>
            </View>
            <View>
            <ScrollView 
                horizontal={true}
                pagingEnabled={true}>
                {
                    this.props.item.photos?.map(e=>
                        <Image source={{uri: e}} style={{width:screenWidth, height:360,}} />
                    )
                }
                </ScrollView>
          </View>

        {/*this is our bottom bar*/}
          <View style={{width:screenWidth, height:50, flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                    onPress={() => this.likePost()}>
                        {
                            (this.props.item.likes.includes(this.props.user.uid) && this.state.liked == undefined)
                            ?
                            <Image source={require('../../assets/images/red.png')} style={{width: 25, height:25, margin:10}} />
                            :
                                (this.state.liked == true) 
                                ?
                                <Image source={require('../../assets/images/red.png')} style={{width: 25, height:25, margin:10}} />
                                :
                                <Image source={require('../../assets/images/heart.png')} style={{width: 25, height:25, margin:10}} />
                        }
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/comment.png')} style={{width: 25, height:25, margin:10}} />
                    <Image source={require('../../assets/images/share.png')} style={{width: 25, height:25, margin:10}} />
              </View>
              <TouchableOpacity onPress={() => this.savePost()}>
                {
                    (this.props.item.savedBy.includes(this.props.user.uid) && this.state.saved == undefined)
                    ?
                    <Image source={require('../../assets/images/saved.png')} style={{width: 25, height:25, margin:10}} />
                    :
                    (this.state.saved == true) ?
                    <Image source={require('../../assets/images/saved.png')} style={{width: 25, height:25, margin:10}} />
                    :
                    <Image source={require('../../assets/images/save.png')} style={{width: 25, height:25, margin:10}} />
                }
              </TouchableOpacity>
          </View>
          <Text style={{fontWeight: 'bold', marginHorizontal:10, marginTop:5}}>{this.props.item.likes.length + this.state.numLike} likes</Text>
          
          <View style={{flexDirection: 'row', marginTop:5}}>
                <Text style={{fontWeight: 'bold', marginLeft:10}}>{this.props.item.username} </Text>
                <Text>{this.props.item.description}</Text>
          </View>
          <TouchableOpacity>
                <Text style={{marginHorizontal:10, color:'grey', marginTop:5}}>Show all the comments: {this.props.item.comments.length}</Text>
          </TouchableOpacity>

          <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: this.props.item.photo}} style={{width:40, height:40, borderRadius:20, marginHorizontal:10, marginTop:5}} />
                <Text style={{color:'grey', marginTop:5}}>Add a comment...</Text>
            </View>
            <Image source={require('../../assets/images/flame.png')} style={{width:25, height:25, margin: 15}} />
          </View>
          <Text style={{color:'grey', margin:10}}>{moment(this.props.item.date).format('ll')}.</Text>
        </View>
    );
  }
}