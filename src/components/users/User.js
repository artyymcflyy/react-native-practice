//React
import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
//Components
import { UserImageRenderer } from '../images/UserImageRenderer';

import Icon from 'react-native-vector-icons/Entypo';

const UserCell = props => {

    const { user, onPress } = props;

    const { rowStyle, textStyle, timeStyle, userIcon, chevronStyle, imageStyle, scoreStyle, usageStyle, number, ribbon } = styles;

    return (
        <TouchableHighlight
            onPress={() => user.id}>
            <View style={ rowStyle } >
                <View style={ imageStyle }>
                    <Image style={ userIcon } source={{uri: user.img}} />
                    <Image style={ ribbon } source={{uri: user.medal}}/>
                </View>

                <View style={ scoreStyle }>
                    <Text style={ number } onPress={ onPress }>
                        { user.score }
                    </Text>
                </View>

                <View style={ usageStyle }>
                    <Text style={ number } onPress={ onPress }>
                        { user.usage }%
                    </Text>
                </View>
                <TouchableHighlight 
                    onPress={()=>{}}
                    style={chevronStyle}>
                    <Icon name="chevron-right" size={30} />
                </TouchableHighlight>
            </View>
        </TouchableHighlight>
    );
};

const styles = {
    rowStyle: {
        height: 125,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.054)',
    },
    textStyle: {
        flex: 6,
    },
    usageStyle: {
        flex: 5,
    },
    scoreStyle: {
        flex: 5,
    },
    number: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    chevronStyle: {
        flex: 1
    },
    imageStyle: {
        flex: 4
    },
    userIcon: {
        borderWidth: 2,
        borderColor: '#ECAC00',
        borderRadius: 50,
        height: 75,
        width: 75,
        left: 5
    },
    ribbon: {
        height: 45,
        width: 45,
        position: 'absolute',
        top: 47,
        left: 40
    }
};

export default UserCell;