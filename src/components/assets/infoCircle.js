import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

const example = props => {

    const {header, subtext, userImage} = props;
    const {infoCircleView, headerText, subtextText, container, userIcon} = styles;

    return (
        <View style={container}>
            <View style={infoCircleView}>
                {header ? <Text style={headerText}>{header}</Text> : <Image style={userIcon} source={{uri: userImage}} />}
                <Text style={subtextText}>{subtext}</Text>
            </View>
        </View>
    );

};

const styles = {
    container: {
        position: 'absolute',
        top: Dimensions.get('window').height/4 - 45,
        left: Dimensions.get('window').width/4 + 7,
    },
    infoCircleView: {
        height: 175,
        width: 175,
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#ecac00',
        shadowColor: '#000',
        elevation: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 64,
        fontWeight: '500'
    },
    subtextText: {
        fontSize: 15
    },
    userIcon: {
        borderRadius: 100,
        height: 165,
        width: 165,
        top: 2,
    }
};

export default example;