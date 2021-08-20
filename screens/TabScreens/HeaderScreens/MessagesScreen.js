import React from 'react';
import { StyleSheet, Text, TextInput, FlatList, KeyboardAvoidingView, TouchableOpacity, View, Dimensions } from 'react-native';
import * as firebase from 'firebase'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const keyboardVerticalOffset = Platform.OS === 'ios' ? 120 : 100


class MessagesScreen extends React.Component {
  

    state = {
        messages: []
    }


    constructor(props) {
        super(props);

        this.subscriber = 
        firebase.firestore()
        .collection('messages')
        .limit(50)
        //.orderBy('date', 'desc')
        .onSnapshot(docs => {
            let messages = []
            docs.forEach(doc => {
                messages.push(doc.data())
            })
            this.setState({messages})
        })
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
            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', borderTopWidth:0.5, borderColor: 'gray', color: 'white'}}>
                <TextInput 
                style={{width:'85%', height:'50', paddingVertical:10, paddingHorizontal:20,}} 
                onChangeText/>
            </View>
      </KeyboardAvoidingView>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({  }, dispatch)
}

const mapStateToProps = (state) => {
    return{
        user: state.user,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen)