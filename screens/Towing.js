import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import { icon, image } from '../constants';

const TowingData = [
    {
        id: 'no1',
        title: 'ZURICH',
        number: '1-300-88-6222'
    },
    {
        id: 'no2',
        title: 'ALLIANZ',
        number: '1 800 22 5542',
    },
];

const renderTowingData = ()=> {
    const renderItem =({item}) => {
        const displayNumber = () => {
            var finalNumber;
            if(item.number.substring(0,2) == '03'){
                finalNumber = item.number.slice(0,2) + '-' + item.number.slice(2); 
            }
            else {
                finalNumber = item.number
            }
            return finalNumber;
        }

        return(
            <TouchableOpacity
            style={styles.TowingContainer}
            onPress={()=>{Linking.openURL(item.number)}}
            >
                <View
                style={styles.Arrow}
                >
                    <Image
                    style={styles.Arrow}
                    source={image.Arrow}
                    />
                </View>
                <View
                style={styles.DetailBox}
                >
                    <Text
                    style={styles.TitleStyle}
                    >{item.title}</Text>
                    <Text
                    style={styles.NumberStyle}
                    >{displayNumber()}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <SafeAreaView>
            <FlatList
            data={TowingData}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            />
        </SafeAreaView>
    );
}
const Towing = () => {
    return(
        <SafeAreaView>
            {renderTowingData()}
        </SafeAreaView>
    )
}

export default Towing;

const styles = StyleSheet.create({
    TowingContainer:{
        backgroundColor: '#FFFFFF',
            flexDirection:'row',
        },
    ArrowBox:{
        height: 100,
        justifyContent: 'center',
        aliganItems: 'center',
        paddingLeft: 15,
    },
    DetailBox: {
        paddingLeft: 15,
        justifyContent:'space-around',
    },
    Arrow: {
        height: 30,
        width: 30,
    },
    TitleStyle: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#000000',
    },
    NumberStyle: {
        fomtSize: 30,
        color: '#000000',
    },
    
})