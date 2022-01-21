import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXSKN_RUx00BpfIjDFDkXAKNZ3lun5TsQ",
    authDomain: "taskapp-e39f6.firebaseapp.com",
    projectId: "taskapp-e39f6",
    storageBucket: "taskapp-e39f6.appspot.com",
    messagingSenderId: "768480291355",
    appId: "1:768480291355:web:2a716bb81bf57fe5aae6be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;