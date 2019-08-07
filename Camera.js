import React, {Component} from 'react';
import {StyleSheet, Text, View,Button,Image,TextInput,StatusBar,TouchableOpacity,Alert,Touchable,TouchableHighlight} from 'react-native';  
import { createMaterialTopTabNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';  
import LinearGradient from 'react-native-linear-gradient';

var var2;
var var3;
var var4;
export default class Camera extends React.Component { 
  static navigationOptions = {
    header:null
} 

constructor(props) {
  super(props);
  this.state = {text: ''};
  this.state = {text1: ''};
  this.state = {text2: ''};
  this.state = {text3: ''};

}
state = {
  var1: 'Change me'
}


  render() {  
    return (  

        <View style={styles1.container}>  
        <StatusBar
                    backgroundColor="#9070FF"
                    barStyle="light-content"
                />
       <View style={styles1.linearGradient}>
    <View style={styles1.layout1}>
<View style={styles1.layouthigh1}>

  <Image
  source={require('../imagescontainer/backwhite.png')}
  style={styles1.imagesize}
  ></Image>
</View>
<View style={styles1.layouthigh}>
<Text  style={{fontSize:20,color:'white',textAlign:'center'}}>Profile</Text>

</View>
<View style={styles1.layouthigh1}>

<Image
  source={require('../imagescontainer/chat.jpg')}
  style={styles1.imagesize}
  ></Image>
</View>
    </View>
    <View style={styles1.layout2}>
    
<View style={styles1.layout3}>

<View
style={styles1.layout5}
></View>
<View
style={styles1.layout6}
>
<View style={styles1.layout9}></View>
<View style={styles1.layout10}></View>

</View>
</View>

<View style={styles1.layout4}>
     <View
 style={{flex:1,backgroundColor:'white',borderTopRightRadius: 90,
 borderTopLeftRadius: 90,}}
>
<Image
 style={styles1.imagestyle}
 source={require('../imagescontainer/movies.jpg')}
 ></Image>

 <TouchableOpacity onPress={() =>  Alert.alert('Upload your image!')}>
 <View>
  
    <Image style={styles1.imagesize1} source={require('../imagescontainer/adddicon.jpg')} />
    </View>
    </TouchableOpacity>
      </View>
 
 

 

</View>

   <View style={styles1.layout3}>
        <View
style={styles1.layout5}
></View>
      <View
     style={styles1.layout6}
     >
          <View style={styles1.layout10}>


     </View>
    

<View style={styles1.layout9}></View>
</View>

</View>

    </View>
         </View>
          <View style={styles1.lsecondmain}>
<Text style={styles1.textstyle} >Gitansh Syal</Text>
<Text style={styles1.textstyle1} >Loreum Ipsun Doller Sir Apsun</Text>
          </View>
          <View style={styles1.thirdlayout}>
              <View style={styles1.emaillayout}>

               <View style={styles1.emaillayout2}>
 
                  <Image
                source={require('../imagescontainer/email.png')}
                     style={styles1.imagesize}
                    ></Image>
                    </View>
  
                  </View>
                    <View style={styles1.emaillayout1}>
                   <TextInput style={styles1.textstyle2}
                    placeholder="User Email Address"
                    onChangeText={(text) => this.setState({text})}
                   
                  //  onSubmitEditing={this.handleSubmit}
                    value={this.state.text}
                   
                    autoCorrect={false}
                   ></TextInput>

                       </View>
                       <View style={styles1.emailtextlayout1}>
                   <Text style={styles1.textstyle2}
                  
                   
                   >{this.state.var1}</Text>

                       </View>

             </View>
                 <View style={styles1.fourthlayout}></View>
                 <View style={styles1.thirdlayout}>
              <View style={styles1.emaillayout}>

               <View style={styles1.emaillayout3}>
 
                  <Image
                source={require('../imagescontainer/key.png')}
                     style={styles1.imagesize}
                    ></Image>
                    </View>
  
                  </View>
                    <View style={styles1.emaillayout1}>
                   <TextInput style={styles1.textstyle2}
                   placeholder="User Password"
                   secureTextEntry
                   onChangeText={(text1) => this.setState({text1})}
              
                   ></TextInput>
                    </View>
 <View style={styles1.emailtextlayout1}>
                   <Text style={styles1.textstyle2}
                  
                   
                   >{this.state.var2}</Text>

                      

                       </View>

             </View>
                 <View style={styles1.fourthlayout}></View>
                 <View style={styles1.thirdlayout}>
              <View style={styles1.emaillayout}>

               <View style={styles1.emaillayout4}>
 
                  <Image
                source={require('../imagescontainer/mobile.png')}
                     style={styles1.imagesize}
                    ></Image>
                    </View>
  
                  </View>
                    <View style={styles1.emaillayout1}>
                   <TextInput style={styles1.textstyle2}
                   placeholder="+91-9xxxxxxxxxxx90"
                   keyboardType='numeric'
                   onChangeText={(text2) => this.setState({text2})}
                   
                   ></TextInput>

                       </View>
                       <View style={styles1.emailtextlayout1}>
                   <Text style={styles1.textstyle2}
                  
                   
                   >{this.state.var3}</Text>

                      

                       </View>

             </View>
                 <View style={styles1.fourthlayout}></View>
                 <View style={styles1.thirdlayout}>
              <View style={styles1.emaillayout}>

               <View style={styles1.emaillayout5}>
 
                  <Image
                source={require('../imagescontainer/certificate1.png')}
                     style={styles1.imagesize}
                    ></Image>
                    </View>
  
                  </View>
                    <View style={styles1.emaillayout1}>
                   <TextInput style={styles1.textstyle2}
                   onChangeText={(text3) => this.setState({text3})}
                   placeholder="Certificate"
                   value={var4}
                   >
                   </TextInput>

                       </View>
                      < View style={styles1.emailtextlayout1}>
                   <Text style={styles1.textstyle2}
                  
                   
                   >{this.state.var4}</Text>

                      

                       </View>

             </View>
                 
                 <View style={styles1.thirdlayout}>
               

                 <View style={{flex:1,margin:10,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                   <TouchableOpacity
                   onPress={() => {

                    
                    this.setState({
                      var1: this.state.text,
                        var2:this.state.text1,
                        var3:this.state.text2,
                        var4:this.state.text3
                    })
                   
                   
                   
                  }}
                   >
<Text
  style={{backgroundColor:'#9070FF',width:180,height:35,color:'white',textAlign:'center',borderRadius:50,alignSelf:'center',padding:5}}
  
  > Click to save data </Text>
  </TouchableOpacity>
</View>



                 </View>
            </View>  
              
    );  
  }  
} 
const styles1 = StyleSheet.create({
  container: {
      flex: 1,
  },
  linearGradient: {
    flex:0.25,flexDirection:'column',opacity:1,borderRadius:230,borderBottomColor:'purple'
  },
 layout1: {
    flex:0.26,backgroundColor:'#9070FF',flexDirection:'row'
  },
  layout2: {
    flex:0.74,flexDirection:'row'
  },
  layout3: {
    flex:0.38,flexDirection:'column',backgroundColor:'#9070FF'
    
  },
  layout4: {
    flex:0.25,backgroundColor:'#9070FF',flexDirection:'column'
  },
  imagestyle:{
    borderRadius:60,height:90,backgroundColor:'white',width:90
  },
 
  layout5: {
    flex:0.42
  },
  layout6: {
    flex:0.58,flexDirection:'row'
  },
  
  layout9: {
    flex:0.15,backgroundColor:'#9070FF'
  },
  layout10: {
    flex:0.85,backgroundColor:'white',borderRadius:5
  },
  lsecondmain: {
    flex:0.15,backgroundColor:'white',marginLeft:20.5,marginRight:20.5,flexDirection:'column',borderRadius:5,marginTop:-8
  },
  textstyle: {
    textAlign:'center',fontSize:24,marginTop:5
  },
  
  textstyle1: {
    textAlign:'center',fontSize:20,color:'#BEBDC1'
  },
  textstyle2: {
    fontSize:20,color:'#BEBDC1',marginLeft:8
  },
  thirdlayout: {
   flex:0.10,flexDirection:'row'
  },
  emaillayout:{
   flex:0.15,justifyContent:'center',alignItems:'flex-end'
  },
  emaillayout1:{
    flex:0.45,justifyContent:'center',marginLeft:10
   },
   emailtextlayout1:{
    flex:0.40,justifyContent:'center',marginLeft:10
   },
   emaillayout2:{
   height:35,backgroundColor:'blue',borderRadius:60,width:35,alignItems:'center',justifyContent:'center'
   },
   emaillayout3:{
    height:35,backgroundColor:'pink',borderRadius:60,width:35,alignItems:'center',justifyContent:'center'
    },
    emaillayout4:{
      height:35,backgroundColor:'orange',borderRadius:60,width:35,alignItems:'center',justifyContent:'center'
      },
      emaillayout5:{
        height:35,backgroundColor:'green',borderRadius:60,width:35,alignItems:'center',justifyContent:'center'
        },
   imagesize:{
    height:20,width:20
    },
    imagesize1:{
      height:20,width:20,justifyContent:'center',alignItems:'center',marginTop:-12,alignSelf:'center'
      },
    fourthlayout:{
   flex:0.001,backgroundColor:'lightgrey'
    },
    buttonlayout:{
      flex:1,marginTop:8,alignItems:'center',justifyContent:'center'
       },
       imagelayout1:{
        flex:0.8,borderRadius:60
         },
         imagelayout2:{
          flex:0.2,
           },
        layouthigh:{
          flex:0.6
        },
        layouthigh1:{
          flex:0.2,alignItems:"center",justifyContent:'center'
        }
  
   
});