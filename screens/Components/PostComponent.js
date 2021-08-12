import React from 'react';
import { StyleSheet, Text, FlatList, TextInput, TouchableOpacity, View, Image, Dimensions } from 'react-native';
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
                <Text style={{margin:15}}>{moment(this.props.item.date).format('11')}</Text>
            </View>
            <Image source={{uri: this.props.item.photos[0]}} style={{width:screenWidth, height:360,}} />
        </View>
    );
  }
}