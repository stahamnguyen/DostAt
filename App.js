import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';

import StartingScreen from './screens/StartingScreen';
import ProPlayersScreen from './screens/ProPlayersScreen';

import navigatorStyle from './config/navigatorStyleConfig'

Navigation.registerComponent("DostAt.StartingScreen", () => StartingScreen);
Navigation.registerComponent("DostAt.ProPlayersScreen", () => ProPlayersScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "DostAt.StartingScreen",
    title: "",
    navigatorStyle: {
      navBarHidden: true,
      screenBackgroundImageName: "background",
      statusBarTextColorSchemeSingleScreen: 'light'
    }
  }
});