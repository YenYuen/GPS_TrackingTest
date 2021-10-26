import { useNavigation } from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { icon, image } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderHomeNavigation = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getLanguage();
    langLocator();
    langHotlines();
    langRoadtax();
  });

  const [ langlocator, setLangLocator ] = useState('Locator');

const [ langhotlines, setLangHotlines ] = useState('Hotlines');

const [ langroadtax, setLangRoadtax ] = useState('Roadtax');

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

const langLocator = () => {
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
}

const langHotlines = () => {
  if(language == 'english') {
      setLangHotlines('Hotlines');
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
}

const langRoadtax = () => {
  if(language == 'english') {
      setLangRoadtax('Roadtax');
  }
  else if(language == 'malay') {
      setLangRoadtax('Roadtax');
  }
  else if(language == 'chinese') {
      setLangRoadtax("路稅");
  }
  else if(language == 'tamil') {
      setLangRoadtax('சாலை வரி');
  }
}

const HomeNav = [
  {
    id: 'h1',
    img: icon.Location,
    title: langlocator,
  },
  {
    id: 'h2',
    img: icon.Phone,
    title: langhotlines,
  },
  {
    id: 'h3',
    img: icon.Car,
    title: langroadtax,
  },
];

  const renderItem = ({item}) => {

    return(
      <View
      style={styles.HomeNavContainer}
      >
        <TouchableOpacity
        style = {styles.HomeNavStyle}
        onPress={() => {
          if(item.id == 'h1') {
            navigation.navigate('Locator');
          }
          else if(item.id == 'h2') {
            navigation.navigate('Hotlines');
          }
          else if(item.id == 'h3') {
            navigation.navigate('Roadtax');
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
      data={HomeNav}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

const Home = () => {

    return(
      <SafeAreaView>
        {renderHomeNavigation()}
      </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
  HomeNavStyle: {
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
  HomeNavContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navDescription: {
    marginTop: -20,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
});