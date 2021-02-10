import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

const ChatListItem = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri:
                        'https://pixabay.com/photos/road-forest-fall-autumn-season-1072823/',
                }}
            />
            <ListItem.Content>
                <ListItem.Title>
                    Test Chat
                </ListItem.Title>
                <ListItem.Subtitle>
                    Subtitle for testing
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default ChatListItem

const styles = StyleSheet.create({})
