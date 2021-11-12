import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import {TextInput,  Button, Card, Photo, LinearGradient , Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking,  } from 'react-native';

const Login = ()=> {
    return(
        <View>
            <Text>Login</Text>
        </View>
    );
}

export default Login;
const Login = () => {
   return(    
   

   <View style = {styles.card}>
   <View style = {styles.inputContainer}>             
                
<View style = {{marginTop:20, fontSize: 15, alignItems : 'center', color : '#FFFFFF',}}>
<Text> Please login to enable all features</Text>
</View>
 

 <View style= {{marginTop:20, marginBottom : 10,}}>
 <TextInput placeholder="Email"  style = {styles.input} />             
 <TextInput secureTextEntry= {true}
 placeholder="Password"  style= {styles.input} />
 </View>
  
 <View style = {{flexDirection: "row"}}>
 <View style ={{
     flexDirection: "row",
     flex: 0.5,
     alignItems: "flex-start",
 }}>
 <TouchableOpacity>
     <Text style = {{marginLeft : 8,}}>Forgot Password </Text>                  
 </TouchableOpacity>
 </View>
 <View style ={{
     flex: 0.5,
     alignItems: "flex-end",
 }}>
  <TouchableOpacity>
     <Text style = {{color : "#c08"}}>New user? Register now</Text>                  
 </TouchableOpacity>
 </View>
 </View>

</View></View>

)};

const styles = StyleSheet.create ({
   card:{
      alignItems:"center",
   },
logo: {
width: 100,
height: 100,
},
logoContainer: {
width: Dimensions.get('window').width,
height: Dimensions.get('window').height,
alignItems: 'center',
justifyContent: 'center',
backgroundColor: 'lightgrey',
justifyContent: "center",
display: "flex",
flex:1,
alignItems: "center",
flexDirection: "row",
},
inputContainer : {
borderRadius: 24,
width: 370,
padding: 10,
backgroundColor: '#FFFFFF',
marginTop: 130,   
elevation: 8,
shadowOpacity: 1.35, 
},
input:{
textAlign: "center",
fontSize: 18,
borderWidth: 1.5,
borderColor: "#aaa",
borderRadius: 30,
width: 340,
padding: 10,
marginVertical: 10,
},
text : {
fontSize: 33,
color:'#FFFFFF',
fontWeight: 'bold',
alignItems: 'center',
marginTop: 25,        
},
textInput : {
textAlign: 'center',
borderWidth: '1.5',
borderColor: '#aaa',
marginVertical: 10,
borderRadius: 30 ,
fontSize: 18,
},
button:{
alignSelf: 'stretch',
padding: 11,
backgroundColor: '#710193',
marginTop: 30,
borderRadius: 8,
width: 120,
marginTop: 8,
marginBottom: 8,
},
btnText:{
color: '#FFFFFF',
fontWeight: 'bold',
marginTop:8,
fontSize:30,
alignItems: ' center',
}   
});


export default Login;
//Nurul