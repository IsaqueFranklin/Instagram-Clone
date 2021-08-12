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


  render(){
    return (
        <View style={{marginBottom:40}}>
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
                    <Image source={require('../../assets/images/heart.png')} style={{width: 20, height:20, margin:10}} />
                    <Image source={require('../../assets/images/comment.png')} style={{width: 20, height:20, margin:10}} />
                    <Image source={require('../../assets/images/share.png')} style={{width: 20, height:20, margin:10}} />
              </View>
              <Text>Share</Text>
          </View>
        </View>
    );
  }
}