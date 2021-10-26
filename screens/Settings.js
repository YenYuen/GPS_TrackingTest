import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import { icon, image } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderSettingsNav = () => {
    const navigation = useNavigation();
    useEffect(() => {
        getLanguage();
        langPrivacyPolicy();
        langNotifications();
        langChangeLanguage();
        langChangePassword();
      });

      const [ langprivacypolicy, setLangPrivacyPolicy ] = useState('');

      const [ langnotifications, setLangNotifications ] = useState('');

      const [ langchangelanguage, setLangChangeLanguage ] = useState('');

      const [ langchangepassword, setLangChangePassword ] = useState('');

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

      const langPrivacyPolicy = () => {
        if(language == 'english') {
            setLangPrivacyPolicy('Privacy Policy');
        }
        else if(language == 'malay') {
            setLangPrivacyPolicy('Dasar Privasi');
        }
        else if(language == 'chinese') {
            setLangPrivacyPolicy("隐私政策");
        }
        else if(language == 'tamil') {
            setLangPrivacyPolicy('தனியுரிமை கொள்கை');
        }
      }

      const langNotifications = () => {
        if(language == 'english') {
            setLangNotifications('Notifications');
        }
        else if(language == 'malay') {
            setLangNotifications('Pemberitahuan');
        }
        else if(language == 'chinese') {
            setLangNotifications("通知");
        }
        else if(language == 'tamil') {
            setLangNotifications('அறிவிப்புகள்');
        }
      }

      const langChangeLanguage = () => {
        if(language == 'english') {
            setLangChangeLanguage('Change Language');
        }
        else if(language == 'malay') {
            setLangChangeLanguage('Tukar Bahasa');
        }
        else if(language == 'chinese') {
            setLangChangeLanguage("改变语言");
        }
        else if(language == 'tamil') {
            setLangChangeLanguage('மொழியை மாற்று');
        }
      }

      const langChangePassword = () => {
        if(language == 'english') {
            setLangChangePassword('Change Password');
        }
        else if(language == 'malay') {
            setLangChangePassword('Tukar Kata Laluan');
        }
        else if(language == 'chinese') {
            setLangChangePassword("更改密码");
        }
        else if(language == 'tamil') {
            setLangChangePassword('கடவுச்சொல்லை மாற்று');
        }
      }

      const settingsNav = [
        {
            id: 'privacy',
            name: langprivacypolicy,
        },
        {
            id: 'notifications',
            name: langnotifications,
        },
        {
            id: 'language',
            name: langchangelanguage,
        },
        {
            id: 'password',
            name: langchangepassword,
        },
    ]

    renderItem = ({item}) => {
        return(
            <TouchableOpacity
            style={styles.choiceContainer}
            onPress={() => {
                if(item.id == 'privacy') {
                    navigation.navigate('PrivacyPolicy');
                }
                else if(item.id == 'notifications') {
                    navigation.navigate('Notifications');
                }
                else if(item.id == 'language') {
                    navigation.navigate('ChangeLanguage');
                }
                else if(item.id == 'password') {
                    navigation.navigate('ChangePassword');
                }
            }}
            >
                <View
                style={styles.textContainer}
                >
                <Text
                style={styles.text}
                >{item.name}</Text>
                </View>
                <View
                style={styles.arrowContainer}
                >
                <Image
                source={image.ArrowWhite}
                style={styles.Arrow}
                />
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <SafeAreaView
        style={styles.Container}
        >
            <FlatList
            data={settingsNav}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            />
        </SafeAreaView>
    );
}

const Settings = ()=> {
    return(
        <SafeAreaView>
            {renderSettingsNav()}
        </SafeAreaView>
    );
}

export default Settings;

const styles = StyleSheet.create({
    Arrow: {
        height: 30,
        width: 30,
    },
    choiceContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 30,
        backgroundColor: '#710193',
        height: 100,
        borderRadius: 5,
    },
    textContainer: {
        width: 200,
        color: '#FFFFFFF',
    },
    arrowContainer: {
        width: 30,
        flex: 0.2,
    },
    Container: {
        paddingTop: 20,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
});