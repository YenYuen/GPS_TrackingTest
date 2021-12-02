import * as React from 'react';
import { Button, Text, View, FlatList, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, Image, Linking, TextInput, ScrollView } from 'react-native';

const EditProfile = ()=> {
    return(
        <ScrollView
        style={{backgroundColor: "#FFFFFF",paddingTop: 20}}
        >
            <View
            style={styles.Container}
            >
                <View
                style={styles.textContainer}
                >
                    <Text
                    style={styles.text}
                    >Name:</Text>
                </View>
                <View
                style={styles.inputContainer}
                >
                    <TextInput
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#000000"
                    />
                </View>
            </View>
            <View
            style={styles.Container}
            >
                <View
                style={styles.textContainer}
                >
                    <Text
                    style={styles.text}
                    >Email:</Text>
                </View>
                <View
                style={styles.inputContainer}
                >
                    <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#000000"
                    />
                </View>
            </View>
            <View
            style={styles.Container}
            >
                <View
                style={styles.textContainer}
                >
                    <Text
                    style={styles.text}
                    >Password:</Text>
                </View>
                <View
                style={styles.inputContainer}
                >
                    <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default EditProfile;

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#FFFFFF",
    },
    text: {
        color: '#000000',
    },
    input: {
        borderWidth: 1,
        width: Dimensions.get('window').width * 0.7,
        borderRadius: 10,
        borderColor: "#000000",
    },
    textContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height * 0.1,
    },
    inputContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height * 0.1,
    },
});

//Name Email Password