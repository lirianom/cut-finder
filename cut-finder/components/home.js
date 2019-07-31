import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native';
import {List, ListItem } from 'react-native-elements'
const services = require('../processes/services');
//import loginservices from '../processes/login-services';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = { search : '', results : '', barbers : [] }
  }

  async componentDidMount() {
    var results = await services.data.getBarber();
    var barbers = services.data.getAllBarbers();
    this.setState(
        {
            results,
            barbers
        }
    );
  }

  search() {
    var query = services.data.login(this.state.search);
  }

  render() {
    return (
      <View  style = {styles.container}>
        <Text style = {{marginLeft : 10 }}>{this.props.navigation.getParam('name')}</Text>
        <Text>{this.state.results.Name}</Text>
        <Image
            style = {{ width : 300, height : 300 }} 
            source = {require('../test-tools/img/ani.jpg')} />
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
    backgroundColor : '#DDDDDD',
    padding : 10,
    marginLeft : 10,
    width : 100
  },
  container: {
    flex: 1,
    backgroundColor : '#ffffff',
    padding : 10
  },
});

export default home;