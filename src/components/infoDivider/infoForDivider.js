//React
import React from 'react';
//React-Native
import { View, Text } from 'react-native';

const infoForDivider = props => {

    const { infoTitle, infoData, infoUnits } = props;
    const { textStyle } = styles;

    return (
        <View>
            <Text style={textStyle}>{infoTitle}</Text>
            <Text style={textStyle}>{infoData}</Text>
            <Text style={textStyle}>{infoUnits}</Text>
        </View>
    );

};

const styles = {
    textStyle: {
        width: 110,
        textAlign: 'center',
        fontSize: 20
    }
};

export default infoForDivider;