// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
const database = firebase.firestore();
export default database