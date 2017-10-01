import React from 'react';
import { View, Image, StatusBar, Button } from 'react-native';
import ActionButton from 'react-native-action-button';

//components
import InfoCircle from '../assets/infoCircle';
import InfoDivider from '../infoDivider/infoDivider';
import Selector from '../assets/selector';

const Home = props => {

    const{ onPress, month} = props;

    const {showTripsScreen, showTravelersScreen, loadPreviousMonth, loadNextMonth} = onPress;

    const { viewStyle, topHalf, bottomHalf, logoView, dividerView, buttonView, logoImage } = styles;

    return(
        <View style={ viewStyle }>
            <StatusBar backgroundColor="#005cb2" barStyle="light-content" />
            <View style={topHalf}>
                <Selector month={month} header={'January'} onPressSelectorLeft={loadPreviousMonth} onPressSelectorRight={loadNextMonth}/>
            </View>

            <InfoCircle header={'12%'} subtext={'Discount'}/>

            <View style={bottomHalf}>
                <View style={dividerView}>
                    <InfoDivider flat={false}
                                 infoTitleLeft={'Total Travel Time'} infoTitleMiddle={'Activity'} infoTitleRight={'Phone Usage'}
                                 infoDataLeft={'15'} infoDataMiddle={'5.7'} infoDataRight={'5'}
                                 infoUnitsLeft={'Minutes'} infoUnitsMiddle={'Miles'} infoUnitsRight={'Percent'}
                    />
                </View>
                {/*<ActionButton offsetX={65} offsetY={75} buttonColor='red' position={'left'} onPress={()=>alert('hi')}/>*/}
                {/*<ActionButton offsetX={65} offsetY={75} buttonColor='blue' position={'right'}/>*/}
                <View style={ buttonView }>
                    <Button title="View Trips" color="#757575" onPress={showTripsScreen}/>
                    <View style={{width:40}}/>
                    <Button title="View Travelers" color="#757575" onPress={showTravelersScreen}/>
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
    topHalf: {
        flex: 30,
    },
    bottomHalf: {
        flex: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    dividerView:{
        flex: 45,
        top: 50,
    },
    buttonView: {
        flexDirection: 'row',
        bottom: 15
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
    },
};

export default Home;