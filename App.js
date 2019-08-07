import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './Home'
import Profile from './Profile'
import Splash from './Splash'
import Mainlayer from './Mainlayer'
import Camera from './Camera'  
import Gallery from './Gallery' 
import movies from './movies'
import food from './food'        
import {createStackNavigator,createAppContainer,createSwitchNavigator,createMaterialTopTabNavigator,createNavigator,createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';  

const RootStack = createSwitchNavigator(
  {

Splash: Splash,

     

  },
  
  
);

const Auth = createMaterialTopTabNavigator(
  {
 
    Home: { screen: Home,  
      navigationOptions:{  
          tabBarLabel:'Home',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
              </View>),  
      }  
  },  
  Profile: { screen: Profile,  
      navigationOptions:{  
          tabBarLabel:'Profile',  
          tabBarIcon: ({ tintColor }) => (  
              <View>  
                  <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
              </View>),  
          activeColor: '#f60c0d',  
          inactiveColor: '#f65a22',  
          barStyle: { backgroundColor: '#3BAD87' },  
      },  
  
  },
},


);
const Bottomtab = createMaterialBottomTabNavigator(
  {
 
    Gallery: { screen: Gallery,  
      navigationOptions:{  
        tabBarLabel:'Gallery',  
        tabBarIcon: ({ tintColor }) => (  
            <View>  
                <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
            </View>),  
            activeColor: 'white',  
            inactiveColor: '#f65a22',  
            barStyle: { backgroundColor: '#9070FF' },
    }  
  },  
  Camera: { screen: Camera,  
    navigationOptions:{  
      tabBarLabel:'Camera',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-camera'}/>  
          </View>), 
          activeColor: 'white',  
          inactiveColor: '#f65a22',  
          barStyle: { backgroundColor: '#9070FF' },   
  }  
  
  },
  food: { screen: food,  
    navigationOptions:{  
      tabBarLabel:'Camera',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>), 
          activeColor: 'white',  
          inactiveColor: '#f65a22',  
          barStyle: { backgroundColor: '#9070FF' },   
  }  
  
  },
 movies: { screen: movies,  
    navigationOptions:{  
      tabBarLabel:'Gallery',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
          <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          </View>), 
          activeColor: 'white',  
          inactiveColor: '#f65a22',  
          barStyle: { backgroundColor: '#9070FF' },   
  }  
  
  },
   

},
{  
  initialRouteName: "Gallery",  
  activeColor: '#f0edf6',  
  inactiveColor: '#226557',  
 barStyle: { backgroundColor: '#3BAD87' },  
}, 

);
const final= createStackNavigator(
{
  RootStack:{
    screen:RootStack,
    navigationOptions: {
      header: null,
    }
  },
  Mainlayer:Mainlayer,
 
 Bottomtab : {
  screen: Bottomtab,
  navigationOptions: {
    header: null,
  }
},

Auth : {
    screen: Auth,
    navigationOptions: {
      header: null,
    }
  },



},
{
  initialRouteName: "RootStack"
},

);

const Appcontainerrrrr=createAppContainer(final)
export default  class App extends React.Component {
  render() {
    return <Appcontainerrrrr/>;
    
  }
}

