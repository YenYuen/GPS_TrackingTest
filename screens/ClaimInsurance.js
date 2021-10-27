import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import { icon, image } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClaimInsurance = ()=> {

    useEffect(() => {
        getLanguage();
        langText();
        langButtonText();
    });

    const [ langtext, setLangText ] = useState('');

    const [ langbuttontext, setLangButtonText ] = useState('');

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

    const langText = () => {
        if(language == 'english') {
            setLangText('It appears that you have no claims at the moment.\nClick on the button below to submit a new claim');
        }
        else if(language == 'malay') {
            setLangText('Nampaknya anda tidak mempunyai tuntutan pada masa ini.\nKlik pada butang di bawah untuk menyerahkan tuntutan baharu');
        }
        else if(language == 'chinese') {
            setLangText("看来您目前没有任何索赔。\n单击下面的按钮提交新的索赔");
        }
        else if(language == 'tamil') {
            setLangText('தற்போது உங்களிடம் எந்த உரிமைகோரல்களும் இல்லை என்று தோன்றுகிறது.\nபுதிய உரிமைகோரலைச் சமர்ப்பிக்க கீழே உள்ள பொத்தானைக் கிளிக் செய்யவும்');
        }
    }

    const langButtonText = () => {
        if(language == 'english') {
            setLangButtonText('SUBMIT A CLAIM');
        }
        else if(language == 'malay') {
            setLangButtonText('SERAHKAN TUNTUTAN');
        }
        else if(language == 'chinese') {
            setLangButtonText("提交索赔");
        }
        else if(language == 'tamil') {
            setLangButtonText('உரிமைகோரலைச் சமர்ப்பிக்கவும்');
        }
    }

    return(
        <View
        style={styles.Container}
        >
            <Image
            style={styles.image}
            source={image.Folder}
            />
            <Text
            style={styles.text}
            >{langtext}</Text>
            <TouchableOpacity
            style={styles.button}
            >
                <Text
                style={styles.buttonText}
                >{langbuttontext}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ClaimInsurance;

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        marginBottom: Dimensions.get('window').height * 0.05,
    },
    Container: {
        alignItems: 'center',
        paddingTop: Dimensions.get('window').height * 0.1,
        paddingLeft: Dimensions.get('window').width * 0.05,
        paddingRight: Dimensions.get('window').width * 0.05,
        backgroundColor: '#FFFFFF',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    text: {
        marginBottom: Dimensions.get('window').height * 0.05,
        color: 'grey',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#710193',
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 17,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
});