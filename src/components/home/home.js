import React from 'react';
import { View, Image, Text } from 'react-native';

import Button from '../buttons/button';

const Home = props => {

    const{ onPress } = props;

    const { viewStyle, bottomChevronStyle, inlineChevronStyle, topHalf, bottomHalf, middleHalf1, middleHalf2, textInBanner, mainView, monthlyView, banner } = styles;

    return(
        <View style={ viewStyle }>
            <View style={ topHalf }>

                <Button style={inlineChevronStyle} name={"chevron-left"}/>

                <View style={ mainView }>
                    <Text style={textInBanner}>January</Text>
                </View>

                <Button style={inlineChevronStyle} name={"chevron-right"}/>
            </View>

            <View style={ middleHalf1 }>
                <Image style={banner} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
            </View>

            <View style={ monthlyView }>
                <Text style={textInBanner}>Monthly Info</Text>
            </View>

            <View style={ middleHalf2 }>
                <Image style={banner} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
            </View>

            <View style={ middleHalf2 }>
                <Image style={banner} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
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
        height: 40,
        alignSelf: 'stretch',
        backgroundColor: 'green'
    },
    monthlyView: {
        flex: 10,
        height: 30,
        alignSelf: 'stretch',
        backgroundColor: 'green'
    },
    topHalf: {
        flexDirection: 'row',
        flex: 10
    },
    bottomHalf: {
        flex: 5
    },
    middleHalf1: {
        flex: 25
    },
    middleHalf2: {
        flex: 30
    },
    banner: {
        alignSelf: 'stretch',
        flex: 5
    },
    textInBanner: {
        textAlign: 'center',
        fontSize: 30
    }
};

export default Home;