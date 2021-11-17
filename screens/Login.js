import * as React from 'react';
import { TextInput, Button, Card, Photo, LinearGradient, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking, } from 'react-native';
import { image } from '../constants'

const Login = () => {
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

                <View >
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                    />

                    <View style = {{marginTop:5, marginBottom: 12}}>
                    <TextInput 
                        secureTextEntry={true}
                        placeholder="Password"
                        style={styles.input}
                    /></View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        flexDirection: "row",
                        flex: 0.5,
                        alignItems: "flex-start",
                        marginTop:15,
                    }}>
                        <TouchableOpacity>
                            <Text style={{ marginLeft: 8, }}>Forgot Password </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.5,
                        alignItems: "flex-end",
                    }}>
                        <TouchableOpacity>
                            <Text style={{ color: "#c08" , marginTop:15,}}>New user? Register now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text
                            style={styles.btnText}
                        >Login</Text>
                    </TouchableOpacity>
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
       marginTop:20,
       
    },
    text : {
        fontSize: 33,
        color:'#FFFFFF',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 25,        
    },
    textInput : {
       paddingLeft:60,
       borderBottomWidth:0.3,
       flex:1,
       fontSize:18,
       color: '#grey',
       flexDirection:'row',
    },
    button:{
       
        backgroundColor: "#710193",
        marginTop: 30,
        borderRadius: 24,
        width: 350,
        marginTop: 12,
        padding:15,
        marginBottom:8,
    },
    btnText:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize:25,        
        textAlign:'center',
    }   
});

export default Login;