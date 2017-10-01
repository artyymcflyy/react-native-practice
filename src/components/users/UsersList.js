//React
import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
//Components
import User from './User';
import Button from '../assets/button';

const UsersList = ({ users, onPress, goBack }) => {
    const { bottomChevronStyle } = styles;
    const _keyExtractor = (item, index) => item.id;

    const _renderItem = ({ item }) => (
        <User user={ item } onPress={ onPress } goBack={goBack}/>
    );

    return (
        <View>
            <Button style={ bottomChevronStyle } name={ "chevron-up" } onPress={goBack}/>
            <FlatList data={ users } renderItem={ _renderItem } keyExtractor={ _keyExtractor } />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomChevronStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center'
    }
});

export default UsersList;