import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const languageChoice = [
    {
        id: 'english',
        name: 'English',
        value: 'english',
    },
    {
        id: 'malay',
        name: 'Malay',
        value: 'malay',
    },
    {
        id: 'chinese',
        name: '简体中文',
        value: 'chinese',
    },
    {
        id: 'tamil',
        name: 'தமிழ்',
        value: 'tamil'
    },
];

const renderSettingsNav = () => {

    const saveLanguage = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('language', jsonValue);
          RNRestart.Restart();
        }
        catch(e) {
          console.log(e);
        }
      }

    renderItem = ({item}) => {
        return(
            <TouchableOpacity
            style={styles.languageContainer}
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
            data={languageChoice}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            />
        </SafeAreaView>
    );
}

const ChangeLanguage = ()=> {
    return(
        <SafeAreaView>
            {renderSettingsNav()}
        </SafeAreaView>
    );
}

export default ChangeLanguage;

const styles = StyleSheet.create({
    languageContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100.
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000000',
    },
});