import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image } from 'react-native-elements'
import img from '../assets/chat-image.png'
import { auth } from '../firebase'
import { KeyboardAvoidingView } from 'react-native'

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                navigation.replace('Home')
            }
        })

        return unsubcribe
    }, [])

    const signIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image
                source={img}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder='Email'
                    autoFocus
                    type='email'
                />
                <Input
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder='Password'
                    secureTextEntry
                    type='password'
                    onSubmitEditing={signIn}
                />
            </View>
            <Button title='Login' onPress={signIn} style={styles.button} />
            <Button title='Register' onPress={() => navigation.navigate('Register')} type='outline' style={styles.button} />
            <View style={{ height: 160 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})
