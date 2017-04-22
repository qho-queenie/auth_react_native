import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyBHGRjXRf8iwB1aEPAxK-9aePjXWfwPGTA',
        authDomain: 'auth-4427d.firebaseapp.com',
        databaseURL: 'https://auth-4427d.firebaseio.com',
        projectId: 'auth-4427d',
        storageBucket: 'auth-4427d.appspot.com',
        messagingSenderId: '114555205128'
    });
  }

  // apiKey: "AIzaSyApT8GTKGgVeJtT4pUP90_UR5HJgR8YOOE",
  // authDomain: "auth-d8a9b.firebaseapp.com",
  // databaseURL: "https://auth-d8a9b.firebaseio.com",
  // projectId: "auth-d8a9b",
  // storageBucket: "auth-d8a9b.appspot.com",
  // messagingSenderId: "80828740397"

  render() {
    return (
      <View>
        <Header poop="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
