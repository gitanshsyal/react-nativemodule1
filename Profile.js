import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,TouchableOpacity,Animated,Opacity,  Easing,TouchableHighlight} from 'react-native';  
import { createMaterialTopTabNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';  
import  Video from "react-native-video";
 
export default class Profile extends React.Component { 
  
  static navigationOptions = {
    header:null
} 
constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
  this.springValue = new Animated.Value(0.3)
  this.animatedValue1= new Animated.Value(0)
  this.animatedValue2= new Animated.Value(0)
  this.animatedValue3 = new Animated.Value(0)
  this.animatedValue4 = new Animated.Value(0)
  this.animatedValue5 = new Animated.Value(0)
}
componentDidMount () {
  this.animate()
  this.spring()
  this.spin()
}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 8000,
      easing: Easing.linear
    
    }
  
  ).start(() => this.animate())
  
  
}
spring () {
  this.springValue.setValue(0.3)
  Animated.spring(
    this.springValue,
    {
      toValue: 1,
      friction: 1
    }
  ).start(() => this.spring())
}
spin(){
  this.animatedValue2.setValue(0)
  Animated.timing(
    this.animatedValue2,{
      toValue: 1,
      duration:4000,
      easing:Easing.ease
      
    }
  ).start(() => this.spin())
  this.animatedValue3.setValue(0)
  Animated.timing(
    this.animatedValue3,{
      toValue: 1,
      duration:4000,
      easing:Easing.ease
      
    }
  ).start()
  this.animatedValue1.setValue(0)
  Animated.timing(
    this.animatedValue1,{
      toValue: 1,
      duration:4000,
      easing:Easing.ease
      
    }
  ).start()
  this.animatedValue4.setValue(0)
  Animated.timing(
    this.animatedValue4,{
      toValue: 1,
      duration:4000,
      easing:Easing.ease
      
    }
  ).start()
  this.animatedValue5.setValue(0)
  Animated.timing(
    this.animatedValue5,{
      toValue: 1,
      duration:4000,
      easing:Easing.ease
      
    }
  ).start()
}



  render() {  
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
    const spinText = this.animatedValue2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg']
    })
    const scaleText = this.animatedValue3.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 2]
    })
    const introButton = this.animatedValue1.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 450]
    })
    const borderradius = this.animatedValue4.interpolate({
      inputRange: [0, 0.5,1],
      outputRange: [0, 100,230]
    })
    const rotate1 = this.animatedValue5.interpolate({
      inputRange: [0, 0.5,1],
      outputRange: ['0deg', '45deg','90deg']
    })
    
   
    return (  
<View
style={{flex:1}}
>
     <Animated.View
     style={{backgroundColor:'red',flex:0.2,opacity}}
     >


     </Animated.View>
     <Animated.View style={{flex:0.2,justifyContent:'center',backgroundColor:'green',alignItems:'center',transform: [{scale: this.springValue}]}}>
       <Text>
          hello

       </Text>
</Animated.View>
<Animated.View style={{flex:0.2,justifyContent:'center',backgroundColor:'orange',alignItems:'center',transform: [{rotate: spinText}]}}>
       <Text>
          hello

       </Text>
</Animated.View>
<Animated.View 
    style={{ transform: [{scale: scaleText}],flex:0.2,justifyContent:'center',alignItems:'center' }}>
    <Text>Welcome</Text>
  </Animated.View>
  <Animated.View
    style={{top: introButton, position: 'absolute',flex:0.2,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
    
      <Text
        style={{color: 'black', fontSize: 20}}>
        Click Here To Start
      </Text>
 
  </Animated.View>
  <View
  style={{flex:0.2,justifyContent:'center',alignItems:'center'}}
  >
    <Animated.View
    style={{
      backgroundColor:'yellow',height:100,borderRadius:borderradius,width:100
    }}
    ></Animated.View>

  </View>
  <View
  style={{flex:0.2,justifyContent:'center',alignItems:'center'}}
  >
    <Animated.View
    style={{
      backgroundColor:'red',height:100,transform: [{rotate: rotate1}],width:100
    }}
    ></Animated.View>

  </View>

</View>
      

    );  
  }  
} 

const styles1 = StyleSheet.create({
  backgroundVideo: {
    height: 300,
    position: "absolute",
    top: 0,
    left: 0,
alignItems: "stretch",
bottom: 0,
right: 0
}
  
 


   


  
});