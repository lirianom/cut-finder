import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
const services = require('../processes/services');
//import loginservices from '../processes/login-services';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {username : '', password : ''}
  }

  login() {
    var pass = services.data.login(this.state.username, this.state.password);
    const { navigate } = this.props.navigation;
    if (pass) {
      this.props.navigation.navigate('Home', {
          name : 'Fabio Francois',
      });
    }
    else {
      Alert.alert(
        'Credentials Not Valid',
        'Please enter valid credentials',
        [
          {text : 'Ok'}
        ],
        { cancelable : false }
      )
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <TextInput style = {styles.inputContainer}
                    placeholder = "Username"
                    onChangeText = {(username) => this.setState({username})}/>
        <TextInput style = {styles.inputContainer}
                    placeholder = "Password"
                    secureTextEntry = {true}
                    onChangeText = {(password) => this.setState({password})}/>
        <TouchableOpacity onPress = {this.login.bind(this)}
                style = {styles.buttonContainer}>
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height : 40,
    borderWidth : 0.25,
    padding : 10,
    borderRadius : 25,
    width : 300,
    margin : 5
  },
  buttonContainer: {
    alignItems : 'center',
    alignSelf : 'center',
    backgroundColor : '#DDDDDD',
    padding : 10,
    width : 100
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default login;