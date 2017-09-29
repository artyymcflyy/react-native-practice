//React
import React from 'react';
//React-Native
import { View, Text } from 'react-native';

const infoForDivider = props => {

    const { infoTitle, style } = props;

    return (
        <View style={style}>
            <Text>{infoTitle}</Text>
        </View>
    );

};

export default infoForDivider;