import React, { Component, Suspense } from 'react';
import { Text, View, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import {List, ListItem } from 'react-native-elements'
const services = require('../processes/services');
// import loginservices from '../processes/login-services';
import Portfolio from './portfolio';
import Spinner from 'react-native-loading-spinner-overlay';



class home extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, search : '', results : '', barbers : [], portfolio: [''] }
  }

  async componentDidMount() {
    var barberId = this.props.navigation.getParam('id');
    var results = await services.data.getBarber(barberId);
    var portfolio = results.Portfolio;
    var barbers = services.data.getAllBarbers();
    var isLoaded = true;
    this.setState(
        {
            isLoaded,
            portfolio,
            results,
            barbers
        }
    );
  }

  search() {
    var query = services.data.login(this.state.search);
  }

  createPortfolioMap() {
  }


  render() {
    if (this.state.isLoaded == false){
      return(
        <Spinner
          visible = {!this.state.isLoaded}
          textContent={"loading..."}
          textStyle={{color: '#253145'}}
          animation="fade"
        />
      )
    } else {
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
              source = {{ uri: this.state.results.BarberImage }}
            />
          </View>
          <Text style = {styles.barberDisplay}>{this.state.results.Location}</Text>
          <Text style = {styles.barberDisplay}>{this.state.results.Salon}</Text>
          <Text style = {styles.barberDisplay}>Portfolio:</Text>
          <Portfolio uriArray = {this.state.portfolio}/>
        </View>
      );
    }
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
    flex: 1,
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
