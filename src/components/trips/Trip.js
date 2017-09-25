//React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Components

const TripCell = props => {

    const { trip, onPress } = props;

    return (
        <View style={ styles.row }>

            <Text style={ styles.text } onPress={ onPress }>
                { trip.name }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        height: 48,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    text: {
        fontSize: 16,
    },
});

export default TripCell