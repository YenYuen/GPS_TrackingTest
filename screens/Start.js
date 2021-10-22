import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Dimensions, SafeAreaView, Image, Alert } from 'react-native';
import { image, icon } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';

const Start = ({navigation}) => {

  useEffect(() => {
    getLanguage();
  });

  const saveLanguage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('language', jsonValue);
    }
    catch(e) {
      console.log(e);
    }
  }

  const initialiseEnglish = async () => {
    try {
      const jsonValue = JSON.stringify('english');
      await AsyncStorage.setItem('language', jsonValue);
    } catch (e) {
      console.log(e);
    }
  }
  
  const [ language, setLanguage ] = useState('');
  
  const getLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('language');
      if(value !== null) {
        setLanguage(JSON.parse(value));
        saveLanguage(JSON.parse(value));
      }
      else{
        initialiseEnglish();
      }
      // Alert.alert(language);
    } catch(e) {
      console.log(e);
    }
  }

    const navigateToHome = () => {
      navigation.navigate('Tabs');
    }

    function loading() {
      setTimeout(navigateToHome,10);

      return(
        <View>
          <Image
          style = {styles.logo}
          source = {image.app_Logo}
          />
        </View>
      );
    }

    

    return(
        <SafeAreaView
        style = {styles.logoContainer}
        >
          {loading()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.4,
  },
  logoContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
});

export default Start;