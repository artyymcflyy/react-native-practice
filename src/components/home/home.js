import React from 'react';
import { View, Image, StatusBar } from 'react-native';

//components
import Button from '../assets/button';
import InfoCircle from '../assets/infoCircle';
import InfoDivider from '../infoDivider/infoDivider';
import Selector from '../assets/selector';

const Home = props => {

    const{ onPress } = props;

    const { viewStyle, bottomChevronStyle, topHalf, bottomHalf, logoView, dividerView, buttonView, logoImage } = styles;

    return(
        <View style={ viewStyle }>
            <StatusBar backgroundColor="#005cb2" barStyle="light-content" />
            <View style={topHalf}>
                <Selector header={'January'}/>
            </View>

            <InfoCircle header={'12%'} subtext={'Discount'}/>

            <View style={bottomHalf}>
                <View style={dividerView}>
                    <InfoDivider flat={false} infoTitleLeft={'Drive Time'} infoTitleMiddle={'Activity'} infoTitleRight={'Phone Usage'}/>
                </View>
                <View style={ buttonView }>
                    <Button style={bottomChevronStyle} name={'chevron-down'} color={'black'} onPress={onPress} />
                </View>
                <View style={logoView}>
                    <Image style={logoImage} source={require('./img/logo.png')}/>
                </View>
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
        flex: 35,
    },
    bottomHalf: {
        flex: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dividerView:{
        flex: 45,
        top: 50,
    },
    buttonView: {
        paddingTop: 80,
    },
    logoView: {
        flex: 10,
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