import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,Image,ScrollView,Animated,Dimensions,ImageBackground,opacity,Easing} from 'react-native';  
import { createMaterialTopTabNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';  
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Video from 'react-native-video';

export default class movies extends React.Component { 
  static navigationOptions = {
    header:null
} 

constructor () {
  super()
  this.animatedValue = new Animated.Value(0)
 
}
componentDidMount () {
  this.animate()
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

  render() { 
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })
  
    return (  
        <View
       
        style={styles1.container}
        >
        <View  
        style={styles1.layout}
        >
          <View
          style={styles1.layout1}
          >
            <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             pagingEnabled
             
            >
             <Image
             style={styles1.layout2}
             source={require('../imagescontainer/anaya.jpg')}
             >
              
             </Image>
             <Image
             style={styles1.layout2}
             source={require('../imagescontainer/shradha.jpg')}
             ></Image>
                <Image
             style={styles1.layout2}
             source={require('../imagescontainer/disha.jpg')}
             ></Image>
                <Image
             style={styles1.layout2}
             source={require('../imagescontainer/julia.jpg')}
             ></Image>
                <Image
             style={styles1.layout2}
             source={require('../imagescontainer/shirley.jpg')}
             ></Image>
            <Image
             style={styles1.layout2}
             source={require('../imagescontainer/sara.jpeg')}
             ></Image>
              <Image
             style={styles1.layout2}
             source={require('../imagescontainer/movies.jpg')}
             ></Image>
              <Image
             style={styles1.layout2}
             source={require('../imagescontainer/movies.jpg')}
             ></Image>

                 </ScrollView>
          </View>
          <View
             style={styles1.layout11}
          >
          <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}
          
            >
         
           
             <View
             style={styles1.layout12}
             >
           <Animated.Text
           style={styles1.layout13}
           >
             Scorecard

           </Animated.Text>
           <View
           style={styles1.layout14}
           >
                <View
                style={styles1.layout15}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   Aus:
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                   Ind:
                 </Text>
                </View>
                <View
                style={styles1.layout151}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   356-6
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                  200-4
                 </Text>
                </View>
                <View
                style={styles1.layout151}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   50 Overs
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                  36 Overs
                 </Text>
                </View>
                

           </View>
             </View>
             <View
             style={styles1.layout12}
             >
                <Text
           style={styles1.layout13}
           >
             Scorecard

           </Text>
                <View
           style={styles1.layout14}
           >
                <View
                style={styles1.layout15}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   SL:
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                   NZ:
                 </Text>
                </View>
                <View
                style={styles1.layout151}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   309-6
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                  180-4
                 </Text>
                </View>
                <View
                style={styles1.layout151}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   50 Overs
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                  36 Overs
                 </Text>
                </View>
                

           
             </View>
               </View>
             <View
             style={styles1.layout12}
             >
                 <Text
           style={styles1.layout13}
           >
             Scorecard

           </Text>
           <View
           style={styles1.layout14}
           >
                <View
                style={styles1.layout15}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   Eng:
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                   Pak:
                 </Text>
                </View>
                <View
                style={styles1.layout151}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   256-6
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                  100-4
                 </Text>
                </View>
                <View
                style={styles1.layout151}
                >
                 <Text
                 style={styles1.layout16}
                 >
                   50 Overs
                 </Text>
                 <Text
                 style={styles1.layout16}
                 >
                  26 Overs
                 </Text>
                </View>
                

           </View>

             </View>
           
          
          </ScrollView>
          </View>
        </View>
        <View 
        style={styles1.layout56}
      
        >
          <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          <View
          style={styles1.layout561}
          >
           
               <Text
              style={styles1.layout562}
               >Upcoming Matches</Text>
            <View
            style={styles1.layout563}
            >
              <View
              style={styles1.layout564}
              >
                <Image
                source={require('../imagescontainer/india.png')}
                style={styles1.imagesize}
                ></Image>
               

              </View>
              <Text
                style={styles1.layout565}
                >
                 India
              
                </Text>

            </View>
            <Text
            style={{flex:0.2,textAlign:'center'}}
            >
              VS
            </Text>
            <View
            style={styles1.layout563}
            >
              <View
              style={styles1.layout564}
              >
                <Image
                style={styles1.imagesize}
                source={require('../imagescontainer/aussies.png')}
                ></Image>
               

              </View>
              <Text
                style={styles1.layout565}
                >
                 Australia
              
                </Text>

            </View>
            <View
            style={styles1.layout563}
            >
          <Text
          style={{flex:0.5,textAlign:'center',alignSelf:'center'}}
          >
             9 August,2019
          </Text>
          <Text
          style={{flex:0.5,textAlign:'center',alignSelf:'center'}}
          >
            17:00 PM
          </Text>


            </View>
            

          </View>
          
          <View
          style={styles1.layout561}
          >
            
           
               <Text
              style={styles1.layout562}
               >Upcoming Matches</Text>
            <View
            style={styles1.layout563}
            >
              <View
              style={styles1.layout564}
              >
                <Image
                source={require('../imagescontainer/pak.png')}
                style={styles1.imagesize}
                ></Image>
               

              </View>
              <Text
                style={styles1.layout565}
                >
               England
              
                </Text>

            </View>
            <Text
            style={{flex:0.2,textAlign:'center'}}
            >
              VS
            </Text>
            <View
            style={styles1.layout563}
            >
              <View
              style={styles1.layout564}
              >
                <Image
                source={require('../imagescontainer/eng.png')}
                style={styles1.imagesize}
                ></Image>
               

              </View>
              <Text
                style={styles1.layout565}
                >
                 England
              
                </Text>

            </View>
            <View
            style={styles1.layout563}
            >
          <Text
          style={{flex:0.5,textAlign:'center',alignSelf:'center'}}
          >
             11 August,2019
          </Text>
          <Text
          style={{flex:0.5,textAlign:'center',alignSelf:'center'}}
          >
            13:00 PM
          </Text>


            </View>
            

          </View>
          <View
          style={styles1.layout561}
          >
            
           
               <Text
              style={styles1.layout562}
               >Upcoming Matches</Text>
            <View
            style={styles1.layout563}
            >
              <View
              style={styles1.layout564}
              >
                <Image
                source={require('../imagescontainer/sri.jpg')}
                style={styles1.imagesize}
                ></Image>
               

              </View>
              <Text
                style={styles1.layout565}
                >
                 Sri Lanka
              
                </Text>

            </View>
            <Text
            style={{flex:0.2,textAlign:'center'}}
            >
              VS
            </Text>
            <View
            style={styles1.layout563}
            >
              <View
              style={styles1.layout564}
              >
                <Image
                source={require('../imagescontainer/nz.jpg')}
                style={styles1.imagesize}
                ></Image>
               

              </View>
              <Text
                style={styles1.layout565}
                >
                 New Zreland
              
                </Text>

            </View>
            <View
            style={styles1.layout563}
            >
          <Text
          style={{flex:0.5,textAlign:'center',alignSelf:'center'}}
          >
             9 August,2019
          </Text>
          <Text
          style={{flex:0.5,textAlign:'center',alignSelf:'center'}}
          >
            17:00 PM
          </Text>


            </View>
            

          </View>
     
          
         </ScrollView>
        </View>
        <View
        style={styles1.layout9}
        >
          <ScrollView
          
          >
            <View
            style={{flex:0.5,margin:6}}>
           <View
           style={styles1.layout10}
           >
              <Image
              source={require('../imagescontainer/aust.jpg')}
              style={{height:hp('15%'),width:wp('100%'),padding:10}}
              ></Image>
           
           </View>
           <Text
           style={styles1.textlayout10}
           >
             Australians on the top,England one down and australian 9 wickets away from victory.

           </Text>
           </View>
           <View
            style={{flex:0.5,margin:6}}>
           <View
           style={styles1.layout10}
           >
              <Image
              source={require('../imagescontainer/aust.jpg')}
              style={{height:hp('15%'),width:wp('100%'),padding:10}}
              ></Image>
           
           </View>
           <Text
           style={styles1.textlayout10}
           >
             Australians on the top,England one down and australian 9 wickets away from victory.

           </Text>
        </View>
        <View
            style={{flex:0.5,margin:6}}>
           <View
           style={styles1.layout10}
           >
              <Image
              source={require('../imagescontainer/aust.jpg')}
              style={{height:hp('15%'),width:wp('100%'),padding:10}}
              ></Image>
           
           </View>
           <Text
           style={styles1.textlayout10}
           >
             Australians on the top,England one down and australian 9 wickets away from victory.

           </Text>
        </View>
          </ScrollView>

        </View>
        
        </View>  
    );  
  }  
} 

