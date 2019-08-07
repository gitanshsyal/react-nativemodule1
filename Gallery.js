import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,StatusBar,Image,TouchableOpacity,Alert} from 'react-native';  
import { createMaterialTopTabNavigator, createAppContainer,createSwitchNavigator,createBottomTabNavigator} from 'react-navigation';  

import LinearGradient from 'react-native-linear-gradient';
export default class Gallery extends React.Component { 
  static navigationOptions = {
    header:null
} 
  render() {  
    return (  
      <View style={styles1.container}>  
                <StatusBar
                    backgroundColor="#F85E6E"
                    barStyle="light-content"
                />
                    <LinearGradient 
                   colors={['#F85E6E', '#FB587F', '#FC538D']}
                    start={{ x: 0, y: 1 }}
                     end={{ x: 1, y: 1 }}
                    style={styles1.linear}>
         <View style={styles1.linearinside}>
<View style={styles1.linearinsideone}>
<Image
source={require('../imagescontainer/mmenu.png')}
style={styles1.imagesize}
></Image>

</View>
<View style={styles1.linearinsidetwo}>
<Text style={styles1.textsize}>IMCARBARLIO IMOBALARIO</Text>

</View>
         </View>
<View style={styles1.insidesecond}>
  <View style={styles1.insidesecondone}>
     <View  style={styles1.imagelayout}>
       <Image
       source={require('../imagescontainer/anaya.jpg')}
       style={styles1.imagesize1}
      ></Image>

      </View>

      </View>
      <View style={styles1.insidesecondtwo}>
                  <View style={styles1.insidesecondtwoone}> 
                    <View style={styles1.insidesecondtwooneone}>
                    <Text 
                      style={styles1.textlayout2}
                    >
                        Alan Shaw Bangan
                    </Text>

                    </View>
                    <View style={styles1.insidesecondtwoonetwo}>
                    <Text 
                    
                      style={styles1.textlayout3}
                    >
                        New York,NY
                    </Text>

                    </View>
                   
                   </View>
                  <View style={styles1.insidesecondtwotwo}>
                    <View style={styles1.insidesecondtwotwonew}>
                     <View style={styles1.imagelayout6}>
                         <View
                           style={styles1.imagelayout60}
                         >
                           <Image
                           style={styles1.imagesize3}
                           ></Image>

                         </View>
                           <View
                           style={styles1.imagelayout60}
                         >
                           <Image
                           style={styles1.imagesize3}
                           ></Image>

                         </View>

                     </View>
                     <View style={styles1.imagelayout6}>

                     <View
                           style={styles1.imagelayout60}
                         >
                           <Image
                           style={styles1.imagesize3}
                           ></Image>

                         </View>
                         <View
                           style={styles1.imagelayout60}
                         >
                           <Image
                           style={styles1.imagesize3}
                           ></Image>

                         </View>
                     </View>
                    </View>
                    <View style={styles1.insidesecondtwotwonew}>
                       <View style={styles1.imagelayout6}>
                       <View
                           style={styles1.imagelayout60}
                         >
                           <Image
                           style={styles1.imagesize3}
                           ></Image>

                         </View>
                         <View
                           style={styles1.imagelayout60}
                         >
                           <Image
                           style={styles1.imagesize3}
                           ></Image>

                         </View>

                       </View>
                            <View
                            style={styles1.imagelayout7}
                            >
                            <TouchableOpacity
                            style={styles1.textlayout9}
                               onPress={() =>  Alert.alert('you clicked me!')}
                               >
                               

                              <Text
                              style={styles1.textsize9}
                              >CHATEAR</Text>
                              
                           
                            </TouchableOpacity>
                            </View>
</View>

                  </View>
      </View>

           </View>
          </LinearGradient>
         <View style={styles1.secondmain}>

          <View style={styles1.secondmaininside}>
<View
style={styles1.imagelayout60}
>
  <Text
    style={styles1.textlayout21}
  >953</Text>

</View>
<View
style={styles1.imagelayout61}
>
<Text
    style={styles1.textlayout21}
  >Propiedaries</Text>

</View>
          </View>
               <View style={styles1.secondmaininside1}>


               </View>
                 <View style={styles1.secondmaininside}>
                 <View
style={styles1.imagelayout60}
>
  <Text
    style={styles1.textlayout21}
  >20</Text>

</View>
<View
style={styles1.imagelayout61}
>
<Text
    style={styles1.textlayout21}
  >Requirementois</Text>

</View>

                 </View>
                <View style={styles1.secondmaininside1}>
                <View style={styles1.secondmaininside1}></View>

                </View>
                <View style={styles1.secondmaininside}>
              
                <View
style={styles1.imagelayout60}
>
  <Text
    style={styles1.textlayout21}
  >4</Text>

</View>
<View
style={styles1.imagelayout61}
>
<Text
    style={styles1.textlayout21}
  >Medallas</Text>

</View>
                </View>
        </View>
        <View
        style={styles1.small}
        ></View>
     <View style={styles1.thirdmain}>
<View
 style={styles1.newlayout}
>

  <Text
    style={styles1.newtextlayout}
  >Information Basica</Text>
</View>
<View
style={styles1.newlayout1}
>
<Text
    style={styles1.newtextlayout1}
  >Nombre:Agent Name</Text>
</View>
<View
style={styles1.newlayout1}
>
<Text
    style={styles1.newtextlayout1}
  >Apellido:Agent Last Name</Text>
</View>
<View
style={styles1.newlayout1}
>
<Text
    style={styles1.newtextlayout1}
  >Correo:example@example.com</Text>
</View>
<View
style={styles1.newlayout1}
>
<Text
    style={styles1.newtextlayout1}
  >Celular:5555555555</Text>
</View>
<View
style={styles1.newlayout1}
>
<Text
    style={styles1.newtextlayout1}
  >Telefono:22222222</Text>
</View>
<View
style={styles1.newlayout1}
>
<Text
    style={styles1.newtextlayout1}
  >Pagina Web:website.com</Text>
</View>
<View
style={styles1.newlayout1}
>
<Text
    style={styles1.newtextlayout1}
  >Facebook:facebook.com/agency</Text>
</View>





     </View>
    </View>  
    );  
  }  
} 
const styles1 = StyleSheet.create({
  container: {
      flex: 1,flexDirection:'column'
  },
  linear: {
    flex: 0.41,flexDirection:'column'
},
linearinside: {
  flex: 0.20,flexDirection:'row',justifyContent:'center',alignItems:'center'
},
linearinsideone: {
  flex: 0.16,justifyContent:'center',alignItems:'center'
},
linearinsidetwo: {
  flex: 0.84
},
secondmain: {
  flex: 0.12,flexDirection:'row'
},
thirdmain: {
  flex: 0.45,flexDirection:'column',margin:5,borderRadius:3,backgroundColor:'white'
},
secondmaininside: {
  flex: 0.33,flexDirection:'column'
},
secondmaininside1: {
  flex: 0.0008,flexDirection:'column',backgroundColor:'lightgrey',height:20,alignSelf:'center',marginBottom:5
},

imagesize:{
  height:25,width:25
},
textsize:{
fontSize:20,color:'white'
},
insidesecond:{
  flex:0.80,flexDirection:'row'
  },
  insidesecondone:{
    flex:0.43,flexDirection:'row'
    },
    insidesecondtwo:{
      flex:0.57,flexDirection:'column'
      },
      insidesecondtwoone:{
        flex:0.43,flexDirection:'column'
        },
        insidesecondtwooneone:{
          flex:0.65,flexDirection:'row',justifyContent:'center',alignItems:'center'
          },
            textlayout2:{
                fontSize:20,color:'white',marginTop:15,marginLeft:15
            },
            textlayout21:{
              fontSize:15,color:'black',textAlign:'center',alignSelf:'center'
          },
          insidesecondtwoonetwo:{
            flex:0.1,flexDirection:'row',alignItems:'flex-start',justifyContent:"flex-end"
            },
            textlayout3:{
              fontSize:15,color:'white',textAlign:'right',marginTop:-6,marginRight:10
          },
        insidesecondtwotwo:{
          flex:0.57,flexDirection:'row'
          },
          insidesecondtwotwonew:{
            flex:0.5,flexDirection:'column',marginTop:-10
            },
           imagelayout6:{
              flex:0.4,flexDirection:'row'
              },
              imagelayout60:{
                flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'
                },
                imagelayout61:{
                  flex:0.5,flexDirection:'row',justifyContent:'center',
                  },
                imagelayout7:{
                  flex:0.6,flexDirection:'row',justifyContent:'center',alignItems:'center'
                  },
                 textlayout9:{
                    backgroundColor:'white',flex:0.9,borderRadius:5,alignItems:'center',justifyContent:'center',height:45
                    },
                    textsize9:{
                       textAlign:'center',color:'red',fontSize:20
                      },
                      small:{
                        flex:0.001,backgroundColor:'lightgrey'
                       },

              
          
    imagelayout:{
     flex:1,borderRadius:80,justifyContent:'center',alignItems:'center'
      },
      imagesize1:{
        borderRadius:80,height:130,width:130,backgroundColor:'green'
         },
         imagesize3:{
          borderRadius:80,height:30,width:30,backgroundColor:'#D0D0D0'
           },
           newlayout:{
            flex:0.18,justifyContent:'center'
             },
             newlayout1:{
              flex:0.12,justifyContent:'center'
               },
             newtextlayout:{
              marginLeft:15,fontSize:21,color:'red'
               },
               newtextlayout1:{
                marginLeft:15,fontSize:18,color:'#8F8F8F',fontWeight:'bold'
                 },
           
         
  

  
});