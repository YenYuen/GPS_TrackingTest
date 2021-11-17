import * as React from 'react';
import { Button, TextInput, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image, Linking } from 'react-native';


const Register = () => {
    return(
        <SafeAreaView style = {{paddingHorizontal:20, flex:1, backgroundColor:'#white'}}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                
                <View style = {{marginTop:30}}>
                    <Text style = {{fontWeight:'bold', fontSize:27, color: '#black'}}>
                        Welcome to Gojaze!
                        </Text>
                    <Text style = {{fontWeight:'bold', fontSize:19, color: '#a5a5a5'}}>
                        Fill in the blank below to create your Gojaze account.
                        </Text>

                        <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = "Name" style = {styles.input}/>
                    </View>
                    </View>

                </View>
                <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = "Email" style = {styles.input}/>
                    </View>
                    </View>

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = "password" style = {styles.input} secureTextEntry />
                    </View>
                    </View>                

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = "Confirm password" style = {styles.input} secureTextEntry />
                    </View>
                    </View>    
                
                <View style = {styles.btnSignup}>
                    <Text style={{color:'#fff', fontWeight:"bold", fontSize:18 }}>Sign Up</Text>
                    </View>

                    <View style={{ flexDirection:'row', alignItems:'flex-end', justifyContent:'center', marginTop:40, marginBottom: 20}} >
                        <Text style= {{color:'#a5a5a5', fontWeight:'bold'}}>
                            Already have account? 
                        </Text>

                        <TouchableOpacity>
                        <Text style={{color:'#pink', fontWeight:'bold'}} >
                             Log in
                        </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
        </SafeAreaView>
         
      
    );    
}


const styles = StyleSheet.create ({
    inputContainer:{
        flexDirection: 'row',
        marginTop:20},
    input:{
        color:'#a5a5a5',
        paddingLeft:30,
        borderBottomWidth:0.5,
        flex:1,
        fontSize:18,
    },
    btnSignup:{
        backgroundColor: '#white',
        height:50,
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
    }    

})

export default Register;

//Nurul