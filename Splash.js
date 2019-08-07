import React, { Component } from 'react';
import { Text, View,Image,TextInput,Button,Alert,AppRegistry,StyleSheet} from 'react-native';
import { createStackNavigator,createAppContainer,createMaterialTopTabNavigator,createSwitchNavigator} from 'react-navigation';
import Home from './Home'
import Mainlayer from './Mainlayer'
export default class Splash  extends React.Component{
  static navigationOptions = {
    header:null
}

  
      constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        setTimeout(() => {
            // go to Home page
            this.props.navigation.replace("Mainlayer")
        }, 2500)
    }
    render(){
    
        return(
    <View
    style={styles.container}>
        
           
        <Text style={styles.texts}>App name</Text>
    </View>

    );
}
}
const styles = StyleSheet.create({
    container: {
        flex:1,backgroundColor:'palegreen',justifyContent:'center',alignItems:'center',flexDirection:'column'
    },
   images: {
     height:100,
     width:100
    },
    texts:{
       fontSize:28,
       color:'white'
    },
    
  });
