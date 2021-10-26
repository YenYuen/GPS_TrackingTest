import { useNavigation } from '@react-navigation/core';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

const GPS = () => {
    const navigation = useNavigation();
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>GPS</Text>
        <Button
        title='Login'
        onPress={() => {navigation.navigate('Login')}}
        />
        <Button
        title='Register'
        onPress={() => {navigation.navigate('Register')}}
        />
      </View>
    );
}

export default GPS;