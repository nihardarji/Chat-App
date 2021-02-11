import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

const ChatListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem onPress={() => enterChat(id, chatName)} key={id}>
            <Avatar
                rounded
                source={{
                    uri:
                        'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
                }}
            />
            <ListItem.Content>
                <ListItem.Title>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
                    Subtitle for testing
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default ChatListItem

const styles = StyleSheet.create({})
