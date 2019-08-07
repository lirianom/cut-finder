import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';


const Barber = ({inputText, location, salon, uri, onPress}) => {
  return (
    <TouchableHighlight onPress = {onPress}>
      <View style = {container}>
      <Image
        style = {styles.barberImage}
        source = {uri}
      />
      <Text style = {textFormat}>Name: {inputText}</Text>
      <Text style = {textFormat}>Location: {location}</Text>
      <Text style = {textFormat}>Salon: {salon}</Text>
      </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginBottom: 20,
    width: 300,
    backgroundColor: 'skyblue',
    borderColor: "#e5e5e5",
    borderWidth: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  container1: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  textFormat: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  barberImage: {
    width: 75,
    height: 75,
    marginLeft: "auto",
  },
});

const {
    container,
    container1,
    textFormat,
} = styles;


export default Barber;
