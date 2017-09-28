//React
import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
//Components
import { UserImageRenderer } from '../images/UserImageRenderer';

import Icon from 'react-native-vector-icons/Entypo';

const TripCell = props => {

    const { trip, onPress } = props;

    const { rowStyle, textStyle, userIcon, chevronStyle } = styles;
    console.log(trip);

    return (
        <View style={ rowStyle }>
            <UserImageRenderer images={ trip.users } style={ userIcon }/>
            
            <Text style={ textStyle } onPress={ onPress }>
                { trip.name }
            </Text>
            <TouchableHighlight 
                onPress={()=>{}}
                style={chevronStyle}>
                <Icon name="chevron-right" size={30} />
            </TouchableHighlight>
        </View>
    );
};

const styles = {
    rowStyle: {
        height: 75,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    textStyle: {
        flex: 6,
        fontSize: 16
    },
    chevronStyle: {
        flex: 1
    },
    userIcon: {
        borderRadius: 50,
        marginRight: 10,
        height: 50,
        width: 50,
        flex: 1
    }
};

export default TripCell