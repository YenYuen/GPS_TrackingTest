import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, TextInput, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Register = () => {
    const navigation = useNavigation();
    return(
        <SafeAreaView style = {{paddingHorizontal:20, flex:1, backgroundColor:'#FFFFFF'}}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                
                <View style = {{marginTop:30}}>
                    <Text style = {{fontWeight:'bold', fontSize:27, color: '#000000'}}>
                        Welcome to Gojaze!
                        </Text>
                    <Text style = {{fontWeight:'bold', fontSize:19, color: '#808080'}}>
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
                        <TextInput placeholder = "Password" style = {styles.input} secureTextEntry />
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
                        <Text style= {{color:'#808080', fontWeight:'bold'}}>
                            Already have account? 
                        </Text>

                        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                        <Text style={{color:'#c08', fontWeight:'bold', marginLeft:2}} >
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
        marginTop:20
    },
    input:{
        color:'#a5a5a5',
        paddingLeft:15,
        borderBottomWidth:0.97,
        flex:1,
        fontSize:18,
    },
    btnSignup:{
        backgroundColor: '#800080',
        height:50,
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    }    

})

export default Register;

//Nurul