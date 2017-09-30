//React
import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
//Components
import { UserImageRenderer } from '../images/UserImageRenderer';
import Timestamp from 'react-timestamp';

import Icon from 'react-native-vector-icons/Entypo';

const TripCell = props => {

    const { trip, onPress } = props;

    const { rowStyle, textStyle, timeStyle, userIcon, chevronStyle, imageStyle } = styles;
    console.log(trip);

    return (
        <View style={ rowStyle }>
            <View style={ imageStyle}>
                <UserImageRenderer images={ trip.users } />
            </View>
            
            <Text style={ textStyle } onPress={ onPress }>
                { trip.name }
            </Text>
            <Timestamp style={ timeStyle } time={ trip.startTime } component={Text} onPress={ onPress }/>
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
        fontSize: 16,
        textAlign: 'left'
    },
    timeStyle: {
        flex: 5,
        fontSize: 16,
        textAlign: 'center'
    },
    chevronStyle: {
        flex: 1
    },
    imageStyle: {
        flex: 4
    }
};

export default TripCell