import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Barber from './barberCard';

barberList = [
  {
    name: "Ice Cube",
    location: "Raleigh",
    salon: "The Guy's Place on Creedmoor",
    id: 'Barber1',
    uri: { uri: 'https://cut-finder.s3.amazonaws.com/iceCubeBarber.jpg' }
  },
  {
    name: "Sweeney Todd",
    location: "London",
    salon: "Fleet Street Salon",
    id: 'Barber2',
    uri: { uri: 'https://cut-finder.s3.amazonaws.com/sweeneytodd.jpg' }
  },
  {
    name: "Vegeta, Prince of all Saiyans",
    location: "Planet Vegeta",
    salon: "Not a Fucking Barber",
    id: 'Barber3',
    uri: { uri: 'https://cut-finder.s3.amazonaws.com/vegeta-prince-vegeta-30750256-498-373.jpg' }
  },
]

// inputMap = barberList.map((barber,index) => {
//   return <Barber
//     key={index}
//     inputText = {barber.name}
//     location = {barber.location}
//     salon = {barber.salon}
//     uri = {barber.uri}
//     />
// });

class allBarbersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { barberID: ''}
  }

  selectBarber() {
    const { navigate } = this.props.navigation;
    if (true) {
      this.props.navigation.navigate('Home',{barberID:barber.id});
      // this.setState()
    }
  }

  createInputMap() {
    return inputMap = barberList.map((barber,index) => {
      return <Barber
        key={index}
        inputText = {barber.name}
        location = {barber.location}
        salon = {barber.salon}
        uri = {barber.uri}
        onPress = {(event) => {
                            // onPress event fires with an event object
                            const { navigate } = this.props.navigation;
                            navigate('Home', { id: barber.id });
                        }}
      />
    });
  }

  // console.log(inputMap[0].props.inputText);

  render() {
    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
        { this.createInputMap() }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingBottom: 100,
    paddingTop: 25,
    alignItems: 'center',
  }
});

export default allBarbersScreen;
