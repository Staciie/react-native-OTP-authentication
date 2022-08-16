import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './src/SignupForm';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


export default function App() {
  useEffect(() => {
    // Your web app's Firebase configuration
     const firebaseConfig = {
    apiKey: "AIzaSyDnHIkVfmtf2-T3MnNJ-tYJTyN1vrkupY4",
    authDomain: "otp-auth-7a375.firebaseapp.com",
    databaseURL: "https://otp-auth-7a375-default-rtdb.firebaseio.com",
    projectId: "otp-auth-7a375",
    storageBucket: "otp-auth-7a375.appspot.com",
    messagingSenderId: "902608470846",
    appId: "1:902608470846:web:11697f2760c7ae6707e26f"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
       <View style={styles.container}> 
        <SignupForm />
      </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 20,
  },
});
