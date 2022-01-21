import React, { useEffect } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import db from './src/firebase/firebaseConfig';

import { collection, getDocs } from "firebase/firestore";


useEffect(() => {
  const querySnapshot = getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}, []);




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
