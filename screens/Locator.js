import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { icon, image } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';



  const renderLocatorNavigation = () => {
    const navigation = useNavigation();

    useEffect(() => {
      getLanguage();
      langPoliceStation();
      langClinic();
      langHospital();
      langTyreShop();
      langWorkshop();
      langWindshieldServices();
      langGasStation();
      langMechanic();
      langMotorcycleShop();
      langBicycleShop();
      langFireDepartment();
    });

  const [ langpolicestation, setLangPoliceStation ] = useState('Police\nStation');
  
  const [ langclinic, setLangClinic ] = useState('Clinic');
  
  const [ langhospital, setLangHospital ] = useState('Hospital');
  const [ langtyreshop, setLangTyreShop ] = useState('Tyre Shop');
  const [ langworkshop, setLangWorkshop ] = useState('Workshop');
  const [ langwindshieldservices, setLangWindshieldServices ] = useState('Windshield\nServices');
  const [ langgasstation, setLangGasStation ] = useState('Gas\nStation');
  const [ langmechanic, setLangMechanic ] = useState('Mechanic');
  const [ langmotorcycleshop, setLangMotorcycleShop ] = useState('Motorcycle\nShop');
  const [ langbicycleshop, setLangBicycleShop ] = useState('Bicycle\nShop');
  const [ langfiredepartment, setLangFireDepartment ] = useState('Fire\nDepartment');

  
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
  
  const langPoliceStation = () => {
    let policestation;
    if(language == 'english') {
        setLangPoliceStation('Police\nStation');
    }
    else if(language == 'malay') {
        setLangPoliceStation('Balai\nPolis');
    }
    else if(language == 'chinese') {
        setLangPoliceStation("警察局\n");
    }
    else if(language == 'tamil') {
        setLangPoliceStation('காவல்\nநிலையம்');
    }
    return(policestation);
  }
  
  const langClinic = () => {
    let clinic;
    if(language == 'english') {
        setLangClinic('Clinic\n');
    }
    else if(language == 'malay') {
        setLangClinic('Klinik\n');
    }
    else if(language == 'chinese') {
        setLangClinic("诊所\n");
    }
    else if(language == 'tamil') {
        setLangClinic('சிகிச்சையகம்');
    }
    return(clinic);
  }

  const langHospital = () => {
    let hospital;
    if(language == 'english') {
        setLangHospital('Hospital\n');
    }
    else if(language == 'malay') {
        setLangHospital('Hospital\n');
    }
    else if(language == 'chinese') {
        setLangHospital("医院\n");
    }
    else if(language == 'tamil') {
        setLangHospital('மருத்துவமனை\n');
    }
    return(hospital);
  }

  const langTyreShop = () => {
    let tyreshop;
    if(language == 'english') {
        setLangTyreShop('Tyre\nShop');
    }
    else if(language == 'malay') {
        setLangTyreShop('Kedai\ntayar');
    }
    else if(language == 'chinese') {
        setLangTyreShop("轮胎店\n");
    }
    else if(language == 'tamil') {
        setLangTyreShop('டயர்\nகடை');
    }
    return(tyreshop);
  }

  const langWorkshop = () => {
    let workshop;
    if(language == 'english') {
        setLangWorkshop('Workshop\n');
    }
    else if(language == 'malay') {
        setLangWorkshop('Bengkel\n');
    }
    else if(language == 'chinese') {
        setLangWorkshop("作坊\n");
    }
    else if(language == 'tamil') {
        setLangWorkshop('பணிமனை\n');
    }
    return(workshop);
  }

  const langWindshieldServices = () => {
    let windshieldservices;
    if(language == 'english') {
        setLangWindshieldServices('Windshield\nServices');
    }
    else if(language == 'malay') {
        setLangWindshieldServices('Perkhidmatan\ncermin depan');
    }
    else if(language == 'chinese') {
        setLangWindshieldServices("挡风玻璃服务\n");
    }
    else if(language == 'tamil') {
        setLangWindshieldServices('விண்ட்ஷீல்ட்\nசேவைகள்');
    }
    return(windshieldservices);
  }

  const langGasStation = () => {
    let gasstation;
    if(language == 'english') {
        setLangGasStation('Gas\nStation');
    }
    else if(language == 'malay') {
        setLangGasStation('Stesen\nminyak');
    }
    else if(language == 'chinese') {
        setLangGasStation("加油站\n");
    }
    else if(language == 'tamil') {
        setLangGasStation('எரிவாயு\nநிலையம்');
    }
    return(gasstation);
  }

  const langMechanic = () => {
    let mechanic;
    if(language == 'english') {
        setLangMechanic('Mechanic\n');
    }
    else if(language == 'malay') {
        setLangMechanic('Mekanik\n');
    }
    else if(language == 'chinese') {
        setLangMechanic("机械\n");
    }
    else if(language == 'tamil') {
        setLangMechanic('பொறிமுறையாளர்\n');
    }
    return(mechanic);
  }

  const langMotorcycleShop = () => {
    let motorcycleshop;
    if(language == 'english') {
        setLangMotorcycleShop('Motorcycle\nShop');
    }
    else if(language == 'malay') {
        setLangMotorcycleShop('Kedai\nmotosikal');
    }
    else if(language == 'chinese') {
        setLangMotorcycleShop("摩托车店\n");
    }
    else if(language == 'tamil') {
        setLangMotorcycleShop('மோட்டார்\nசைக்கிள் கடை');
    }
    return(motorcycleshop);
  }

  const langBicycleShop = () => {
    let bicycleshop;
    if(language == 'english') {
        setLangBicycleShop('Bicycle\nShop');
    }
    else if(language == 'malay') {
        setLangBicycleShop('kedai\nbasikal');
    }
    else if(language == 'chinese') {
        setLangBicycleShop("自行车店\n");
    }
    else if(language == 'tamil') {
        setLangBicycleShop('சைக்கிள்\nகடை');
    }
    return(bicycleshop);
  }

  const langFireDepartment = () => {
    let gasstation;
    if(language == 'english') {
        setLangFireDepartment('Fire\nDepartment');
    }
    else if(language == 'malay') {
        setLangFireDepartment('Jabatan\nBomba');
    }
    else if(language == 'chinese') {
        setLangFireDepartment("消防部门\n");
    }
    else if(language == 'tamil') {
        setLangFireDepartment('தீயணைப்பு\nதுறை');
    }
    return(gasstation);
  }

  const LocatorNav = [
    {
      id: 'l1',
      img: icon.Police,
      title: langpolicestation,
    },
    {
      id: 'l2',
      img: icon.Clinic,
      title: langclinic,
    },
    {
      id: 'l3',
      img: icon.Hospital,
      title: langhospital,
    },
    {
      id: 'l4',
      img: icon.Workshop,
      title: langtyreshop,
    },
    {
      id: 'l5',
      img: icon.PurpleWorkshop,
      title: langworkshop,
    },
    {
      id: 'l6',
      img: icon.Battery,
      title: langwindshieldservices,
    },
    {
      id: 'l7',
      img: icon.GasStation,
      title: langgasstation,
    },
    {
      id: 'l8',
      img: icon.Tools,
      title: langmechanic,
    },
    {
      id: 'l9',
      img: icon.Motorcycle,
      title: langmotorcycleshop,
    },
    {
      id: 'l10',
      img: icon.BicycleShop,
      title: langbicycleshop,
    },
    {
      id: 'l11',
      img: icon.FireTruck,
      title: langfiredepartment,
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
              navigation.navigate('GPS', { screen: 'GPS' });
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
        numColumns={4}
        columnWrapperStyle={styles.row}
        data={LocatorNav}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }

const Locator = () => {
    return(
        <SafeAreaView>
          {renderLocatorNavigation()}
        </SafeAreaView>
      );
}

export default Locator;

const styles = StyleSheet.create({
    HomeNavStyle: {
      width: Dimensions.get('window').width * 0.2,
      height: Dimensions.get('window').width * 0.2,
      borderWidth: 7,
      borderColor: '#868686',
      borderRadius: Dimensions.get('window').width * 0.1,
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
      height: 200,
      alignItems: 'center',
    },
    navDescription: {
      marginTop: -20,
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
      color: '#000000'
    },
  });