import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import { icon, image } from '../constants';

const HotlinesData = [
    {
        id: 'hl1',
        title: 'test',
        number: '123456',
    },
    {
        id: 'hl2',
        title: 'test',
        number: '03123456',
    },
];

const renderHotlineData = () => {
    const renderItem = ({item}) => {
        const displayNumber = () => {
            var finalNumber;
            if(item.number.substring(0,2) == '03') {
                finalNumber = item.number.slice(0,2) + '-' + item.number.slice(2);
            }
            else {
                finalNumber = item.number
            }
            return finalNumber;
        }

        return(
            <TouchableOpacity
            style={styles.HotlineContainer}
            onPress={() => {Linking.openURL(item.number)}}
            >
                <View
                style={styles.ArrowBox}
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
            data={HotlinesData}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            />
        </SafeAreaView>
    );
}

const Hotlines = () => {
    return(
        <SafeAreaView>
            {renderHotlineData()}
        </SafeAreaView>
    );
}

export default Hotlines;

const styles = StyleSheet.create({
    HotlineContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    ArrowBox: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
    },
    DetailBox: {
        paddingLeft: 15,
        justifyContent: 'space-around',
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
        fontSize: 30,
        color: '#000000',
    },
});

