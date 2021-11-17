import * as React from 'react';
import { TextInput, Button, Card, Photo, LinearGradient, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking, } from 'react-native';
import { image } from '../constants'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

const Login = () => {
    
    const navigation = useNavigation();
    return (
        <View style={styles.card}>

             <View style={styles.logoContainer}
        >
            <Image
            source={image.Gojaze_Logo}
            style={styles.logo}
            />
        </View>

            <View style={styles.inputContainer}>
                <View style={{ marginTop: 20, fontSize: 15, alignItems: 'center', color: '#FFFFFF', }}>
                    <Text> Please login to enable all features</Text>
                </View>


                <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = "Email" style = {styles.inputText}/>
                    </View>
                    </View>

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = "Password" style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>                

                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        flexDirection: "row",
                        flex: 0.5,
                        alignItems: "flex-start",
                        marginTop:34,
                    }}>
                        <TouchableOpacity>
                            <Text style={{ marginLeft: 8, }}>Forgot Password </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.5,
                        alignItems: "flex-end",
                        marginTop:20,
                    }}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                            <Text style={{ color: "#c08" , marginTop:15,}}>New user? Register now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {styles.btnLogin}>
                    <Text style={{color:'#fff', fontWeight:"bold", fontSize:18 }}>Log in</Text>
                    </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    card: {
        alignItems: 'center',
    },
    logo: {
        width: 130,
        height: 130,
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
        marginTop:80,
        },
    inputContainer : {
        borderRadius: 24,
        width: 370,
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 100,   
        elevation: 8,
        shadowOpacity: 1.35, 
    },
    input:{
        flexDirection: 'row',
        marginTop:20,
        color:'#a5a5a5',
    },
    inputText:{
        color:'#a5a5a5',
        paddingLeft:10,
        borderBottomWidth:0.35,
        flex:1,
        fontSize:18,
    },
    text : {
        fontSize: 33,
        color:'#FFFFFF',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 25,     
    },   
    btnLogin:{
        backgroundColor: '#800080',
        height:50,
        marginTop:20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 20,
    }   
});

export default Login;