import React, { useEffect, useState } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const renderContactChoice = () => {
    
    useEffect(() => {
        getLanguage();
        langEmail();
        langSMS();
    });

    const [ langemail, setLangEmail ] = useState('');

    const [ langsms, setLangSMS ] = useState('');

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

      const langSMS = () => {
        if(language == 'english') {
            setLangSMS('SMS');
        }
        else if(language == 'malay') {
            setLangSMS('SMS');
        }
        else if(language == 'chinese') {
            setLangSMS("短信");
        }
        else if(language == 'tamil') {
            setLangSMS('எஸ்எம்எஸ்');
        }
      }  

    const contactChoice = [
        {
            id: 'email',
            name: langemail,
            value: 'email',
        },
        {
            id: 'sms',
            name: langsms,
            value: 'sms',
        },
    ];

    const saveContactChoice = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('contactchoice', jsonValue);
          RNRestart.Restart();
        }
        catch(e) {
          console.log(e);
        }
      }

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity
            style={styles.contactChoiceContainer}
            onPress={() => {saveLanguage(item.value)}}
            >
                <Text
                style={styles.text}
                >{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return(
        <SafeAreaView>
            <FlatList
            data={contactChoice}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            />
        </SafeAreaView>
    );
}

const Notifications = ()=> {
    return(
        <View>
            {renderContactChoice()}
        </View>
    );
}

export default Notifications;

const styles = StyleSheet.create({
    contactChoiceContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        paddingLeft: 20,
        justifyContent: 'center',
        height: 100.
    },
    text: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#000000',
    },
});