//React
import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
//Components
import Trip from './Trip';
import Button from '../buttons/button';

const TripsList = ({ trips, onPress, goBack }) => {
    const { bottomChevronStyle } = styles;
    const _keyExtractor = (item, index) => item.id;

    const _renderItem = ({ item }) => (
        <Trip trip={ item } onPress={ onPress } goBack={goBack}/>
    );

    return (
        <View>
            <Button style={bottomChevronStyle} name={"chevron-up"} onPress={goBack}/>
            <FlatList data={ trips } renderItem={ _renderItem } keyExtractor={ _keyExtractor } />
        </View>
    );
};

const styles = StyleSheet.create({
    bottomChevronStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TripsList;