import React, { useEffect, useState } from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PrivacyPolicy = ()=> {

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
        setLangContent('You will not assist or permit any third party to pass information to Google that Google could use or recognize as personally identifiable information. You will have and abide by an appropriate Privacy Policy and will comply with all applicable laws, policies and regulations relating to the collection of information from Visitors. You must post a Privacy Policy and that Privacy Policy must provide notice of Your use of cookies that are used to collect data.You must disclose the use of Google Analytics, and how it collects and processes data. This can be done by displaying a prominent link to the site .You will use commercially reasonable efforts to ensure that a Visitor is provided with clear and comprehensive information about, and consents to, the storing and accessing of cookies or other information on the Visitors device where such activity occurs in connection with the Service and where providing such information and obtaining such consent is required by law.Protecting the privacy of our members is a vital part of our ethics.Trying to conceive is a very private matter, for both professional or personal reasons. We could not permit the presence of third party advertisers or affiliates who could follow and compromise the privacy.                       of our members. Similarly, our operation procedures and our community have all been enhanced to respect the privacy and security of our members. We also do not sell or trade the data collected by our members. This is a key part of our vision and ethics.It is important for users to know ,understand the information of the GoJaze application ,and know how to control this application. We will explain it in detail in our updated GoJaze’s Privacy Policy and users can review it at the keypoint at this page.');
    }
    else if(language == 'malay') {
        setLangContent('Anda tidak akan membantu atau membenarkan mana-mana pihak ketiga untuk menyampaikan maklumat kepada Google yang boleh digunakan atau dikenali oleh Google sebagai maklumat yang boleh dikenal pasti secara peribadi. Anda akan mempunyai dan mematuhi Dasar Privasi yang sesuai dan akan mematuhi semua undang-undang, dasar dan peraturan yang berkaitan dengan pengumpulan maklumat daripada Pelawat. Anda mesti menyiarkan Dasar Privasi dan Dasar Privasi itu mesti memberikan notis tentang penggunaan kuki Anda yang digunakan untuk mengumpul data. Anda mesti mendedahkan penggunaan Google Analitis dan cara ia mengumpul dan memproses data. Ini boleh dilakukan dengan memaparkan pautan yang menonjol ke tapak .Anda akan menggunakan usaha yang munasabah secara komersil untuk memastikan bahawa Pelawat diberikan maklumat yang jelas dan komprehensif tentang, dan bersetuju dengan, menyimpan dan mengakses kuki atau maklumat lain pada peranti Pelawat di mana aktiviti sedemikian berlaku berkaitan dengan Perkhidmatan dan di mana memberikan maklumat sedemikian dan mendapatkan persetujuan sedemikian diperlukan oleh undang-undang.Melindungi privasi ahli kami adalah bahagian penting dalam etika kami. Mencuba untuk hamil adalah perkara yang sangat peribadi, atas sebab profesional atau peribadi. Kami tidak boleh membenarkan kehadiran pengiklan atau ahli gabungan pihak ketiga yang boleh mengikuti dan menjejaskan privasi ahli kami. Begitu juga, prosedur operasi kami dan komuniti kami semuanya telah berlaku dipertingkatkan untuk menghormati privasi dan keselamatan ahli kami. Kami juga tidak menjual atau berniaga data yang dikumpul oleh ahli kami. Ini adalah bahagian penting dalam visi dan etika kami. Adalah penting untuk pengguna mengetahui, memahami maklumat aplikasi GoJaze, dan mengetahui cara mengawal aplikasi ini. Kami akan menerangkannya secara terperinci dalam Dasar Privasi GoJaze kami yang dikemas kini dan pengguna boleh menyemaknya di titik utama di halaman ini.');
    }
    else if(language == 'chinese') {
        setLangContent("您不会协助或允许任何第三方将信息传递给谷歌，谷歌可以使用或识别为个人身份信息。您将拥有并遵守适当的隐私政策，并将遵守与收集访客信息有关的所有适用法律、政策和法规。您必须发布隐私政策，并且该隐私政策必须提供关于您使用用于收集数据的 cookie 的通知。您必须披露 Google Analytics 的使用以及它如何收集和处理数据。这可以通过显示指向该网站的显着链接来实现。您将尽商业上合理的努力来确保向访问者提供清晰、全面的信息，并同意在访问者的设备上存储和访问 cookie 或其他信息发生与服务相关的此类活动，以及法律要求提供此类信息并获得此类同意的情况.保护我们会员的隐私是我们道德规范的重要组成部分。出于职业或个人原因，尝试怀孕是一件非常私人的事情。我们不能允许可能遵循和损害隐私的第三方广告商或附属公司的存在 我们的成员。同样，我们的操作程序和我们的社区都已经增强以尊重我们会员的隐私和安全。我们也不出售或交易我们的会员收集的数据。这是我们愿景和道德规范的关键部分。用户了解、了解 GoJaze 应用程序的信息并知道如何控制该应用程序非常重要。我们将在更新后的 GoJaze 隐私政策中详细解释，用户可以在此页面的关键点查看。");
    }
    else if(language == 'tamil') {
        setLangContent('Google பயன்படுத்தக்கூடிய அல்லது தனிப்பட்ட முறையில் அடையாளம் காணக்கூடிய தகவலாக அங்கீகரிக்கப்பட்ட தகவலை Google க்கு அனுப்ப எந்த மூன்றாம் தரப்பினரையும் நீங்கள் உதவவோ அல்லது அனுமதிக்கவோ மாட்டீர்கள். நீங்கள் ஒரு பொருத்தமான தனியுரிமைக் கொள்கையை வைத்திருப்பீர்கள் மற்றும் கடைப்பிடிப்பீர்கள் மற்றும் பார்வையாளர்களிடமிருந்து தகவல்களைச் சேகரிப்பது தொடர்பான அனைத்து பொருந்தக்கூடிய சட்டங்கள், கொள்கைகள் மற்றும் ஒழுங்குமுறைகளுக்கு இணங்குவீர்கள். நீங்கள் ஒரு தனியுரிமைக் கொள்கையை இடுகையிட வேண்டும், மேலும் அந்தத் தனியுரிமைக் கொள்கையானது தரவைச் சேகரிக்கப் பயன்படுத்தப்படும் குக்கீகளைப் பற்றிய அறிவிப்பை வழங்க வேண்டும். Google Analytics இன் பயன்பாட்டையும், அது எவ்வாறு தரவைச் சேகரித்து செயலாக்குகிறது என்பதையும் நீங்கள் வெளிப்படுத்த வேண்டும். தளத்திற்கு ஒரு முக்கிய இணைப்பைக் காண்பிப்பதன் மூலம் இதைச் செய்யலாம் .பார்வையாளரின் சாதனத்தில் குக்கீகள் அல்லது பிற தகவல்களைச் சேமித்து அணுகுவது பற்றிய தெளிவான மற்றும் விரிவான தகவல்கள் மற்றும் ஒப்புதலுடன் பார்வையாளருக்கு வழங்கப்படுவதை உறுதிசெய்ய வணிக ரீதியாக நியாயமான முயற்சிகளைப் பயன்படுத்துவீர்கள். சேவை தொடர்பாக இத்தகைய செயல்பாடு நிகழும் போது மற்றும் அத்தகைய தகவலை வழங்குவது மற்றும் அத்தகைய ஒப்புதலைப் பெறுவது சட்டத்தால் தேவைப்படுகிறது.எங்கள் உறுப்பினர்களின் தனியுரிமையைப் பாதுகாப்பது எங்கள் நெறிமுறைகளின் முக்கிய பகுதியாகும். கருத்தரிக்க முயற்சிப்பது மிகவும் தனிப்பட்ட விஷயம், தொழில்முறை அல்லது தனிப்பட்ட காரணங்களுக்காக. தனியுரிமையைப் பின்பற்றி சமரசம் செய்யக்கூடிய மூன்றாம் தரப்பு விளம்பரதாரர்கள் அல்லது துணை நிறுவனங்களின் இருப்பை எங்களால் அனுமதிக்க முடியவில்லை.எங்கள் உறுப்பினர்களின். இதேபோல், எங்கள் செயல்பாட்டு நடைமுறைகள் மற்றும் எங்கள் சமூகம் அனைத்தும் இருந்தன எங்கள் உறுப்பினர்களின் தனியுரிமை மற்றும் பாதுகாப்பை மதிக்க மேம்படுத்தப்பட்டது. நாங்களும் விற்கவோ, வியாபாரம் செய்யவோ மாட்டோம்எங்கள் உறுப்பினர்களால் சேகரிக்கப்பட்ட தரவு. இது எங்கள் பார்வை மற்றும் நெறிமுறைகளின் முக்கிய பகுதியாகும்.பயனர்கள் GoJaze பயன்பாட்டின் தகவலைப் புரிந்துகொள்வது மற்றும் இந்த பயன்பாட்டை எவ்வாறு கட்டுப்படுத்துவது என்பதை அறிந்து கொள்வது முக்கியம். எங்கள் புதுப்பிக்கப்பட்ட GoJaze இன் தனியுரிமைக் கொள்கையில் அதை விரிவாக விளக்குவோம், மேலும் இந்தப் பக்கத்தில் உள்ள முக்கிய புள்ளியில் பயனர்கள் அதை மதிப்பாய்வு செய்யலாம்.');
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

export default PrivacyPolicy;

const styles = StyleSheet.create({
    text: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    textContainer: {
        margin: 20,
    },
});