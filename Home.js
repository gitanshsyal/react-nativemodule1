import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createMaterialTopTabNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';  
import { WebView } from 'react-native-webview';

export default class Home extends React.Component { 
  static navigationOptions = {
    header:null
} 
  render() {  
    return (  
      <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
    );  
  }  
}  