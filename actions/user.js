import firebase from 'firebase/app'
import db from '../config/Firebase'

export const updateEmail = (input) => {
    return {type: 'UPDATE_EMAIL', payload: input}
}

export const updatePassword = (input) => {
    return {type: 'UPDATE_PASSWORD', payload: input}
}

export const updateUsername = (input) => {
    return {type: 'UPDATE_USERNAME', payload: input}
}

export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const {username, email, password} = getState().user

            const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
            
            if(response.user.uid){
                const user = {
                    uid: response.user.uid,
                    username: username,
                    email: email,
                    posts: [],
                    bio: '',
                    likes: 0,
                    photo: '',
                }

                await db.collection('users').doc(response.user.uid).set(user)
                dispatch({ type: 'LOGIN', payload: user})
                alert('User has been signed up!')
            }
        } catch(e){
            alert(e)
        }
    }
}