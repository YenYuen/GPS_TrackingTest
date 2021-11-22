import * as React from 'react';
import { Button, Text, View, FlatList,TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';

const ChangePassword = ()=> {
    return(
        <View style={styles.card}>
           

            <View style={styles.inputContainer}>
               
                <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = "Current Password" style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = "New Password" style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>                

                    <View style = {{marginTop: 20, marginBottom:20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = "Confirm Password" style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>    
            
                    <View style = {styles.btnLogin}>
                    <Text style={{color:'#fff', fontWeight:"bold", fontSize:18 }}>Reset</Text>
                    </View>

               
            </View>
        </View>
    );
};


const styles = StyleSheet.create ({
    card: {
        alignItems: 'center',
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
        borderBottomWidth: 0.93,
        flex:1,
        fontSize:18,
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
    

export default ChangePassword;

//Nurul