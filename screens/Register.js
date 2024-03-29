import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, TextInput, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {

    useEffect(() => {
        getLanguage();
        langWelcome();
        langInstruction();
        langName();
        langEmail();
        langPassword();
        langConfirmPassword();
        langSignUp();
        langHaveAccount();
        langLogin();
    });

    useEffect(() => {
        validatePassword();
    }, [{confirmPassword}, {password}]);

    const [ langwelcome, setLangWelcome ] = useState('');

    const [ langinstruction, setLangInstruction ] = useState('');

    const [ langname, setLangName ] = useState('');

    const [ langemail, setLangEmail ] = useState('');

    const [langpassword, setLangPassword] = useState('');

    const [ langconfirmpassword, setLangConfirmPassword ] = useState('');

    const [ langsignup, setLangSignUp ] = useState('');

    const [langhaveaccount, setLangHaveAccount] = useState('');

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

    const langWelcome = () => {
        if(language == 'english') {
            setLangWelcome('Welcome to Gojaze!');
        }
        else if(language == 'malay') {
            setLangWelcome('Selamat datang ke Gojaze!');
        }
        else if(language == 'chinese') {
            setLangWelcome("欢迎来到 Gojaze！");
        }
        else if(language == 'tamil') {
            setLangWelcome('Gojaze க்கு\nவரவேற்கிறோம்!');
        }
      }

      const langInstruction = () => {
        if(language == 'english') {
            setLangInstruction('Fill in the blanks below to create your Gojaze account.');
        }
        else if(language == 'malay') {
            setLangInstruction('Isikan tempat kosong di bawah untuk membuat akaun Gojaze anda.');
        }
        else if(language == 'chinese') {
            setLangInstruction("填写下面的空白以创建您的 Gojaze 帐户。");
        }
        else if(language == 'tamil') {
            setLangInstruction('உங்கள் Gojaze கணக்கை உருவாக்க, கீழே உள்ள வெற்றிடங்களை நிரப்பவும்.');
        }
      }

      const langName = () => {
        if(language == 'english') {
            setLangName('Name');
        }
        else if(language == 'malay') {
            setLangName('Nama');
        }
        else if(language == 'chinese') {
            setLangName("姓名");
        }
        else if(language == 'tamil') {
            setLangName('பெயர்');
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

    const langConfirmPassword = () => {
        if(language == 'english') {
            setLangConfirmPassword('Confirm password');
        }
        else if(language == 'malay') {
            setLangConfirmPassword('Sahkan kata laluan');
        }
        else if(language == 'chinese') {
            setLangConfirmPassword("确认密码");
        }
        else if(language == 'tamil') {
            setLangConfirmPassword('கடவுச்சொல்லை உறுதிப்படுத்தவும்');
        }
      }

      const langSignUp = () => {
        if(language == 'english') {
            setLangSignUp('SignUp');
        }
        else if(language == 'malay') {
            setLangSignUp('daftar');
        }
        else if(language == 'chinese') {
            setLangSignUp("注册");
        }
        else if(language == 'tamil') {
            setLangSignUp('பதிவு செய்யவும்');
        }
      }

      const langHaveAccount = () => {
        if(language == 'english') {
            setLangHaveAccount('Already have account?');
        }
        else if(language == 'malay') {
            setLangHaveAccount('Sudah mempunyai akaun?');
        }
        else if(language == 'chinese') {
            setLangHaveAccount("已有账号？");
        }
        else if(language == 'tamil') {
            setLangHaveAccount('ஏற்கனவே கணக்கு உள்ளதா?');
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

    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword,setConfirmPassword] = useState("");

    const [same,setSame] = useState();

    const registerUser = () => {
        var Username = username;
        var Email = email;
        var Password = password;
        var ConfirmPassword = confirmPassword;

        if(Username.length == 0 || Email.length == 0 || Password.length == 0 || ConfirmPassword == 0) {
            Alert.alert("Required fields are empty");
        }
        else {
            var url = "http://10.0.2.2:8080/gpstracking/Register.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var data = {
                username: Username,
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
            }
            )
            .catch((error) => 
            {
                Alert.alert("Error" + error);
            })
        }
    }

    const validatePassword = () => {
        if(confirmPassword == password) {
            setSame(true);
        }
        else {
            setSame(false);
        }
    }

    return(
        <SafeAreaView style = {{paddingHorizontal:20, flex:1, backgroundColor:'#FFFFFF'}}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                
                <View style = {{marginTop:30}}>
                    <Text style = {{fontWeight:'bold', fontSize:27, color: '#000000'}}>
                        {langwelcome}
                        </Text>
                    <Text style = {{fontWeight:'bold', fontSize:19, color: '#808080'}}>
                        {langinstruction}
                        </Text>

                        <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = {langname} style = {styles.input}
                        value={username}
                        onChangeText={(username) => {setUsername(username)}}
                        />
                    </View>
                    </View>

                </View>
                <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = {langemail} style = {styles.input}
                        value={email}
                        onChangeText={(email) => {setEmail(email)}}
                        />
                    </View>
                    </View>

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = {langpassword} style = {styles.input} secureTextEntry
                        value={password}
                        onChangeText={(password) => {setPassword(password)}}
                        />
                    </View>
                    </View>                

                    <View style = {{marginTop: 20}}>
                    <View style = {styles.inputContainer}>
                        <TextInput placeholder = {langconfirmpassword} style = {styles.input} secureTextEntry
                        value={confirmPassword}
                        onChangeText={(confirmPassword) => {setConfirmPassword(confirmPassword)}}
                        />
                    </View>
                        {same ?
                        <Text
                        style={{color:"#00FF00",}}
                        >Password is matching</Text> :
                        <Text
                        style={{color: "#FF0000",}}
                        >Password is not matching</Text>
                        }
                    </View>    
                
                    <TouchableOpacity
                    disabled={!same}
                    onPress={() => {
                        registerUser();
                    }}
                    >
                        <View style = {styles.btnSignup}>
                            <Text style={{color:'#fff', fontWeight:"bold", fontSize:18 }}>{langsignup}</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection:'row', alignItems:'flex-end', justifyContent:'center', marginTop:40, marginBottom: 20}} >
                        <Text style= {{color:'#808080', fontWeight:'bold'}}>
                            {langhaveaccount} 
                        </Text>

                        <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                        <Text style={{color:'#c08', fontWeight:'bold', marginLeft:2}} >
                             {langlogin}
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