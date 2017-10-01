//React
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//Components
import Button from '../assets/button';

const Details = ({ users, onPress, goBack }) => {
    const { bottomChevronStyle } = styles;

    return (
        <View>
            <Button style={ bottomChevronStyle } name={ "chevron-up" } onPress={goBack}/>
            <Text> Hey </Text>
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

export default Details;