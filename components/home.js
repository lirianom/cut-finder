import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import {List, ListItem } from 'react-native-elements'
const services = require('../processes/services');
// import loginservices from '../processes/login-services';


class home extends Component {
  constructor(props) {
    super(props);
    this.state = { search : '', results : '', barbers : [] }
  }

  async componentDidMount() {
    var barberID = this.props.navigation.getParam('name');
    console.log(barberID);
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
    return(
      <View  style = {styles.container}>
        <View style = {styles.upperRow}>
          <Image
            style = {styles.logoImage}
            source = {{ uri: 'https://cut-finder.s3.amazonaws.com/barberIcon.png' }}
            resizeMode = "contain"
          />
          <Text style = {styles.barberName}>{this.state.results.FullName}</Text>
          <Image
            style = {styles.barberImage}
            source = {{ uri: 'https://cut-finder.s3.amazonaws.com/iceCubeBarber.jpg' }}
          />
        </View>
        <Text style = {styles.barberDisplay}>{this.state.results.Location}</Text>
        <Text style = {styles.barberDisplay}>{this.state.results.Salon}</Text>
        <Text style = {styles.barberDisplay}>Portfolio:</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            style = {styles.portfolioPic}
            resizeMode = "contain"
            source = {{ uri: 'https://cut-finder.s3.amazonaws.com/IMG_1592.jpg' }}
          />
          <Image
            style = {styles.portfolioPic}
            resizeMode = "contain"
            source = {{ uri: 'https://cut-finder.s3.amazonaws.com/IMG_1613.jpg' }}
          />
          <Image
            style = {styles.portfolioPic}
            source = {{ uri: 'https://cut-finder.s3.amazonaws.com/IMG_1507.jpg' }}
          />
        </ScrollView>
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
    backgroundColor: "skyblue",
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  contentContainer: {
    paddingBottom: 50,
    paddingTop: 55
  },
  upperRow: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5
  },
  barberName: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  barberDisplay: {
    marginTop: 10,
    marginLeft: 1,
    marginRight: 5,
    fontWeight: "bold",
  },
  logoImage: {
    width: 100,
    height: 100,
    marginLeft: -25,
  },
  barberImage: {
    width: 125,
    height: 125,
    marginLeft: "auto",
  },
  portfolioPic: {
    flex:1,
    height: 250,
    width: "auto"
  },
});

export default home;
