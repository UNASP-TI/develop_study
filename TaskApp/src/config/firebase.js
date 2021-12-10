
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
 
const firebaseConfig = {
    apiKey: "AIzaSyCXSKN_RUx00BpfIjDFDkXAKNZ3lun5TsQ",
    authDomain: "taskapp-e39f6.firebaseapp.com",
    projectId: "taskapp-e39f6",
    storageBucket: "taskapp-e39f6.appspot.com",
    messagingSenderId: "768480291355",
    appId: "1:768480291355:web:2a716bb81bf57fe5aae6be"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;