import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };
  componentWillMount() {
      firebase.initializeApp({
        apiKey: 'AIzaSyBHGRjXRf8iwB1aEPAxK-9aePjXWfwPGTA',
        authDomain: 'auth-4427d.firebaseapp.com',
        databaseURL: 'https://auth-4427d.firebaseio.com',
        projectId: 'auth-4427d',
        storageBucket: 'auth-4427d.appspot.com',
        messagingSenderId: '114555205128'
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log("user", user);
      if (user){
        console.log("logged in");
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // apiKey: "AIzaSyApT8GTKGgVeJtT4pUP90_UR5HJgR8YOOE",
  // authDomain: "auth-d8a9b.firebaseapp.com",
  // databaseURL: "https://auth-d8a9b.firebaseio.com",
  // projectId: "auth-d8a9b",
  // storageBucket: "auth-d8a9b.appspot.com",
  // messagingSenderId: "80828740397"

   anything(){

  };

  renderContent() {
    if (this.state.loggedIn) {
      console.log("button");
      return (
        <CardSection>
          <Button ass={this.anything.bind(this)}>
            Logout
          </Button>
        </CardSection>
      );
  }
  return <LoginForm />;
}

  render() {
    return (
      <View>
        <Header poop="Authentication" />
        <Button>
        asdf
        </Button>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
