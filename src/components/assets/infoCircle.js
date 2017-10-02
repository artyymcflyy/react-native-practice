import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

const example = props => {

    const {header, subtext, big} = props;
    const {infoCircleViewBig, infoCircleViewSmall, bigHeaderText, smallHeaderText, bigSubtextText, smallSubtextText, bigContainer, smallContainer} = styles;

    return (
        <View style={big ? bigContainer : smallContainer}>
            <View style={big ? infoCircleViewBig : infoCircleViewSmall}>
                <Text style={big ? bigHeaderText : smallHeaderText}>{header}</Text>
                <Text style={big ? bigSubtextText : smallSubtextText}>{subtext}</Text>
            </View>
        </View>
    );

};

const styles = {
    bigContainer: {
        position: 'absolute',
        top: Dimensions.get('window').height/4 - 45,
        left: Dimensions.get('window').width/4 + 7,
    },
    smallContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    infoCircleViewSmall: {
        height: 110,
        width: 110,
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 100,
        borderColor: '#ecac00',
        shadowColor: '#000',
        elevation: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoCircleViewBig: {
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
    bigHeaderText: {
        fontSize: 64,
        fontWeight: '500'
    },
    smallHeaderText: {
        fontSize: 36,
        fontWeight: '500'
    },
    bigSubtextText: {
        fontSize: 15
    },
    smallSubtextText: {
        fontSize: 12
    }
};

export default example;