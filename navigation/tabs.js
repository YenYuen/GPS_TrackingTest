import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Start, Home, GPS, Insurance, Profile } from '../screens';
import { HomeStack, GPSStack, InsuranceStack, ProfileStack } from '../stacks';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { icon } from '../constants';
import { Alert, Image, StyleSheet } from 'react-native';
import { LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();


  

const Tab  = createBottomTabNavigator();

const Tabs = () => {
    
    useEffect(() => {
        getLanguage();
        langHome();
        langGPS();
        langInsurance();
        langProfile();
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

    const [ langgps, setLangGPS ] = useState('GPS');

    const langGPS = () => {
        let gps;
        if(language == 'english') {
            setLangGPS('GPS');
        }
        else if(language == 'malay') {
            setLangGPS('GPS');
        }
        else if(language == 'chinese') {
            setLangGPS("全球定位系统");
        }
        else if(language == 'tamil') {
            setLangGPS('ஜிபிஎஸ்');
        }
        return(gps);
    }
    
    const [ langinsurance, setLangInsurance ] = useState('Insurance');

    const langInsurance = () => {
        let insurance;
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
        return(insurance);
    }

    const [ langprofile, setLangProfile ] = useState('Profile');

    const langProfile = () => {
        let profile;
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
        return(profile);
    }

    return(
        
        <Tab.Navigator
        tabBarOptions={{
            showLabel: true,
            style: {
                position: 'absolute',
                left: 0,
                bottom: 0,
                right: 0,
                borderTopWidth: 0,
                backgroundColor: 'transparent',
                elevation: 2,
            },
            
        }}
        activeColor='black'
        inactiveColor='white'
        screenOptions={{
            "headerShown": false,
            "tabBarShowLabel": true,
            "tabBarStyle": {
                "display": "flex",
                "backgroundColor": "#710193",
                "elevation": 1,
                "height": 80,
            },
            "tabBarLabelStyle": {
                "fontWeight": "bold",
                "fontSize": 20,
            },
            "tabBarInactiveTintColor": "#F5E7F5",
            "tabBarActiveTintColor": "#FFFFFF",
            "tabBarActiveBackgroundColor": "#A32CC4",
            "tabBarItemStyle": {
                "paddingBottom": 5,
            },
            "tabBarHideOnKeyboard": true,
        }}
        initialRouteName = {'Home'}
        >
            <Tab.Screen name = "Home" component = {HomeStack}
            options = {{
                tabBarIcon: () => {
                    return(
                        <Image
                        style={styles.HomeIconStyle}
                        source = {icon.HomeIcon}
                        />
                    );
                },
                title: langhome,            
            }}
            />
            <Tab.Screen name = "GPS" component = {GPSStack}
            options = {{
                tabBarIcon: () => {
                    return(
                        <Image
                        style={styles.GPSIconStyle}
                        source = {icon.GPSIcon}
                        />
                    );
                },
                title: langgps,          
            }}
            />
            <Tab.Screen name = "Insurance" component = {InsuranceStack}
            options = {{
                tabBarIcon: () => {
                    return(
                        <Image
                        style={styles.InsuranceIconStyle}
                        source = {icon.InsuranceIcon}
                        />
                    );
                },
                title: langinsurance,           
            }}
            />
            <Tab.Screen name = "Profile" component = {ProfileStack}
            options = {{
                tabBarIcon: () => {
                    return(
                        <Image
                        style={styles.ProfileIconStyle}
                        source = {icon.ProfileIcon}
                        />
                    );
                },
                title: langprofile               
            }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    HomeIconStyle: {
        height: 40,
        width: 40,
    },
    GPSIconStyle: {
        height: 50,
        width: 50,
        marginBottom: -10, 
    },
    InsuranceIconStyle: {
        height: 40,
        width: 40, 
    },
    ProfileIconStyle: {
        height: 35,
        width: 35, 
    },
});