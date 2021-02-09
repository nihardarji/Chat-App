import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button, Input, Image } from 'react-native-elements'
import img from '../assets/chat-image.png'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = () => {
        console.log('Sign In')
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
                />
            </View>
            <Button title='Login' onPress={signIn} containerStyle={styles.button} />
            <Button title='Register' type='outline' containerStyle={styles.button} />
            <View style={{ height: 100 }} />
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