import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { icon, image } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderHomeNavigation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getLanguage();
    langSettings();
    langEditProfile();
    langFAQ();
    langAboutUs();
  });

  const [ langsettings, setLangSettings ] = useState('');

  const [ langeditprofile, setLangEditProfile ] = useState('');

  const [ langfaq, setLangFAQ ] = useState('');

  const [ langaboutus, setLangAboutUs ] = useState('');

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
        setLangAboutUs('எங்களை\nபற்றி');
    }
  }

  const ProfileNav = [
    {
      id: 'p1',
      img: icon.Gear,
      title: langsettings,
    },
    {
      id: 'p2',
      img: icon.PurpleHuman,
      title: langeditprofile,
    },
    {
      id: 'p3',
      img: icon.FAQ,
      title: langfaq,
    },
    {
      id: 'p4',
      img: icon.I,
      title: langaboutus,
    },
  ];

  const renderItem = ({item}) => {
    return(
      <View
      style={styles.ProfileNavContainer}
      >
        <TouchableOpacity
        style = {styles.ProfileNavStyle}
        onPress={() => {
          if(item.id == 'p1') {
            navigation.navigate('Settings');
          }
          else if(item.id == 'p2') {
            navigation.navigate('EditProfile');
          }
          else if(item.id == 'p3') {
            navigation.navigate('FAQ');
          }
          else if(item.id == 'p4') {
            navigation.navigate('AboutUs');
          }
        }}
        >
          <Image
          source = {item.img}
          />
        </TouchableOpacity>
        <Text
        style={styles.navDescription}
        >{item.title}</Text>
      </View>
    );
  }

  return(
    <View>
      <FlatList
      numColumns={2}
      columnWrapperStyle={styles.row}
      data={ProfileNav}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

const Profile = () => {
    return(
      <SafeAreaView>
        {renderHomeNavigation()}
      </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
  ProfileNavStyle: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    borderWidth: 7,
    borderColor: '#868686',
    borderRadius: Dimensions.get('window').width * 0.15,
    margin: Dimensions.get('window').width * 0.1,
    shadowOffset: '2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 25,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  ProfileNavContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navDescription: {
    marginTop: -20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
});