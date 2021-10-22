import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import { Insurance } from '.';
import { icon, image } from '../constants'

const FAQData = [
    {
        id: 'f1',
        question: 'What is GPS Tracking Application?',
        answer: 'GPS tracking allows the user to find the location in the easiest way and also helps the user to know the place',
    },
    {
        id: 'f2',
        question: 'Who is the developer of this application?',
        answer: 'The developer of this application is the programmers in Yata Jasamedia Sdn Bhd',
    },
    {
        id: 'f3',
        question: 'Who is the user of the GPS Tracking app?',
        answer: 'The users who registered for an account in this application',
    },
    {
        id: 'f4',
        question: 'Do I have to pay for this application?',
        answer: '-',
    },
    {
        id: 'f5',
        question: 'What are the processes needed to register an account?',
        answer: 'The user needs to fill in personal informations such as name, age etc in the Login page',
    },
    {
        id: 'f6',
        question: 'Can I search for any location using GPS?',
        answer: 'Any location is possible as long as it is included in the Google map API',
    },
    {
        id: 'f7',
        question: 'How can I track my vehicle?',
        answer: 'To track your vehicle, users can place an alert in the GPS page',
    },
    {
        id: 'f8',
        question: 'What is the function of the Insurance page?',
        answer: 'The funtion of the Insurance page in this application is to provide an easy way for users to know about the insurance package as well as directly contacting the insurance company',
    },
    {
        id: 'f9',
        question: 'What if I don\'t have any Insurance, will I still be able to use the application?',
        answer: 'Yes, because the application has other functions that do not require insurance',
    },
    {
        id: 'f10',
        question: 'How to change my profile details in this application?',
        answer: 'The user can change their profile details by selecting Edit profile in the Profile tab',
    },
    {
        id: 'f11',
        question: 'Can I search for an intersection of streets and not by address?',
        answer: 'Yes, in the GPS search bar, entering the street name or number of streets will work as the application will be using the Google map API',
    },
]

const renderFAQ = () => {
    const renderItem = ({item}) => {
        return(
            <View
            style={styles.Container}
            >
                <View
                style={styles.imageContainer}
                >
                    <Image
                    style={styles.image}
                    source={image.Arrow}
                    />
                </View>
                <View>
                    <Text
                    style={styles.question}
                    >{item.question}</Text>
                    <Text
                    style={styles.answer}
                    >{item.answer}</Text>
                </View>
            </View>
        );
    }

    return(
        <View>
            <FlatList
            data={FAQData}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            ></FlatList>
        </View>
    );
}

const FAQ = ()=> {
    return(
        <SafeAreaView>
            {renderFAQ()}
        </SafeAreaView>
    );
}

export default FAQ;

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30,
    },
    Container: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 5,
        paddingRight: 80,
        width: Dimensions.get('window').width,
    },
    question: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    answer: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageContainer: {
        marginRight: 20,
    },
});