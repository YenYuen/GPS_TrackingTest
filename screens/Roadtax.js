import React, {useState, useEffect} from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Roadtax = () => {
    useEffect(() => {
        getLanguage();
        langInstruction();
        langVehicle();
        langType();
        langPersonal();
        langBusiness();
        langNRICPassport();
        langNRIC();
        langPassport();
        langSubmit();
    });

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

      const [ langinstruction, setLangInstruction ] = useState('');

      const langInstruction = () => {
        let instruction;
        if(language == 'english') {
            setLangInstruction('Please key in car information');
        }
        else if(language == 'malay') {
            setLangInstruction('Sila masukkan maklumat kereta');
        }
        else if(language == 'chinese') {
            setLangInstruction('请输入汽车信息');
        }
        else if(language == 'tamil') {
            setLangInstruction('தயவுசெய்து கார் தகவலை அழுத்தவும்');
        }
        return instruction;
      }

      const [ langvehicle, setLangVehicle ] = useState('');

      const langVehicle = () => {
        let vehicle;
        if(language == 'english') {
            setLangVehicle('Vehicle Registration Number');
        }
        else if(language == 'malay') {
            setLangVehicle('Nombor Pendaftaran Kenderaan');
        }
        else if(language == 'chinese') {
            setLangVehicle('车辆登记号码');
        }
        else if(language == 'tamil') {
            setLangVehicle('வாகன பதிவு எண்');
        }
        return vehicle;
      }

      const [ langtype, setLangType ] = useState('');

      const langType = () => {
        let type;
        if(language == 'english') {
            setLangType('Type:');
        }
        else if(language == 'malay') {
            setLangType('Jenis:');
        }
        else if(language == 'chinese') {
            setLangType('类型:');
        }
        else if(language == 'tamil') {
            setLangType('மாதிரி:');
        }
        return type;
      }

      const [ langpersonal, setLangPersonal ] = useState('Personal');

      const langPersonal = () => {
        let personal;
        if(language == 'english') {
            setLangPersonal('Personal');
        }
        else if(language == 'malay') {
            setLangPersonal('peribadi');
        }
        else if(language == 'chinese') {
            setLangPersonal('个人');
        }
        else if(language == 'tamil') {
            setLangPersonal('தனிப்பட்ட');
        }
        return personal;
      }

      const [ langbusiness, setLangBusiness ] = useState('Business');

      const langBusiness = () => {
        let business;
        if(language == 'english') {
            setLangBusiness('Business');
        }
        else if(language == 'malay') {
            setLangBusiness('perniagaan');
        }
        else if(language == 'chinese') {
            setLangBusiness('商业');
        }
        else if(language == 'tamil') {
            setLangBusiness('வணிக');
        }
        return business;
      }

      const [ langnricpassport, setLangNRICPassport ] = useState('');

      const langNRICPassport = () => {
        let nricpassport;
        if(language == 'english') {
            setLangNRICPassport('NRIC/Passport No/Others');
        }
        else if(language == 'malay') {
            setLangNRICPassport('NRIC/Nombor Pasport/Lain');
        }
        else if(language == 'chinese') {
            setLangNRICPassport('NRIC/护照号/其他');
        }
        else if(language == 'tamil') {
            setLangNRICPassport('NRIC/கடவுச்சீட்டு எண்//மற்றவைகள்');
        }
        return nricpassport;
      }
      
      const [ langnric, setLangNRIC ] = useState('');

      const langNRIC = () => {
        let nric;
        if(language == 'english') {
            setLangNRIC('NRIC');
        }
        else if(language == 'malay') {
            setLangNRIC('NRIC');
        }
        else if(language == 'chinese') {
            setLangNRIC('NRIC');
        }
        else if(language == 'tamil') {
            setLangNRIC('NRIC');
        }
        return nric;
      }

      const [ langpassport, setLangPassport ] = useState('');

      const langPassport = () => {
        let passport;
        if(language == 'english') {
            setLangPassport('Passport No/Others');
        }
        else if(language == 'malay') {
            setLangPassport('Nombor Pasport/Lain');
        }
        else if(language == 'chinese') {
            setLangPassport('护照号/其他');
        }
        else if(language == 'tamil') {
            setLangPassport('கடவுச்சீட்டு எண்/\nமற்றவைகள்');
        }
        return passport;
      }

      const [ langsubmit, setLangSubmit ] = useState('');

      const langSubmit = () => {
        let submit;
        if(language == 'english') {
            setLangSubmit('Submit');
        }
        else if(language == 'malay') {
            setLangSubmit('Hantar');
        }
        else if(language == 'chinese') {
            setLangSubmit('提交');
        }
        else if(language == 'tamil') {
            setLangSubmit('சமர்ப்பிக்க');
        }
        return submit;
      }

      const radio1Data = [
        {
            id: 'rdpersonal',
            name: langpersonal,
            value: 'personal',
            selected: false,
        },
        {
            id: 'rdbusiness',
            name: langbusiness,
            value: 'business',
            selected: false,
        },
    ]
    
    const [ isLiked1, setIsLiked1 ] = useState(radio1Data);

    const radio2Data = [
        {
            id: 'rdnric',
            name: 'NRIC',
            value: 'nric',
            selected: false,
        },
        {
            id: 'rdpassportOthers',
            name: 'Passport No./Others',
            value: 'passportOthers',
            selected: false,
        },
    ]

    const [ isLiked2, setIsLiked2 ] = useState(radio2Data)

    const onPressRadioButton1 = (item) => {
        let updatedState1 = isLiked1.map((isLikeditem) => isLikeditem.id === item.id
        ? { ...isLikeditem, selected: true }
        : { ...isLikeditem, selected: false }
        );
        setIsLiked1(updatedState1);
    }

    const onPressRadioButton2 = (item) => {
        let updatedState2 = isLiked2.map((isLikeditem) => isLikeditem.id === item.id
        ? { ...isLikeditem, selected: true }
        : { ...isLikeditem, selected: false }
        );
        setIsLiked2(updatedState2);
    }

    return(
        <View
        style={styles.Container}
        >
            <View
            style={styles.formContainer}
            >
                <Text
                style={styles.formTitle}
                >{langinstruction}</Text>
                <View>
                    <TextInput
                    style={styles.textBox}
                    placeholder={langvehicle}
                    placeholderTextColor='#FFFFFF'
                    />
                    <View
                    style={styles.radioButtonFlexBox1}
                    >
                        <View>
                            <Text
                            style={styles.radioButtonCategoryTitle}
                            >{langtype}</Text>
                        </View>
                            <View
                            style={styles.radioButtonsContainer1}
                            >
                            {isLiked1.map((item) => (
                                <View
                                style={styles.radioButtonContainer}
                                >
                                    <TouchableOpacity
                                    onPress={() => {onPressRadioButton1(item)}}
                                    style={styles.radioButton}
                                    >
                                    {item.selected ? 
                                    <View
                                    style={styles.radioButtonIcon}
                                    /> 
                                    : null}  
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {onPressRadioButton1(item)}}>
                                        <Text style={styles.radioButtonText}>{item.id == 'rdpersonal'? langpersonal : langbusiness}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                            </View>
                        </View>
                    </View>
                    
                    <View>
                    <View
                    style={styles.NRICPassportTitleContainer}
                    >
                    <Text
                    style={styles.formTitle}
                    >{langnricpassport}</Text>
                    </View>
                    <View>
                    <View
                            style={styles.radioButtonsContainer2}
                            >
                            {isLiked2.map((item) => (
                                <View
                                style={styles.radioButtonContainer}
                                >
                                    <TouchableOpacity
                                    onPress={() => {onPressRadioButton2(item)}}
                                    style={styles.radioButton}
                                    >
                                    {item.selected ? 
                                    <View
                                    style={styles.radioButtonIcon}
                                    /> 
                                    : null}  
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {onPressRadioButton2(item)}}>
                                        <Text style={styles.radioButtonText}>{item.id == 'rdnric' ? langnric: langpassport}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                    </View>
                    </View>
                    </View>
                    <TextInput
                    style={styles.textBox}
                    placeholder={langnricpassport}
                    placeholderTextColor='#FFFFFF'
                    />
                    <TouchableOpacity
                    style={styles.SubmitButton}
                    title='Submit'
                    >
                        <Text
                        style={styles.SubmitButtonText}
                        >{langsubmit}</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
    );
}

export default Roadtax;

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        paddingLeft: Dimensions.get('window').width * 0.04,
        paddingRight: Dimensions.get('window').width * 0.04,
        paddingTop: 60,
        paddingBottom: 60,
    },
    formContainer: {
        backgroundColor: '#A94588',
        height: 400,
        elevation: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formTitle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    textBox: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFFFF',
        paddingBottom: -10,
    },
    radioButtonCategoryTitle: {
        color: '#FFFFFF',
        flex: 1,
        fontWeight: 'bold',
    },
    radioButton: {
      height: 20,
      width: 20,
      backgroundColor: "#F8F8F8",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#E6E6E6",
      alignItems: "center",
      justifyContent: "center"
    },
    radioButtonIcon: {
      height: 14,
      width: 14,
      borderRadius: 7,
      backgroundColor: "#000000"
    },
    radioButtonText: {
      fontSize: 16,
      marginLeft: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    radioButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 45,
      marginBottom: 10,
    },
    radioButtonFlexBox1: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    radioButtonsContainer1: {
        flex: 0.9,
    },
    radioButtonsContainer2: {
        flexDirection: 'row',
        marginLeft: 2,
    },
    NRICPassportTitleContainer: {
        justifyContent: 'flex-start',
        marginBottom: 5,
        width: Dimensions.get('window').width * 0.9,
    },
    SubmitButton: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: Dimensions.get('window').width * 0.3,
        alignItems: 'center',
    },
    SubmitButtonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 6,
    },
});