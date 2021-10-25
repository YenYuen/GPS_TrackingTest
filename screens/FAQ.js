import React, { useEffect, useState } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import { icon, image } from '../constants'
import AsyncStorage from '@react-native-async-storage/async-storage';


const renderFAQ = () => {

    useEffect(() => {
        getLanguage();
        langQ1();
        langA1();
        langQ2();
        langA2();
        langQ3();
        langA3();
        langQ4();
        langA4();
        langQ5();
        langA5();
        // langQ6();
        // langA6();
        // langQ7();
        // langA7();
        // langQ8();
        // langA8();
        // langQ9();
        // langA9();
        // langQ10();
        // langA10();
        // langQ11();
        // langA11();
        
    });

    const [ langq1, setLangQ1 ] = useState('');

    const [ langq2, setLangQ2 ] = useState('');

    const [ langq3, setLangQ3 ] = useState('');

    const [ langq4, setLangQ4 ] = useState('');

    const [ langq5, setLangQ5 ] = useState('');

    const [ langq6, setLangQ6 ] = useState('');

    const [ langq7, setLangQ7 ] = useState('');

    const [ langq8, setLangQ8 ] = useState('');

    const [ langq9, setLangQ9 ] = useState('');

    const [ langq10, setLangQ10 ] = useState('');

    const [ langq11, setLangQ11 ] = useState('');

    const [ langa1, setLangA1 ] = useState('');

    const [ langa2, setLangA2 ] = useState('');
    
    const [ langa3, setLangA3 ] = useState('');

    const [ langa4, setLangA4 ] = useState('');

    const [ langa5, setLangA5 ] = useState('');

    const [ langa6, setLangA6 ] = useState('');

    const [ langa7, setLangA7 ] = useState('');

    const [ langa8, setLangA8 ] = useState('');

    const [ langa9, setLangA9 ] = useState('');

    const [ langa10, setLangA10 ] = useState('');

    const [ langa11, setLangA11 ] = useState('');

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

    const langQ1 = () => {
        if(language == 'english') {
            setLangQ1('What is GPS Tracking Application?');
        }
        else if(language == 'malay') {
            setLangQ1('Apa itu Aplikasi Penjejakan GPS?');
        }
        else if(language == 'chinese') {
            setLangQ1("什么是 GPS 跟踪应用程序？");
        }
        else if(language == 'tamil') {
            setLangQ1('ஜிபிஎஸ் கண்காணிப்பு பயன்பாடு என்றால் என்ன?');
        }
      }

      const langA1 = () => {
        if(language == 'english') {
            setLangA1('GPS tracking allows the user to find the location in the easiest way and also helps the user to know the place');
        }
        else if(language == 'malay') {
            setLangA1('Penjejakan GPS membolehkan pengguna mencari lokasi dengan cara yang paling mudah dan turut membantu pengguna mengetahui tempat tersebut');
        }
        else if(language == 'chinese') {
            setLangA1("GPS 跟踪使用户能够以最简单的方式找到位置，并帮助用户了解该地点");
        }
        else if(language == 'tamil') {
            setLangA1('ஜிபிஎஸ் டிராக்கிங் பயனர் இருப்பிடத்தை மிக சுலபமான வழியில் கண்டுபிடிக்க அனுமதிக்கிறது மேலும் பயனர் இடத்தை அறிய உதவுகிறது');
        }
      }

      const langQ2 = () => {
        if(language == 'english') {
            setLangQ2('Who is the developer of this application?');
        }
        else if(language == 'malay') {
            setLangQ2('Siapa pembangun aplikasi ini?');
        }
        else if(language == 'chinese') {
            setLangQ2("谁是这个应用程序的开发者？");
        }
        else if(language == 'tamil') {
            setLangQ2('இந்த பயன்பாட்டை உருவாக்கியவர் யார்?');
        }
      }

      const langA2 = () => {
        if(language == 'english') {
            setLangA2('The developer of this application is the programmers in Yata Jasamedia Sdn Bhd');
        }
        else if(language == 'malay') {
            setLangA2('Pembangun aplikasi ini adalah pengaturcara di Yata Jasamedia Sdn Bhd');
        }
        else if(language == 'chinese') {
            setLangA2("此应用程序的开发者是 Yata Jasamedia Sdn Bhd 的程序员");
        }
        else if(language == 'tamil') {
            setLangA2('இந்த அப்ளிகேஷனின் டெவலப்பர் யாதா ஜசமீடியா எஸ்டிஎன் பிஎச்டியில் உள்ள புரோகிராமர்கள்');
        }
      }

      const langQ3 = () => {
        if(language == 'english') {
            setLangQ3('Who is the user of the GPS Tracking app?');
        }
        else if(language == 'malay') {
            setLangQ3('Siapa pengguna aplikasi Penjejakan GPS?');
        }
        else if(language == 'chinese') {
            setLangQ3("谁是 GPS 跟踪应用程序的用户？");
        }
        else if(language == 'tamil') {
            setLangQ3('GPS கண்காணிப்பு செயலியின் பயனர் யார்?');
        }
      }

      const langA3 = () => {
        if(language == 'english') {
            setLangA3('The users who registered for an account in this application');
        }
        else if(language == 'malay') {
            setLangA3('Pengguna yang mendaftar untuk akaun dalam aplikasi ini');
        }
        else if(language == 'chinese') {
            setLangA3("在此应用程序中注册帐户的用户");
        }
        else if(language == 'tamil') {
            setLangA3('இந்த பயன்பாட்டில் கணக்கு பதிவு செய்த பயனர்கள்');
        }
      }

      const langQ4 = () => {
        if(language == 'english') {
            setLangQ4('Do I have to pay for this application?');
        }
        else if(language == 'malay') {
            setLangQ4('Adakah saya perlu membayar permohonan ini?');
        }
        else if(language == 'chinese') {
            setLangQ4("我需要为此申请付费吗？");
        }
        else if(language == 'tamil') {
            setLangQ4('இந்த விண்ணப்பத்திற்கு நான் பணம் செலுத்த வேண்டுமா?');
        }
      }

      const langA4 = () => {
        if(language == 'english') {
            setLangA4('-');
        }
        else if(language == 'malay') {
            setLangA4('-');
        }
        else if(language == 'chinese') {
            setLangA4("-");
        }
        else if(language == 'tamil') {
            setLangA4('-');
        }
      }

      const langQ5 = () => {
        if(language == 'english') {
            setLangQ5('What are the processes needed to register an account?');
        }
        else if(language == 'malay') {
            setLangQ5('Apakah proses yang diperlukan untuk mendaftar akaun?');
        }
        else if(language == 'chinese') {
            setLangQ5("注册账号需要哪些流程？");
        }
        else if(language == 'tamil') {
            setLangQ5('கணக்கைப் பதிவு செய்ய என்ன செயல்முறைகள் தேவை?');
        }
      }

      const langA5 = () => {
        if(language == 'english') {
            setLangA5('The user needs to fill in personal informations such as name, age etc in the Login page');
        }
        else if(language == 'malay') {
            setLangA5('Pengguna perlu mengisi maklumat peribadi seperti nama, umur dan lain-lain dalam halaman Log Masuk');
        }
        else if(language == 'chinese') {
            setLangA5("用户需要在登录页面填写姓名、年龄等个人信息");
        }
        else if(language == 'tamil') {
            setLangA5('பயனர் உள்நுழைவு பக்கத்தில் பெயர், வயது போன்ற தனிப்பட்ட தகவல்களை நிரப்ப வேண்டும்');
        }
      }

      const langQ6 = () => {
        if(language == 'english') {
            setLangQ6('Can I search for any location using GPS?');
        }
        else if(language == 'malay') {
            setLangQ6('Bolehkah saya mencari lokasi menggunakan GPS?');
        }
        else if(language == 'chinese') {
            setLangQ6("我可以使用 GPS 搜索任何位置吗？");
        }
        else if(language == 'tamil') {
            setLangQ6('ஜிபிஎஸ் பயன்படுத்தி நான் எந்த இடத்தையும் தேட முடியுமா?');
        }
      }

      const langA6 = () => {
        if(language == 'english') {
            setLangA6('Any location is possible as long as it is included in the Google map API');
        }
        else if(language == 'malay') {
            setLangA6('Mana-mana lokasi boleh dilakukan asalkan ia disertakan dalam API peta Google');
        }
        else if(language == 'chinese') {
            setLangA6("只要包含在 Google 地图 API 中，任何位置都是可能的");
        }
        else if(language == 'tamil') {
            setLangA6('கூகுள் மேப் ஏபிஐயில் சேர்க்கப்படும் வரை எந்த இடமும் சாத்தியமாகும்');
        }
      }

    const FAQData = [
        {
            id: 'f1',
            question: langq1,
            answer: langa1,
        },
        {
            id: 'f2',
            question: langq2,
            answer: langa2,
        },
        {
            id: 'f3',
            question: langq3,
            answer: langa3,
        },
        {
            id: 'f4',
            question: langq4,
            answer: langa4,
        },
        {
            id: 'f5',
            question: langq5,
            answer: langa5,
        },
        {
            id: 'f6',
            question: langq6,
            answer: langa6,
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
        width: 25,
        height: 25,
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
        color: '#000000',
    },
    answer: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
    },
    imageContainer: {
        marginRight: 20,
    },
});