import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {firebase, auth} from "../../config/firebase.js";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";



export default function Task({ navigation }) {
  const [task, setTask] = useState([]);

  const database = firebase.firestore();
 
  function deleteTask(id) {
    database.collection("Tasks").doc(id).delete();
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
 
  useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);



    return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={( { item } )=>{
           return(
            
            <View style={styles.Tasks}>
                {/* <TouchableOpacity
                    style={styles.deleteTask}
                    onPress={() => {
                        deleteTask(item.id)
                    }}
                    >
                    <FontAwesome
                    name="star"
                    size={23}
                    color="#F92e6A"
                    >
                    </FontAwesome>
                </TouchableOpacity> */}
                <Text>
                    {item.description}  
                </Text>  
            </View>
          )
        }}
      />

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>

    </View>
  )
}