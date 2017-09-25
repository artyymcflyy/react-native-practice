//React
import React from 'react';
import { View, Text } from 'react-native';

import Home from '../../../components/home/home';

const HomeScreen = (props) => {
    navigationOptions = {
        title: 'Welcome',
    };

    // const { params } = props.navigation.state;

    return(
        <Home />
    );
};

export default HomeScreen;