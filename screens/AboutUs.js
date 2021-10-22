import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutUs = ()=> {
    return(
        <View
        style={styles.textContainer}
        >
            <Text
            style={styles.text}
            >The main purpose of the GPS Tracking Application is to help the community when they face an
            unavoidable emergency. By using this application they can receive help after an accident. In addition,
            the system makes for a user -friendly system where users can use it easily because the in -app system
            is easy to understand and requires minimal training to take advantage of the app. The app can also use
            it as a map to guide themselves to locations they have never visited before. Easier -to -use buttons and
            an understandable system in which the information is completed. With the information provided in the
            app, we hope the system can help people to stay calm in an emergency and use the app to guide them
            to facilities that can give them the help they need</Text>
        </View>
    );
}

export default AboutUs;

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    textContainer: {
        margin: 20,
    },
});