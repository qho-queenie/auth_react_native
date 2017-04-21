import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyDVN7aTEuVHqjYvKN7AXk9PlLFfMgCgI6k',
        authDomain: 'auth-b7bda.firebaseapp.com',
        databaseURL: 'https://auth-b7bda.firebaseio.com',
        projectId: 'auth-b7bda',
        storageBucket: 'auth-b7bda.appspot.com',
        messagingSenderId: '166484190609'
    });
  }

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
