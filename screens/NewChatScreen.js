import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'
import { db } from '../firebase'

const NewChatScreen = ({ navigation }) => {
    const [chatName, setChatName] = useState('')

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add new Chat',
            headerBackTitle: 'Chats '
        })
    }, [navigation])

    const createChat = async () => {
        await db.collection('chats').add({
            chatName
        }).then(() => {
            navigation.goBack()
        }).catch(error => {
            alert(error.message)
        })
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter chat name'
                value={chatName}
                onChangeText={text => setChatName(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon name='wechat' type='antdesign' size={24} color='black' />
                }
            />
            <Button disabled={!chatName} title='Create new Chat' onPress={createChat} />
        </View>
    )
}

export default NewChatScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%'
    }
})
