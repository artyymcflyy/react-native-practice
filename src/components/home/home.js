import React, { Component } from 'react';
import { View } from 'react-native';

import Button from '../buttons/button';

const Home = props => {

    const{ onPress } = props;

    const { viewStyle, bottomChevronStyle, inlineChevronStyle, topHalf, bottomHalf, mainView } = styles;

    return(
        <View style={ viewStyle }>
            <View style={ topHalf }>

                <Button style={inlineChevronStyle} name={"chevron-left"}/>

                <View style={ mainView } />

                <Button style={inlineChevronStyle} name={"chevron-right"}/>
            </View>

            <View style={ bottomHalf }>
                <Button style={bottomChevronStyle} name={"chevron-down"} onPress={onPress} />
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 10
    },
    bottomChevronStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inlineChevronStyle: {
        flex: 10
    },
    mainView: {
        flex: 80,
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: 'green'
    },
    topHalf: {
        flexDirection: 'row',
        flex: 92
    },
    bottomHalf: {
        flex: 8
    }
}

export default Home;