import React from 'react';
import { StyleSheet, Text, TextInput, Platform, FlatList, KeyboardAvoidingView, TouchableOpacity, View, Dimensions } from 'react-native';
import firebase from "firebase/app"
import 'firebase/firestore'

import { addMessage } from '../../../actions/post'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const keyboardVerticalOffset = Platform.OS === 'ios' ? 120 : 100


class MessagesScreen extends React.Component {
  

    state = {
        messages: [],
        message: ''
    }


    constructor(props) {
        super(props);

        this.subscriber = 
        firebase.firestore()
        .collection('messages')
        .limit(50)
        .orderBy('date', 'desc')
        .onSnapshot(docs => {
            let messages = []
            docs.forEach(doc => {
                messages.push(doc.data())
            })
            this.setState({messages})
        })
    };

    sendMessage = () => {
        if (this.state.message.replace(/\s/g, '').length) {
            this.props.addMessage(this.state.message)
            this.setState({message: ''})
        }
    }


  render(){
    return (
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : null}
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',}}>
            <FlatList
            inverted
            style={{flex:1}}
            keyExtractor={(item) => JSON.stringify(item.date)}
            data={this.state.messages}
            renderItem={({item}) => (
                <View>
                    <Text>{item.message}</Text>
                </View>
            )} />
            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', borderTopWidth:0.5, borderColor: 'gray', color: 'black'}}>
                <TextInput 
                style={{width:'85%', height:'50', paddingVertical:10, paddingHorizontal:20,}} 
                onChangeText={(message) => this.setState({message})} 
                value={this.state.message} 
                returnKeyType='send'
                placeHolder='Send message'
                placeholderTextColor='gray'
                onSubmitEditing={this.sendMessage} 
                />

                <TouchableOpacity
                onPress={() => this.sendMessage()}>
                    <Text style={[
                        (!this.state.message.replace(/\s/g, '').length)
                        ?
                        {color: 'gray'}
                        :
                        {fontWeight: 'bold', color: 'black'}
                    ]}>SEND</Text>
                </TouchableOpacity>
            </View>
      </KeyboardAvoidingView>
    );
  }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addMessage }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen)