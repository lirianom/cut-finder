import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './components/login'
import HomeScreen from './components/home'
import allBarbersScreen from './components/showBarbers';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppNavigator = createStackNavigator({
  Login : {screen : LoginScreen},
  AllBarbers : {screen : allBarbersScreen},
  Home : {screen : HomeScreen},
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
