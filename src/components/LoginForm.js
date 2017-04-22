import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;
    console.log('button pressed');
    this.setState({error: '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({error: 'logged in'});
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({error: 'Create user succeeded'});
        })
        .catch(() => {
          this.setState({error: 'Create user failed'});
        });
     });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>;
    }
    return (
      <Button ass={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render(){
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({email})}//take the text and set it on a prop called email
          />
        </CardSection>


        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}//take the text and set it on a prop called password
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>


        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {

    height: 30,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
