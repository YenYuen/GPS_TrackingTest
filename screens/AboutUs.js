import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutUs = ()=> {

    useEffect(() => {
        getLanguage();
        langContent();
    });

    const [ langcontent, setLangContent ] = useState('');

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

const langContent = () => {
    if(language == 'english') {
        setLangContent('The main purpose of the GPS Tracking Application is to help the community when they face an unavoidable emergency. By using this application they can receive help after an accident. In addition, the system makes for a user -friendly system where users can use it easily because the in -app system is easy to understand and requires minimal training to take advantage of the app. The app can also use it as a map to guide themselves to locations they have never visited before. Easier -to -use buttons and an understandable system in which the information is completed. With the information provided in the app, we hope the system can help people to stay calm in an emergency and use the app to guide them to facilities that can give them the help they need');
    }
    else if(language == 'malay') {
        setLangContent('Tujuan utama Aplikasi Penjejakan GPS adalah untuk membantu masyarakat ketika mereka menghadapi kecemasan yang tidak dapat dielakkan. Dengan menggunakan aplikasi ini mereka dapat menerima pertolongan setelah berlakunya kemalangan. Di samping itu, sistem ini menjadikan sistem mesra pengguna di mana pengguna dapat menggunakannya dengan mudah kerana sistem dalam aplikasi mudah difahami dan memerlukan latihan minimum untuk memanfaatkan aplikasi. Aplikasi ini juga dapat menggunakannya sebagai peta untuk membimbing diri ke lokasi yang belum pernah mereka kunjungi sebelumnya. Butang yang lebih senang digunakan dan sistem yang dapat difahami di mana maklumat itu dilengkapkan. Dengan maklumat yang diberikan dalam aplikasi, kami berharap sistem dapat membantu orang untuk tetap tenang dalam keadaan darurat dan menggunakan aplikasi untuk membimbing mereka ke kemudahan yang dapat memberi mereka bantuan yang mereka perlukan');
    }
    else if(language == 'chinese') {
        setLangContent("GPS 跟踪应用程序的主要目的是在社区面临不可避免的紧急情况时为他们提供帮助。通过使用此应用程序，他们可以在发生事故后获得帮助。此外，该系统是一个用户友好的系统，用户可以轻松使用它，因为应用程序内系统易于理解，只需最少的培训即可利用该应用程序。该应用程序还可以将其用作地图，引导自己前往以前从未去过的地方。更易于使用的按钮和可在其中完成信息的易于理解的系统。通过应用程序提供的信息，我们希望该系统能够帮助人们在紧急情况下保持冷静，并使用该应用程序引导他们前往可以为他们提供所需帮助的设施");
    }
    else if(language == 'tamil') {
        setLangContent('ஜிபிஎஸ் டிராக்கிங் அப்ளிகேஷனின் முக்கிய நோக்கம் அவர்கள் தவிர்க்க முடியாத அவசர நிலையை எதிர்கொள்ளும்போது சமூகத்திற்கு உதவுவதாகும். இந்த பயன்பாட்டைப் பயன்படுத்துவதன் மூலம் அவர்கள் விபத்துக்குப் பிறகு உதவியைப் பெறலாம். கூடுதலாக, கணினி ஒரு பயனர் நட்பு அமைப்பை உருவாக்குகிறது, அங்கு பயனர்கள் எளிதாகப் பயன்படுத்த முடியும், ஏனெனில் இன் -ஆப் அமைப்பு புரிந்துகொள்ள எளிதானது மற்றும் பயன்பாட்டைப் பயன்படுத்த குறைந்தபட்ச பயிற்சி தேவைப்படுகிறது. அவர்கள் இதுவரை சென்றிராத இடங்களுக்கு தங்களை வழிகாட்ட இந்த ஆப் இதை ஒரு வரைபடமாகவும் பயன்படுத்தலாம். சுலபமாக பயன்படுத்தக்கூடிய பொத்தான்கள் மற்றும் புரிந்துகொள்ளக்கூடிய அமைப்பு இதில் தகவல் நிறைவடைகிறது. பயன்பாட்டில் வழங்கப்பட்ட தகவல்களுடன், அவசரகாலத்தில் அமைதியாக இருக்க இந்த அமைப்பு மக்களுக்கு உதவும் என்று நம்புகிறோம், மேலும் அவர்களுக்கு தேவையான உதவியை வழங்கக்கூடிய வசதிகளுக்கு வழிகாட்ட பயன்பாட்டைப் பயன்படுத்துங்கள்');
    }
  }

    return(
        <View
        style={styles.textContainer}
        >
            <Text
            style={styles.text}
            >{langcontent}</Text>
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