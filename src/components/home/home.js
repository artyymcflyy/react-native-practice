import React from 'react';
import { View, Image, StatusBar } from 'react-native';

//components
import Button from '../assets/button';
import InfoCircle from '../assets/infoCircle';
import InfoDivider from '../infoDivider/infoDivider';
import Selector from '../assets/selector';

const Home = props => {

    const{ onPress } = props;

    const { viewStyle, bottomChevronStyle, topHalf, bottomHalf, middleSection, logo, logoImage } = styles;

    return(
        <View style={ viewStyle }>
            <StatusBar backgroundColor="#005cb2" barStyle="light-content" />
            <View style={topHalf}>
                <Selector header={'January'}/>
            </View>

            <View style={ middleSection }>
            </View>

            <InfoCircle header={'12%'} subtext={'Discount'}/>

            <View style={ bottomHalf }>
                <View style={middleSection}>
                    <InfoDivider infoTitleLeft={'Drive Time'} infoTitleMiddle={'Activity'} infoTitleRight={'Phone Usage'}/>
                </View>
            </View>
            <View>
                <Button style={bottomChevronStyle} name={'chevron-down'} color={'black'} onPress={onPress} />
            </View>
            <View style={logo}>
                <Image style={logoImage} source={require('./img/logo.png')}/>
            </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'space-between',
    },
    bottomChevronStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topHalf: {
        flex: 45,
    },
    bottomHalf: {
        flex: 55
    },
    middleSection: {
        flex: 30,
    },
    logo: {
        flex: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImage: {
        flex: 1,
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
};

export default Home;