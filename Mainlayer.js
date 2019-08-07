import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createMaterialTopTabNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';  

 
export default class Mainlayer extends React.Component { 
  static navigationOptions = {
    header:null
} 
  render() {  
    return (  
        <View style={{backgroundColor:'blue',flex:1,flexDirection:'column'}}>  
        <View style={{backgroundColor:'green',flex:0.1}}>
        <Button title='Toptab'
         onPress={() =>  this.props.navigation.navigate('Auth') }
        />
            </View>
            <Button title='Bottomtab'
         onPress={() =>  this.props.navigation.navigate('Bottomtab') }
        ></Button>

        
       
        </View>  
    );  
  }  
} 