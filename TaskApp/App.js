import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { StatusBar } from 'expo-status-bar';



import db from './src/firebase/firebaseConfig';

import { collection, getDocs } from "firebase/firestore";


async function onPress() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id}  => ${doc.data().email}`);
    });
};

// useEffect(() => {
//   
// }, []);




export default function App() {
  return (
    <View style={styles.container}>
      <Text>oi Open up App.js to start working on your app!</Text>
      

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
