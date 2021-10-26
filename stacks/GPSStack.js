import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, GPS, Insurance, Profile, Login, Register } from '../screens'

const StackScreens = createNativeStackNavigator();

function GPSStack() {
    return(
        <StackScreens.Navigator
        screenOptions={{
        headerShown: true,
        "tabBarShowLabel": false,
        }}
        initialRouteName = {'GPS'}
        >
            <StackScreens.Screen name='GPS' component={GPS}
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
                }
            }
            />
            <StackScreens.Screen name='Login' component={Login}
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
                }
            }
            />
            <StackScreens.Screen name='Register' component={Register}
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
                }
            }
            />
        </StackScreens.Navigator>
    );
}

export default GPSStack;