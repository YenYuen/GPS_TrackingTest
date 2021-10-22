import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, GPS, Insurance, Profile, Settings, EditProfile, FAQ, AboutUs, ChangeLanguage } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackScreens = createNativeStackNavigator();

function ProfileStack() {
    
    useEffect(() => {
        getLanguage();
        langProfile();
        langSettings();
        langEditProfile();
        langFAQ();
        langAboutUs();
        langPrivacyPolicy();
        langNotifications();
        langChangeLanguage();
        langChangePassword();
    });

    const [ langprofile, setLangProfile ] = useState('');

    const [ langsettings, setLangSettings ] = useState('');

    const [ langeditprofile, setLangEditProfile ] = useState('');

    const [ langfaq, setLangFAQ ] = useState('');

    const [ langaboutus, setLangAboutUs ] = useState('');

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

    const langProfile = () => {
        if(language == 'english') {
            setLangProfile('Profile');
        }
        else if(language == 'malay') {
            setLangProfile('Profil');
        }
        else if(language == 'chinese') {
            setLangProfile("个人资料");
        }
        else if(language == 'tamil') {
            setLangProfile('சுயவிவரம்');
        }
    }

    const langSettings = () => {
        if(language == 'english') {
            setLangSettings('Settings');
        }
        else if(language == 'malay') {
            setLangSettings('Tetapan');
        }
        else if(language == 'chinese') {
            setLangSettings("设置");
        }
        else if(language == 'tamil') {
            setLangSettings('அமைப்புகள்');
        }
      }
    
      const langEditProfile = () => {
        if(language == 'english') {
            setLangEditProfile('Edit Profile');
        }
        else if(language == 'malay') {
            setLangEditProfile('Sunting Profil');
        }
        else if(language == 'chinese') {
            setLangEditProfile("编辑个人资料");
        }
        else if(language == 'tamil') {
            setLangEditProfile('சுயவிவரத்தைத்\nதிருத்து');
        }
      }
    
      const langFAQ = () => {
        if(language == 'english') {
            setLangFAQ('FAQ');
        }
        else if(language == 'malay') {
            setLangFAQ('FAQ');
        }
        else if(language == 'chinese') {
            setLangFAQ("FAQ");
        }
        else if(language == 'tamil') {
            setLangFAQ('FAQ');
        }
      }
    
      const langAboutUs = () => {
        if(language == 'english') {
            setLangAboutUs('About Us');
        }
        else if(language == 'malay') {
            setLangAboutUs('Tentang Kita');
        }
        else if(language == 'chinese') {
            setLangAboutUs("关于我们");
        }
        else if(language == 'tamil') {
            setLangAboutUs('எங்களை பற்றி');
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
    
    return(
        <StackScreens.Navigator
        screenOptions={{
        headerShown: true,
        "tabBarShowLabel": false,
        }}
        initialRouteName = {'Profile'}
        >
            <StackScreens.Screen name='Profile' component={Profile}
            options = {
                {
                    headerStyle: {
                        backgroundColor: '#710193',
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }, 
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    title: langprofile,
                }
            }
            />
            <StackScreens.Screen name='Settings' component={Settings}
            options = {
                {
                    headerStyle: {
                        backgroundColor: '#710193',
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }, 
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    title: langsettings,
                }
            }
            />
            <StackScreens.Screen name='EditProfile' component={EditProfile}
            options = {
                {
                    headerStyle: {
                        backgroundColor: '#710193',
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }, 
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    title: langeditprofile,
                }
            }
            />
            <StackScreens.Screen name='FAQ' component={FAQ}
            options = {
                {
                    headerStyle: {
                        backgroundColor: '#710193',
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }, 
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    title: langfaq,
                }
            }
            />
            <StackScreens.Screen name='AboutUs' component={AboutUs}
            options = {
                {
                    headerStyle: {
                        backgroundColor: '#710193',
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }, 
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    title: langaboutus,
                }
            }
            />
            <StackScreens.Screen name='ChangeLanguage' component={ChangeLanguage}
            options = {
                {
                    headerStyle: {
                        backgroundColor: '#710193',
                    },
                    headerTitleStyle: {
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }, 
                    headerTitleAlign: 'center',
                    headerTintColor: '#FFFFFF',
                    title: langchangelanguage,
                }
            }
            />
        </StackScreens.Navigator>
    );
}

export default ProfileStack;