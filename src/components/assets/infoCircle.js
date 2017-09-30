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
        top: Dimensions.get('window').height/4 - 60,
        left: Dimensions.get('window').width/2 - 40,
    },
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