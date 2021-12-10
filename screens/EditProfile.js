import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking, TextInput, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const EditProfile = ()=> {
    useEffect(() => {
        getLanguage();
        getName();
        getEmail();
        getPassword();
        langName();
        langEmail();
        langPassword();
    });

    const [ language, setLanguage ] = useState('');

    const [ langname, setLangName ] = useState('');

    const [ langemail, setLangEmail ] = useState('');

    const [langpassword, setLangPassword] = useState('');

    const [ name, setName ] = useState('');

    const [ email, setEmail ] = useState('');

    const [ password, setPassword ] = useState('');

    const [ newName, setNewName ] = useState('');

    const [ newEmail, setNewEmail ] = useState('');

    const [ newPassword, setNewPassword ] = useState('');
    
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

    const getName = async () => {
        try {
            const value = await AsyncStorage.getItem('username');
            if(value !== null) {
                setName(JSON.parse(value));
                console.log(JSON.parse(value));
            }
        } 
        catch(e) {
        console.log(e);
        }
    }

    const getEmail = async () => {
        try {
            const value = await AsyncStorage.getItem('email');
            if(value !== null) {
                setEmail(JSON.parse(value));
            }
        } 
        catch(e) {
        console.log(e);
        }
    }

    const getPassword = async () => {
        try {
            const value = await AsyncStorage.getItem('password');
            if(value !== null) {
                setPassword(JSON.parse(value));
            }
        } 
        catch(e) {
        console.log(e);
        }
    }

    const langName = () => {
        if(language == 'english') {
            setLangName('Name:');
        }
        else if(language == 'malay') {
            setLangName('Nama:');
        }
        else if(language == 'chinese') {
            setLangName("姓名:");
        }
        else if(language == 'tamil') {
            setLangName('பெயர்:');
        }
      }

    const langEmail = () => {
      if(language == 'english') {
          setLangEmail('Email:');
      }
      else if(language == 'malay') {
          setLangEmail('E-mel:');
      }
      else if(language == 'chinese') {
          setLangEmail("电子邮件:");
      }
      else if(language == 'tamil') {
          setLangEmail('மின்னஞ்சல்:');
      }
    }

    const langPassword = () => {
        if(language == 'english') {
            setLangPassword('Password:');
        }
        else if(language == 'malay') {
            setLangPassword('Kata laluan:');
        }
        else if(language == 'chinese') {
            setLangPassword("密码:");
        }
        else if(language == 'tamil') {
            setLangPassword('கடவுச்சொல்:');
        }
    }

    const saveUsername = async (value) => {
        try {
          await AsyncStorage.setItem('username', JSON.stringify(value))
        } catch(e) {
          console.log(e);
        }
    }

    const saveEmail = async (value) => {
        try {
          await AsyncStorage.setItem('email', JSON.stringify(value))
        } catch(e) {
          console.log(e);
        }
    }

    const savePassword = async (value) => {
        try {
          await AsyncStorage.setItem('password', JSON.stringify(value))
        } catch(e) {
          console.log(e);
        }
    }

    const confirmChanges = () => {
        var CurrentEmail = email;
        if(newName == '') {
            var Username = name;
        }
        else {
            var Username = newName;
        }
        if(newEmail == '') {
            var Email = email;
        }
        else {
            var Email = newEmail;
        }
        if(newPassword == '') {
            var Password = password;
        }
        else {
            var Password = newPassword;
        }

        if(Username.length == 0 || Email.length == 0 || Password.length == 0) {
            Alert.alert("All fields must be different from the original value");
        }
        else {
            var url = "http://10.0.2.2:8080/gpstracking/EditProfile.php";

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            var data = {
                currentEmail: CurrentEmail,
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
            .then((response) => {
                Alert.alert(response[0].message);
                saveUsername(Username);
                setName(Username);
                saveEmail(Email);
                setEmail(Email);
                savePassword(Password);
                setPassword(Password);
            })
            .catch((error) => 
            {
                Alert.alert("Error" + error + " or you are not logged in");
            })
            RNRestart.Restart();
        }
    }

    return(
        <ScrollView
        style={{backgroundColor: "#FFFFFF",paddingTop: 20}}
        >
            <View
            style={styles.Container}
            >
                <View
                style={styles.textContainer}
                >
                    <Text
                    style={styles.text}
                    >{langname}</Text>
                </View>
                <View
                style={styles.inputContainer}
                >
                    <TextInput
                    style={styles.input}
                    onChangeText={(name) => {setNewName(name)}}
                    value={newName}
                    placeholder={name}
                    placeholderTextColor="#000000"
                    />
                </View>
            </View>
            <View
            style={styles.Container}
            >
                <View
                style={styles.textContainer}
                >
                    <Text
                    style={styles.text}
                    >{langemail}</Text>
                </View>
                <View
                style={styles.inputContainer}
                >
                    <TextInput
                    style={styles.input}
                    onChangeText={(email) => {setNewEmail(email)}}
                    value={newEmail}
                    placeholder={email}
                    placeholderTextColor="#000000"
                    />
                </View>
            </View>
            <View
            style={styles.Container}
            >
                <View
                style={styles.textContainer}
                >
                    <Text
                    style={styles.text}
                    >{langpassword}</Text>
                </View>
                <View
                style={styles.inputContainer}
                >
                    <TextInput
                    style={styles.input}
                    onChangeText={(password) => {setNewPassword(password)}}
                    value={newPassword}
                    placeholder={password}
                    placeholderTextColor="#000000"
                    />
                </View>
            </View>
            <View
            style={styles.btnContainer}
            >
                <TouchableOpacity
                onPress = {() => {confirmChanges()}}
                style={styles.btn}
                >
                    <Text
                    style={styles.btnText}
                    >Confirm Changes</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#FFFFFF",
    },
    text: {
        color: '#000000',
    },
    input: {
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.7,
        borderRadius: 10,
        borderColor: "#000000",
    },
    textContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height * 0.1,
    },
    inputContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height * 0.1,
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
    },
    btn: {
        height: Dimensions.get('window').height * 0.1,
        width: 100,
        borderWidth: 1,
        borderColor: "#000000",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    btnText: {
        color: "#000000",
    },
});