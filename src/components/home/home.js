import React from 'react';
import { View, Image, Text } from 'react-native';

//components
import Button from '../assets/button';
import InfoCircle from '../assets/infoCircle';
import Header from '../assets/header';
import InfoForDivider from '../assets/infoForDivider';
import InfoDivider from '../assets/infoDivider';

const Home = props => {

    const{ onPress } = props;

    const { viewStyle, bottomChevronStyle, topHalf, bottomHalf, middleSection, mainView, banner } = styles;

    return(
        <View style={ viewStyle }>
            <View style={ topHalf }>

                <Button style={{flex: 10}} name={"chevron-left"}/>

                <View style={ mainView }>
                    <Header headerText={'January'}/>
                </View>

                <Button style={{flex: 10}} name={"chevron-right"}/>
            </View>

            <View style={ middleSection }>
                <Image style={banner} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}>
                    <InfoCircle header={'12%'} subtext={'Discount'}/>
                </Image>
            </View>

            <Header headerText={'Monthly Info'}/>
            <View style={middleSection}>
                <InfoDivider infoTitleLeft={'Drive Time'} infoTitleMiddle={'Activity'} infoTitleRight={'Phone Usage'}/>
            </View>

            <View style={ middleSection }>
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
    mainView: {
        flex: 80,
        height: 40,
        alignSelf: 'stretch',
    },
    topHalf: {
        flexDirection: 'row',
        flex: 8
    },
    bottomHalf: {
        flex: 5
    },
    middleSection: {
        flex: 30,
    },
    banner: {
        flex: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export default Home;