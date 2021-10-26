import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, GPS, Insurance, Profile, InsuranceStatus, ClaimInsurance, Towing } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackScreens = createNativeStackNavigator();

function InsuranceStack() {

    useEffect(() => {
        getLanguage();
        langInsurance();
        langInsuranceStatus();
        langClaimInsurance();
        langTowing();
    });

    const [ langinsurance, setLangInsurance ] = useState('');

    const [ langinsurancestatus, setLangInsuranceStatus ] = useState('');

    const [ langclaiminsurance, setLangClaimInsurance ] = useState('');

    const [ langtowing, setLangTowing ] = useState('');

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

    const langInsurance = () => {
        if(language == 'english') {
            setLangInsurance('Insurance');
        }
        else if(language == 'malay') {
            setLangInsurance('Insurans');
        }
        else if(language == 'chinese') {
            setLangInsurance("保险");
        }
        else if(language == 'tamil') {
            setLangInsurance('காப்பீடு');
        }
      }

      const langInsuranceStatus = () => {
        if(language == 'english') {
            setLangInsuranceStatus('Insurance\nStatus');
        }
        else if(language == 'malay') {
            setLangInsuranceStatus('Status Insurans');
        }
        else if(language == 'chinese') {
            setLangInsuranceStatus("保险状况");
        }
        else if(language == 'tamil') {
            setLangInsuranceStatus('காப்பீட்டு நிலை');
        }
      }
    
      const langClaimInsurance = () => {
        if(language == 'english') {
            setLangClaimInsurance('Claim\nInsurance');
        }
        else if(language == 'malay') {
            setLangClaimInsurance('Tuntut\nInsurans');
        }
        else if(language == 'chinese') {
            setLangClaimInsurance("理赔保险");
        }
        else if(language == 'tamil') {
            setLangClaimInsurance('காப்பீடு\nகோருங்கள்');
        }
      }
    
      const langTowing = () => {
        if(language == 'english') {
            setLangTowing('Towing');
        }
        else if(language == 'malay') {
            setLangTowing('Menunda');
        }
        else if(language == 'chinese') {
            setLangTowing("拖带");
        }
        else if(language == 'tamil') {
            setLangTowing('இழுத்தல்');
        }
      }

    return(
        <StackScreens.Navigator
        screenOptions={{
        headerShown: true,
        "tabBarShowLabel": false,
        }}
        initialRouteName = {'Insurance'}
        >
            <StackScreens.Screen name='Insurance' component={Insurance}
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
                    title: langinsurance,
                }
            }
            />
            <StackScreens.Screen name='InsuranceStatus' component={InsuranceStatus}
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
                    title: langinsurancestatus,
                }
            }
            />
            <StackScreens.Screen name='ClaimInsurance' component={ClaimInsurance}
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
                    title: langclaiminsurance,
                }
            }
            />
            <StackScreens.Screen name='Towing' component={Towing}
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
                    title: langtowing,
                }
            }
            />
        </StackScreens.Navigator>
    );
}

export default InsuranceStack;