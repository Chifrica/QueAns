import { useState } from "react";
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const Login = ({navigation}) => {

    const [ email, onChangeEmail ] = useState('');
    const [ password, onChangePassword ] = useState('');
    const [ selectedValue, setSelectedValue ] = useState('option1');

    function handleLogin() {
        if(email && password == 'admin'){
            navigation.navigate('MainApp');
        } else {
            Alert.alert('Invailed credentials');
        }
    }

    return(
        <ScrollView style={styles.container}>
            <Image 
                source={require('../../assets/QueAnsIcon.png')}
                style={styles.img}
            />

            <Text style={styles.headerText}>
                QueAns
            </Text>

            <TextInput 
                keyboardType='email-address'
                value={email}
                onChangeText={onChangeEmail}
                // right={<TextInput.Icon name='email-address' />}
                style={styles.txt_input}
                placeholder="Email-address"
                selectionColor="black"
            />

            <TextInput 
                keyboardType='default'
                value={password}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                style={styles.txt_input}
                placeholder="Password"
                selectionColor="black"
                
            />

            <View style={styles.v_btn}>
                <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                    <Text style={styles.btn_text}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <View  style={styles.signupText}>
                <Text>Don't have an account? {' '}
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.signupLink}>Register here!</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gray'
    },

    img: {
        alignSelf: 'center',
        top: '30%'
    },

    headerText: {
        paddingTop: '50%',
        // height: '50%',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 38
    },

    txt_input: {
        alignSelf: 'center',
        backgroundColor: '#D9D9D9',
        width: '80%',
        justifyContent: 'center',
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
        cursor: 'auto',
        elevation: 2,
    },

    v_btn: {
        borderRadius: 50,
        backgroundColor: '#10CA0C',
        marginTop: 50,
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center'
    },

    btn: {
        borderRadius: 50,
        backgroundColor: '#10CA0C',
    },

    btn_text: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '900',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },

    signupText: {
        marginTop: 20,
        textAlign: 'center',
        alignSelf: 'center'
    },

    signupLink: {
        color: '#10CA0C',
        textDecorationLine: 'underline'
    },
})