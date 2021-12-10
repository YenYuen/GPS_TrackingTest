import React, { useEffect, useState } from 'react';
import { Button, Text, View, StyleSheet, Dimensions, SafeAreaView, Image, Alert } from 'react-native';
import { image, icon } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Start = ({navigation}) => {

  useEffect(() => {
    //clearAll();
    getLanguage();
    getLoginStatus();
  });

  clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      console.log(e);
    }
  
    console.log('Done.')
  }
  

  const saveLanguage = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('language', jsonValue);
    }
    catch(e) {
      console.log(e);
    }
  }

  const saveLoginStatus = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('login', jsonValue);
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

  const initialiseLogin = async () => {
    try {
      const jsonValue = JSON.stringify('false');
      await AsyncStorage.setItem('login', jsonValue);
    } catch (e) {
      console.log(e);
    }
  }
  
  const [ language, setLanguage ] = useState('');

  const [ loginStatus, setLoginStatus ] = useState('');
  
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
    } catch(e) {
      console.log(e);
    }
  }

  const getLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      if(value !== null) {
        setLoginStatus(JSON.parse(value));
        saveLoginStatus(JSON.parse(value));
      }
      else{
        initialiseLogin();
      }
    } catch(e) {
      console.log(e);
    }
  }

    const navigateToHome = () => {
      if(loginStatus == "false") {
        navigation.navigate('Login');
      }
      else {
        navigation.navigate('Tabs')
      }
    }

    function loading() {
      setTimeout(navigateToHome,10);

      return(
        <View>
          <Image
          style = {styles.logo}
          source = {image.Gojaze_Logo}
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
    width: 200,
    height: 200,
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