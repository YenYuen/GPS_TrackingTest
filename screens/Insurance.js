import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { icon } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const renderHomeNavigation = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getLanguage();
    langInsuranceStatus();
    langClaimInsurance();
    langTowing();
  });

  const [ langinsurancestatus, setLangInsuranceStatus ] = useState('');

  const [ langclaiminsurance, setLangClaimInsurance ] = useState('');

  const [ langtowing, setLangTowing ] = useState('');

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

  const langInsuranceStatus = () => {
    if(language == 'english') {
        setLangInsuranceStatus('Insurance\nStatus');
    }
    else if(language == 'malay') {
        setLangInsuranceStatus('Status\nInsurans');
    }
    else if(language == 'chinese') {
        setLangInsuranceStatus("保险状况");
    }
    else if(language == 'tamil') {
        setLangInsuranceStatus('காப்பீட்டு\nநிலை');
    }
  }

  const langClaimInsurance = () => {
    if(language == 'english') {
        setLangClaimInsurance('Claim\nInsurance');
    }
    else if(language == 'malay') {
        setLangClaimInsurance('Tuntut\nInsurans');
    }
    else if(language == 'chinese') {
        setLangClaimInsurance("理赔保险");
    }
    else if(language == 'tamil') {
        setLangClaimInsurance('காப்பீடு\nகோருங்கள்');
    }
  }

  const langTowing = () => {
    if(language == 'english') {
        setLangTowing('Towing');
    }
    else if(language == 'malay') {
        setLangTowing('Menunda');
    }
    else if(language == 'chinese') {
        setLangTowing("拖带");
    }
    else if(language == 'tamil') {
        setLangTowing('இழுத்தல்');
    }
  }

  const InsuranceNav = [
    {
      id: 'I1',
      img: icon.Umbrella,
      title: langinsurancestatus,
    },
    {
      id: 'I2',
      img: icon.Phone,
      title: langclaiminsurance,
    },
    {
      id: 'I3',
      img: icon.Tow,
      title: langtowing,
    },
  ];

  const renderItem = ({item}) => {
    return(
      <View
      style={styles.InsuranceNavContainer}
      >
        <TouchableOpacity
        style = {styles.InsuranceNavStyle}
        onPress={() => {
            if(item.id == 'I1') {
              navigation.navigate('InsuranceStatus');
            }
            else if(item.id == 'I2') {
              navigation.navigate('ClaimInsurance');
            }
            else if(item.id == 'I3') {
              navigation.navigate('Towing');
            }
          }
        }
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
      data={InsuranceNav}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}

const Insurance = () => {
    return(
      <SafeAreaView>
        {renderHomeNavigation()}
      </SafeAreaView>
    );
};

export default Insurance;

const styles = StyleSheet.create({
  InsuranceNavStyle: {
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
  InsuranceNavContainer: {
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