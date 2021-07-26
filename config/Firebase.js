import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAUkxPfiypd6X78GmLzK_Peg-IQfjEtPHU",
    authDomain: "instagram-clone-66b4d.firebaseapp.com",
    projectId: "instagram-clone-66b4d",
    storageBucket: "instagram-clone-66b4d.appspot.com",
    messagingSenderId: "543399811703",
    appId: "1:543399811703:web:2bafa51cc1b07ab2cac472"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db;