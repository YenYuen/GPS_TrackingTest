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
        langQ6();
        langA6();
        langQ7();
        langA7();
        langQ8();
        langA8();
        langQ9();
        langA9();
        langQ10();
        langA10();
        langQ11();
        langA11();
        
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

      const langQ7 = () => {
        if(language == 'english') {
            setLangQ7('How can I track my vehicle?');
        }
        else if(language == 'malay') {
            setLangQ7('Bagaimanakah saya boleh mengesan kenderaan saya?');
        }
        else if(language == 'chinese') {
            setLangQ7("如何追踪我的车辆？");
        }
        else if(language == 'tamil') {
            setLangQ7('எனது வாகனத்தை எவ்வாறு கண்காணிப்பது?');
        }
      }

      const langA7 = () => {
        if(language == 'english') {
            setLangA7('To track your vehicle, users can place an alert in the GPS page');
        }
        else if(language == 'malay') {
            setLangA7('Untuk menjejak kenderaan anda, pengguna boleh meletakkan amaran dalam halaman GPS');
        }
        else if(language == 'chinese') {
            setLangA7("要跟踪您的车辆，用户可以在 GPS 页面中放置警报");
        }
        else if(language == 'tamil') {
            setLangA7('உங்கள் வாகனத்தைக் கண்காணிக்க, பயனர்கள் ஜிபிஎஸ் பக்கத்தில் எச்சரிக்கையை வைக்கலாம்');
        }
      }

      const langQ8 = () => {
        if(language == 'english') {
            setLangQ8('What is the function of the Insurance page?');
        }
        else if(language == 'malay') {
            setLangQ8('Apakah fungsi halaman Insurans?');
        }
        else if(language == 'chinese') {
            setLangQ8("保险页面的功能是什么？");
        }
        else if(language == 'tamil') {
            setLangQ8('காப்பீட்டு பக்கத்தின் செயல்பாடு என்ன?');
        }
      }

      const langA8 = () => {
        if(language == 'english') {
            setLangA8('To track your vehicle, users can place an alert in the GPS page');
        }
        else if(language == 'malay') {
            setLangA8('Fungsi halaman Insurans dalam aplikasi ini adalah untuk menyediakan cara mudah untuk pengguna mengetahui tentang pakej insurans serta terus menghubungi syarikat insurans');
        }
        else if(language == 'chinese') {
            setLangA8("此应用中保险页面的作用是为用户提供一种简单的方式来了解保险套餐以及直接联系保险公司");
        }
        else if(language == 'tamil') {
            setLangA8('இந்த பயன்பாட்டில் உள்ள இன்சூரன்ஸ் பக்கத்தின் செயல்பாடானது, பயனர்கள் காப்பீட்டுத் தொகுப்பைப் பற்றியும், காப்பீட்டு நிறுவனத்தை நேரடியாகத் தொடர்புகொள்வதற்கும் எளிதான வழியை வழங்குவதாகும்.');
        }
      }

      const langQ9 = () => {
        if(language == 'english') {
            setLangQ9('What if I don\'t have any Insurance, will I still be able to use the application?');
        }
        else if(language == 'malay') {
            setLangQ9('Bagaimana jika saya tidak mempunyai sebarang Insurans, adakah saya masih boleh menggunakan aplikasi tersebut?');
        }
        else if(language == 'chinese') {
            setLangQ9("如果我没有任何保险，我还能使用该应用程序吗？");
        }
        else if(language == 'tamil') {
            setLangQ9('என்னிடம் இன்சூரன்ஸ் இல்லை என்றால், நான் இன்னும் விண்ணப்பத்தைப் பயன்படுத்த முடியுமா?');
        }
      }

      const langA9 = () => {
        if(language == 'english') {
            setLangA9('Yes, because the application has other functions that do not require insurance');
        }
        else if(language == 'malay') {
            setLangA9('Ya, kerana aplikasi mempunyai fungsi lain yang tidak memerlukan insurans');
        }
        else if(language == 'chinese') {
            setLangA9("是的，因为应用程序有其他不需要保险的功能");
        }
        else if(language == 'tamil') {
            setLangA9('ஆம், ஏனெனில் பயன்பாட்டில் காப்பீடு தேவையில்லாத பிற செயல்பாடுகள் உள்ளன');
        }
      }

      const langQ10 = () => {
        if(language == 'english') {
            setLangQ10('How to change my profile details in this application?');
        }
        else if(language == 'malay') {
            setLangQ10('Bagaimana untuk menukar butiran profil saya dalam aplikasi ini?');
        }
        else if(language == 'chinese') {
            setLangQ10("如何在此应用程序中更改我的个人资料详细信息？");
        }
        else if(language == 'tamil') {
            setLangQ10('இந்த பயன்பாட்டில் எனது சுயவிவர விவரங்களை எவ்வாறு மாற்றுவது?');
        }
      }

      const langA10 = () => {
        if(language == 'english') {
            setLangA10('The user can change their profile details by selecting Edit profile in the Profile tab');
        }
        else if(language == 'malay') {
            setLangA10('Pengguna boleh menukar butiran profil mereka dengan memilih Edit profil dalam tab Profil');
        }
        else if(language == 'chinese') {
            setLangA10("用户可以通过在“配置文件”选项卡中选择“编辑配置文件”来更改其配置文件详细信息");
        }
        else if(language == 'tamil') {
            setLangA10('சுயவிவரத் தாவலில் சுயவிவரத்தைத் திருத்து என்பதைத் தேர்ந்தெடுப்பதன் மூலம் பயனர் தனது சுயவிவர விவரங்களை மாற்றலாம்');
        }
      }

      const langQ11 = () => {
        if(language == 'english') {
            setLangQ11('Can I search for an intersection of streets and not by address?');
        }
        else if(language == 'malay') {
            setLangQ11('Bolehkah saya mencari persimpangan jalan dan bukan dengan alamat?');
        }
        else if(language == 'chinese') {
            setLangQ11("我可以搜索街道的交叉路口而不是按地址吗？");
        }
        else if(language == 'tamil') {
            setLangQ11('முகவரி மூலம் அல்லாமல் தெருக்களின் குறுக்குவெட்டைத் தேடலாமா?');
        }
      }

      const langA11 = () => {
        if(language == 'english') {
            setLangA11('Yes, in the GPS search bar, entering the street name or number of streets will work as the application will be using the Google map API');
        }
        else if(language == 'malay') {
            setLangA11('Ya, dalam bar carian GPS, memasukkan nama jalan atau bilangan jalan akan berfungsi kerana aplikasi akan menggunakan API peta Google');
        }
        else if(language == 'chinese') {
            setLangA11("是的，在 GPS 搜索栏中，输入街道名称或街道数量将起作用，因为该应用程序将使用 Google 地图 API");
        }
        else if(language == 'tamil') {
            setLangA11('ஆம், ஜிபிஎஸ் தேடல் பட்டியில், தெருவின் பெயர் அல்லது தெருக்களின் எண்ணிக்கையை உள்ளிடுவது வேலை செய்யும், ஏனெனில் பயன்பாடு Google வரைபட API ஐப் பயன்படுத்தும்');
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
            question: langq7,
            answer: langa7,
        },
        {
            id: 'f8',
            question: langq8,
            answer: langa8,
        },
        {
            id: 'f9',
            question: langq9,
            answer: langa9,
        },
        {
            id: 'f10',
            question: langq10,
            answer: langa10,
        },
        {
            id: 'f11',
            question: langq11,
            answer: langa11,
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