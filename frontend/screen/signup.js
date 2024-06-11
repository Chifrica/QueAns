import { useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const Signup = ({navigation}) => {
    const [ fullName, onChangeFullName ] = useState('');
    const [ email, onChangeEmail ] = useState('');
    const [ password, onChangePassword ] = useState('')
    const [ confirmPassword, onChangeConfirmPassword ] = useState('')

    return (
        <ScrollView style={styles.container}>
            <View style={styles.sub_container}>
                <Text style={styles.headerText}>Create an account</Text>
                <Text style={styles.sub_headerText}>Enter your details to sign up for this app</Text>
                
                <TextInput 
                    value={fullName}
                    onChangeText={onChangeFullName}
                    placeholder="Email-address"
                    keyboardType='email-address'
                    style={styles.txt_input}
                />

                <TextInput 
                    value={email}
                    onChangeText={onChangeEmail}
                    placeholder="Full name"
                    keyboardType='default'
                    style={styles.txt_input}
                />

                <TextInput 
                    value={password}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    keyboardType='default'
                    style={styles.txt_input}
                    secureTextEntry={true}
                />

                <TextInput 
                    value={confirmPassword}
                    onChangeText={onChangeConfirmPassword}
                    placeholder="Confirm password"
                    keyboardType='default'
                    style={styles.txt_input}
                    secureTextEntry={true}
                />

                <View style={styles.v_btn}>
                    <TouchableOpacity style={styles.btn} onPress={''}>
                        <Text style={styles.btn_text}>SIGNUP</Text>
                    </TouchableOpacity>
                </View>

                <View  style={styles.signupText}>
                <Text>Already have an account {' '}
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.signupLink}>Login here!</Text>
                    </TouchableOpacity>
                </Text>
            </View>

            </View>
        </ScrollView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gray'
    },

    sub_container: {
        marginTop: '30%',
        marginLeft: 30,
        marginRight: 30,
        paddingTop: '10%',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#DDDDDD',
        borderRadius: 20
    },

    headerText: {
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        paddingBottom: 10
    },

    sub_headerText: {
        alignItems: 'center',
        fontWeight: '300',
        // padding: 10,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 15,
        paddingBottom: 20
    },

    txt_input: {
        alignSelf: 'center',
        backgroundColor: '#D9D9D9',
        width: '80%',
        justifyContent: 'center',
        marginTop: 10,
        padding: 5,
        borderRadius: 5,
        // cursor: 'auto',
        elevation: 2,
        textDecorationLine: 'none'
    },

    v_btn: {
        borderRadius: 50,
        backgroundColor: '#10CA0C',
        marginTop: 30,
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
        paddingTop: 5,
        paddingBottom: 5,
    },

    signupText: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        alignSelf: 'center'
    },

    signupLink: {
        color: '#10CA0C',
        textDecorationLine: 'underline'
    },
})