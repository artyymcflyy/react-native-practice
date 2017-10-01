import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const example = props => {

    const {header, subtext} = props;
    const {infoCircleView, headerText, subtextText, container} = styles;

    return (
        <View style={container}>
            <View style={infoCircleView}>
                <Text style={headerText}>{header}</Text>
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
};

export default example;