import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createMaterialTopTabNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';  
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Video from 'react-native-video';
export default class food extends React.Component { 
  static navigationOptions = {
    header:null
} 
  render() {  
    return (  
      <Video
      source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
      rate={1.0}
      volume={1.0}
      muted={false}
      resizeMode={"cover"}
      repeat
      style={styles.video}
    />
    );  
  }  
} 

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'paleturquoise',flexDirection:'column'
    },
    layout: {
        backgroundColor:'yellow',flex:0.5,margin:6
    },
    video: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
   

    
  });