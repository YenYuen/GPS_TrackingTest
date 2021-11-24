import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList,TextInput, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ()=> {

    useEffect(() => {
        getLanguage();
        langCurrent();
        langNew();
        langConfirm();
        langReset();
    });
    
    const [ langcurrent, setLangCurrent ] = useState();

    const [ langnew, setLangNew ] = useState();

    const [ langconfirm, setLangConfirm ] = useState();

    const [ langreset, setLangReset ] = useState();

    const [ language, setLanguage ] = useState(''); 

    const getLanguage = async () => {
        try {
            const value = await AsyncStorage.getItem('language');
            if(value !== null) {
                setLanguage(JSON.parse(value));
            }
        } 
        catch(e) {
        console.log(e);
        }
    }

    const langCurrent = () => {
        if(language == 'english') {
            setLangCurrent('Current Password');
        }
        else if(language == 'malay') {
            setLangCurrent('Kata Laluan Semasa');
        }
        else if(language == 'chinese') {
            setLangCurrent("当前密码");
        }
        else if(language == 'tamil') {
            setLangCurrent('தற்போதைய கடவுச்சொல்');
        }
    }

    const langNew = () => {
        if(language == 'english') {
            setLangNew('New Password');
        }
        else if(language == 'malay') {
            setLangNew('Kata Laluan Baharu');
        }
        else if(language == 'chinese') {
            setLangNew("新密码");
        }
        else if(language == 'tamil') {
            setLangNew('புதிய கடவுச்சொல்');
        }
    }

    const langConfirm = () => {
        if(language == 'english') {
            setLangConfirm('Confirm Password');
        }
        else if(language == 'malay') {
            setLangConfirm('Sahkan Kata Laluan');
        }
        else if(language == 'chinese') {
            setLangConfirm("确认密码");
        }
        else if(language == 'tamil') {
            setLangConfirm('கடவுச்சொல்லை உறுதிப்படுத்தவும்');
        }
    }

    const langReset = () => {
        if(language == 'english') {
            setLangReset('Reset');
        }
        else if(language == 'malay') {
            setLangReset('Tetapkan\nsemula');
        }
        else if(language == 'chinese') {
            setLangReset("重启");
        }
        else if(language == 'tamil') {
            setLangReset('மீட்டமை');
        }
    }

    return(
        <View style={styles.card}>
           

            <View style={styles.inputContainer}>
               
                <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = {langcurrent} style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = {langnew} style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>                

                    <View style = {{marginTop: 20, marginBottom:20}}>
                    <View style = {styles.input}>
                        <TextInput placeholder = {langconfirm} style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>    
            
                    <View style = {styles.btnLogin}>
                    <Text style={{color:'#fff', fontWeight:"bold", fontSize:18 }}>{langreset}</Text>
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