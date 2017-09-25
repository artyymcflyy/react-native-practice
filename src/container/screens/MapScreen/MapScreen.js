//React
import React from 'react';
import { View, Text } from 'react-native';

import Map from '../../../components/maps/map';

const MapScreen = (props) => {
    navigationOptions = {
        title: 'Welcome',
    };

    const { params } = props.navigation.state;

    return(
        <Map />
    );
};

export default MapScreen;