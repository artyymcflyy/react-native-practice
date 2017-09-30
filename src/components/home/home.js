import React from 'react';
import { View, Image, StatusBar } from 'react-native';

//components
import Button from '../assets/button';
import InfoCircle from '../assets/infoCircle';
import Header from '../assets/header';
import InfoForDivider from '../infoDivider/infoForDivider';
import InfoDivider from '../infoDivider/infoDivider';
import Selector from '../assets/selector';

const Home = props => {

    const{ onPress } = props;

    const { viewStyle, bottomChevronStyle, topHalf, bottomHalf, middleSection, mainView, logo, logoImage } = styles;

    return(
        <View style={ viewStyle }>
            <StatusBar backgroundColor="#005cb2" barStyle="light-content" />
            <View style={topHalf}>
                <Selector header={'January'}/>
            </View>

            <View style={ middleSection }>
            </View>

            <InfoCircle header={'12%'} subtext={'Discount'}/>
            {/*<Header headerText={'Monthly Info'}/>*/}
            {/*<View style={middleSection}>*/}
                {/*<InfoDivider infoTitleLeft={'Drive Time'} infoTitleMiddle={'Activity'} infoTitleRight={'Phone Usage'}/>*/}
            {/*</View>*/}

            {/*<View style={ middleSection }>*/}
                {/*<Image style={banner} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>*/}
            {/*</View>*/}

            <View style={ bottomHalf }>
                {/*<Button style={bottomChevronStyle} name={"chevron-down"} onPress={onPress} />*/}
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
    mainView: {
        flex: 80,
        height: 40,
        alignSelf: 'stretch',
    },
    topHalf: {
        flex: 40,
    },
    bottomHalf: {
        flex: 60
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