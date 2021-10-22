import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, GPS, Insurance, Profile, Locator, Hotlines, Roadtax } from '../screens'
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackScreens = createNativeStackNavigator();

function HomeStack() {

    useEffect(() => {
        getLanguage();
        langHome();
        langLocator();
        langHotlines();
        langRoadtax();
    });

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

    const [ langhome, setLangHome ] = useState('Home');

    const langHome = () => {
        let home;
        if(language == 'english') {
            setLangHome('Home');
        }
        else if(language == 'malay') {
            setLangHome('Rumah');
        }
        else if(language == 'chinese') {
            setLangHome("家");
        }
        else if(language == 'tamil') {
            setLangHome('வீடு');
        }
        return(home);
    }

    const [ langlocator, setLangLocator ] = useState('Locator');

    const langLocator = () => {
        let locator;
        if(language == 'english') {
            setLangLocator('Locator');
        }
        else if(language == 'malay') {
            setLangLocator('Pencari');
        }
        else if(language == 'chinese') {
            setLangLocator("定位器");
        }
        else if(language == 'tamil') {
            setLangLocator('கண்டுபிடிப்பான்');
        }
        return(locator);
    }

    const [ langhotlines, setLangHotlines ] = useState('Hotlines');

    const langHotlines = () => {
        let hotlines;
        if(language == 'english') {
            setLangHotlines('Home');
        }
        else if(language == 'malay') {
            setLangHotlines('Talian Hotline');
        }
        else if(language == 'chinese') {
            setLangHotlines("热线");
        }
        else if(language == 'tamil') {
            setLangHotlines('ஹாட்லைன்கள்');
        }
        return(hotlines);
    }

    const [ langroadtax, setLangRoadtax ] = useState('Roadtax');

    const langRoadtax = () => {
        let roadtax;
        if(language == 'english') {
            setLangRoadtax('Roadtax');
        }
        else if(language == 'malay') {
            setLangRoadtax('Roadtax');
        }
        else if(language == 'chinese') {
            setLangRoadtax("路税");
        }
        else if(language == 'tamil') {
            setLangRoadtax('சாலை வரி');
        }
        return(roadtax);
    }

    return(
        <StackScreens.Navigator
        screenOptions={{
        headerShown: true,
        "tabBarShowLabel": false,
        }}
        initialRouteName = {'Home'}
        >
            <StackScreens.Screen name='Home' component={Home}
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
                    title: langhome,
                }
            }
            />
            <StackScreens.Screen name='Locator' component={Locator} 
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
                    title: langlocator,
                }
            }
            />
            <StackScreens.Screen name='Hotlines' component={Hotlines} 
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
                    title: langhotlines,
                }
            }
            />
            <StackScreens.Screen name='Roadtax' component={Roadtax} 
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
                    title: langroadtax,
                }
            }
            />
        </StackScreens.Navigator>
    );
}

export default HomeStack;