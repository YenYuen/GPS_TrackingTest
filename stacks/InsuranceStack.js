import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, GPS, Insurance, Profile } from '../screens'

const StackScreens = createNativeStackNavigator();

function InsuranceStack() {
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
                    }, 
                    headerTitleAlign: 'center',
                }
            }
            />
        </StackScreens.Navigator>
    );
}

export default InsuranceStack;