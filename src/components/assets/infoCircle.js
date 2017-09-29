import React from 'react';
import {View, Text} from 'react-native';

const example = props => {

    const {header, subtext} = props;
    const {infoCircleView, headerText, subtextText} = styles;

    return (
        <View style={infoCircleView}>
            <Text style={headerText}>{header}</Text>
            <Text style={subtextText}>{subtext}</Text>
        </View>
    );

};

const styles = {
    infoCircleView: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 38,
        fontWeight: '500'
    },
    subtextText: {
        fontSize: 15
    },
};

export default example;