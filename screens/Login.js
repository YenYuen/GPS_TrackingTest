import React, { useState, useEffect } from 'react';
import { TextInput, Button, Card, Photo, LinearGradient, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking, ScrollView, Alert } from 'react-native';
import { image } from '../constants'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
    
const Login = () => {
    useEffect(() => {
        getLanguage();
        langInstruction();
        langEmail();
        langPassword();
        langForgotPassword();
        langRegister();
        langLogin();
    });

    const navigation = useNavigation();

    const [ langinstruction, setLangInstruction ] = useState('');

    const [ langemail, setLangEmail ] = useState('');
    
    const [ langpassword, setLangPassword ] = useState('');

    const [ langforgotpassword, setLangForgotPassword ] = useState('');

    const [ langregister, setLangRegister ] = useState('');

    const [ langlogin, setLangLogin ] = useState('');

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

    const langInstruction = () => {
        if(language == 'english') {
            setLangInstruction('Please login to enable all features');
        }
        else if(language == 'malay') {
            setLangInstruction('Sila log masuk untuk mendayakan semua ciri');
        }
        else if(language == 'chinese') {
            setLangInstruction("请登录以启用所有功能");
        }
        else if(language == 'tamil') {
            setLangInstruction('அனைத்து அம்சங்களையும்\nஇயக்க உள்நுழையவும்');
        }
      }

      const langEmail = () => {
        if(language == 'english') {
            setLangEmail('Email');
        }
        else if(language == 'malay') {
            setLangEmail('E-mel');
        }
        else if(language == 'chinese') {
            setLangEmail("电子邮件");
        }
        else if(language == 'tamil') {
            setLangEmail('மின்னஞ்சல்');
        }
      }

      const langPassword = () => {
        if(language == 'english') {
            setLangPassword('Password');
        }
        else if(language == 'malay') {
            setLangPassword('Kata laluan');
        }
        else if(language == 'chinese') {
            setLangPassword("密码");
        }
        else if(language == 'tamil') {
            setLangPassword('கடவுச்சொல்');
        }
      }

      const langForgotPassword = () => {
        if(language == 'english') {
            setLangForgotPassword('Forgot Password');
        }
        else if(language == 'malay') {
            setLangForgotPassword('Lupa kata laluan');
        }
        else if(language == 'chinese') {
            setLangForgotPassword("忘记密码");
        }
        else if(language == 'tamil') {
            setLangForgotPassword('கடவுச்சொல்லை\nமறந்துவிட்டீர்களா');
        }
      }

      const langRegister = () => {
        if(language == 'english') {
            setLangRegister('New user? Register now');
        }
        else if(language == 'malay') {
            setLangRegister('Pengguna baru?\nDaftar sekarang');
        }
        else if(language == 'chinese') {
            setLangRegister("新用户？现在注册");
        }
        else if(language == 'tamil') {
            setLangRegister('புதிய பயனர்?\nஇப்போதே பதிவு செய்யுங்கள்');
        }
      }

      const langLogin = () => {
        if(language == 'english') {
            setLangLogin('Log in');
        }
        else if(language == 'malay') {
            setLangLogin('Log masuk');
        }
        else if(language == 'chinese') {
            setLangLogin("登录");
        }
        else if(language == 'tamil') {
            setLangLogin('உள்நுழைய');
        }
      }
    
    const [email, setEmail] = useState("");
  
    const [password, setPassword] = useState("");

    const saveUsername = async (value) => {
        try {
          await AsyncStorage.setItem('username', JSON.stringify(value));
        } catch(e) {
          console.log(e);
        }
    }

    const saveEmail = async (value) => {
        try {
          await AsyncStorage.setItem('email', JSON.stringify(value));
        } catch(e) {
          console.log(e);
        }
    }

    const savePassword = async (value) => {
        try {
          await AsyncStorage.setItem('password', JSON.stringify(value));
        } catch(e) {
          console.log(e);
        }
    }

    const saveLoginStatus = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('login', jsonValue);
        }
        catch(e) {
          console.log(e);
        }
    }

    const loginUser = () => {
        var Email = email;
        var Password = password;

        if(Email.length == 0 || Password.length == 0) {
            Alert.alert("Required fields are empty");
        }
        else {
            var url = "http://10.0.2.2:8080/gpstracking/Login.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var data = {
                email: Email,
                password: Password,
            };

            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((response) =>
            {
                Alert.alert(response[0].message);
                saveUsername(response[0].username);
                saveEmail(response[0].email);
                savePassword(response[0].password);
            }
            )
            .catch((error) => 
            {
                Alert.alert("Error" + error);
            })
            saveLoginStatus("true");
            navigation.navigate('Tabs');
        }
    }

    return (
        
        <View style={styles.card}>

             <View style={styles.logoContainer}
        >
            <Image
            source={image.Gojaze_Logo}
            style={styles.logo}
            />
        </View>
        <ScrollView showsVerticalScrollIndicator = {false}>

            <View style={styles.inputContainer}>
                <View style={{ marginTop: 20, fontSize: 15, alignItems: 'center', color: '#FFFFFF', }}>
                    <Text>{langinstruction}</Text>
                </View>


                <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput 
                        onChangeText = {(email) => {setEmail(email)}}
                        placeholder = {langemail} style = {styles.inputText}/>
                    </View>
                    </View>

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.input}>
                        <TextInput 
                        onChangeText = {(password) => {setPassword(password)}}
                        placeholder = {langpassword} style = {styles.inputText} secureTextEntry />
                    </View>
                    </View>                

                <View style={{ flexDirection: "row" }}>
                    <View style={{
                        flexDirection: "row",
                        flex: 0.5,
                        alignItems: "flex-start",
                        marginTop:34,
                    }}>
                        <TouchableOpacity  onPress={() => {navigation.navigate('Change Password')}}>
                            <Text style={{ marginLeft: 8, }}>{langforgotpassword}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.5,
                        alignItems: "flex-end",
                        marginTop:20,
                    }}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                            <Text style={{ color: "#c08" , marginTop:15,}}>{langregister}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity
                onPress = {() => {loginUser()}}
                >
                    <View style = {styles.btnLogin}>
                        <Text style={{color:'#fff', fontWeight:"bold", fontSize:18 }}>{langlogin}</Text>
                    </View>
                </TouchableOpacity>
                    
                    <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('Tabs')}}>
                            <Text style={{ color: "#c08" , marginTop:15, alignItems: 'center'}}>Home</Text>
                        </TouchableOpacity>
                    </View>
              
               

            </View>
            </ScrollView>
        </View>
        
 
    );
};

export default Login;

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
    },
});