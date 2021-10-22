import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { icon } from '../constants';

const InsuranceNav = [
  {
    id: 'I1',
    img: icon.Umbrella,
    title: 'Insurance\nStatus',
  },
  {
    id: 'I2',
    img: icon.Phone,
    title: 'Contact\nInsurance',
  },
  {
    id: 'I3',
    img: icon.Tow,
    title: 'Towing',
  },
];

const renderHomeNavigation = () => {
  const renderItem = ({item}) => {
    return(
      <View
      style={styles.InsuranceNavContainer}
      >
        <TouchableOpacity
        style = {styles.InsuranceNavStyle}
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
  },
});