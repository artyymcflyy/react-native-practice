import React from 'react';
import { View, Text } from 'react-native';

const header = props => {

    const { headerText } = props;
    const { headerView, textInHeader } = styles;

    return (
        <View style={ headerView }>
            <Text style={textInHeader}>{headerText}</Text>
        </View>
    );

};

const styles = {
    headerView: {
        flex: 8,
        height: 20,
        alignSelf: 'stretch'
    },
    textInHeader: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        elevation: 1
    }
};

export default header;