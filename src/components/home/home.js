import React from 'react';
import { View, Image, Text } from 'react-native';

import Button from '../buttons/button';

const Home = props => {

    const{ onPress } = props;

    const { viewStyle, bottomChevronStyle, inlineChevronStyle, discountView, discountText, dividers, dividedViews, discountTextPercent, topHalf, bottomHalf, middleHalf1, middleHalf2, middleHalf3, textInBanner, mainView, monthlyView, banner } = styles;

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
                <Image style={banner} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}>
                    <View style={discountView}>
                        <Text style={discountTextPercent}>12%</Text>
                        <Text style={discountText}>Discount</Text>
                    </View>
                </Image>
            </View>

            <View style={ monthlyView }>
                <Text style={textInBanner}>Monthly Info</Text>
            </View>

            <View style={ middleHalf2 }>
                <View style={[{marginRight: 20}, dividedViews]}>
                    <Text>Drive Time</Text>
                </View>
                <View style={[{marginRight: 20}, dividers]}/>
                <View style={dividedViews}>
                    <Text>Activity</Text>
                </View>
                <View style={[{marginLeft: 20},dividers]}/>
                <View style={[{marginLeft: 20},dividedViews]}>
                    <Text>Phone Usage</Text>
                </View>
            </View>

            <View style={ middleHalf3 }>
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
    },
    monthlyView: {
        flex: 8,
        height: 20,
        alignSelf: 'stretch',
    },
    topHalf: {
        flexDirection: 'row',
        flex: 8
    },
    bottomHalf: {
        flex: 5
    },
    middleHalf1: {
        flex: 30,
    },
    middleHalf2: {
        flex: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    middleHalf3: {
        flex: 30
    },
    banner: {
        flex: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInBanner: {
        textAlign: 'center',
        fontSize: 25,
        elevation: 1
    },
    discountView: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    discountTextPercent: {
        fontSize: 38,
        fontWeight: '500'
    },
    discountText: {
        fontSize: 15
    },
    dividers: {
        height: 125,
        width: 2,
        backgroundColor: 'black'

    },
    dividedViews: {
    }
};

export default Home;