const styles1 = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white',flexDirection:'column'
    },
    layout: {
       flex:0.4,margin:6,flexDirection:'column'
  },
  layout1: {
    flex:0.3,flexDirection:'row',margin:5,backgroundColor:'#F5F5F5'
   },
   layout56: {
    flex:0.3,flexDirection:'row',margin:5
   },
   layout561: {
    height:wp('43%'),width:wp('49%'),flexDirection:'column',margin:4,borderRadius:8,backgroundColor:'#F5F5F5'
   },
   layout562: {
   flex:0.2
   },
   

layout11: {
 flex:0.7,flexDirection:'row',margin:5,justifyContent:'center',alignItems:'center'
},
layout12: {
  height:wp('36%'),width:wp('47%'),flexDirection:'column',margin:4,borderRadius:8,backgroundColor:'#F5F5F5'
},
layout13: {
 flex:0.2,textAlign:'center',fontWeight:'bold',fontSize:15,opacity
},
layout14: {
  flex:0.8,flexDirection:'row'
 },
 layout15: {
  flex:0.28,flexDirection:'column',margin:3
 },
 layout151: {
  flex:0.35,flexDirection:'column',margin:3
 },
 layout16: {
  flex:0.5,color:'black',flexDirection:'row',fontSize:15
 },

  layout2: {
    height:wp('15%'),width:wp('15%'),justifyContent:'center',alignItems:'center',backgroundColor:'red',flexDirection:'column',borderRadius:wp('10%'),margin:4
},
layout3: {
   flex:1,backgroundColor:'yellow'
},
layout562: {
textAlign:'center',fontSize:15,fontWeight:'bold',flex:0.2
},
layout563: {
 flex:0.2,flexDirection:'row'
  },
  layout564: {
    flex:0.16,justifyContent:'center',alignItems:'center'
     },
     layout565: {
      flex:0.7,fontSize:15,textAlign:'center'
       },
     imagesize:{
       height:25,width:25,alignSelf:'flex-end',backgroundColor:'yellow',borderRadius:18
     },
     layout9:{
       flex:0.3,margin:8,flexDirection:'column',
     },
     layout10:{
            flex:0.5,fontSize:20
     },
     textlayout10:{
      flex:0.5,fontSize:20,textAlign:'center',color:'black'
}

 

    
  });