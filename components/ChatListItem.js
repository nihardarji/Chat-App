import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { db } from '../firebase'

const ChatListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = useState([])

    useEffect(() => {
        const unsubcribe = db
            .collection('chats')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setChatMessages(snapshot.docs.map(doc => doc.data()))
            ))

        return unsubcribe
    }, [])
    return (
        <ListItem key={id} onPress={() => enterChat(id, chatName)} key={id}>
            <Avatar
                rounded
                source={{
                    uri: chatMessages?.[0]?.photoURL ||
                        'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
                }}
            />
            <ListItem.Content>
                <ListItem.Title>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    {chatMessages && chatMessages[0] && chatMessages[0].displayName + ':' + chatMessages[0].message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default ChatListItem

const styles = StyleSheet.create({})
