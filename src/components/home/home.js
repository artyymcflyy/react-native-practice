import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import ActionButton from 'react-native-action-button';

//components
import InfoCircle from '../assets/infoCircle';
import InfoDivider from '../infoDivider/infoDivider';
import Selector from '../assets/Selector';
import Button from '../assets/button';
import Icon from 'react-native-vector-icons/Entypo';

const Home = props => {

    const{ onPress, month } = props;

    const {showTripsScreen, showTravelersScreen, showTabsScreen, loadPreviousMonth, loadNextMonth} = onPress;

    const { viewStyle, topHalf, bottomHalf, logoView, dividerView, buttonView, logoImage, bottomChevronStyle, actionButtonIcon } = styles;

    return (
        <View style={ viewStyle }>
            <StatusBar backgroundColor="#005cb2" barStyle="light-content" />
            <View style={topHalf}>
                <Selector month={month} header={month.currentMonth} onPressSelectorLeft={loadPreviousMonth} onPressSelectorRight={loadNextMonth}/>
            </View>

            <InfoCircle header={month.discount} unit={'%'} subtext={'Discount'} big={true}/>

            <View style={bottomHalf}>
                <View style={dividerView}>
                    <InfoDivider flat={false}
                                 infoTitleLeft={'Total Travel Time'} infoTitleMiddle={'Activity'} infoTitleRight={'Phone Usage'}
                                 infoDataLeft={month.totalDriveTime} infoDataMiddle={month.activityCount} infoDataRight={month.phoneUsage}
                                 infoUnitsLeft={'Minutes'} infoUnitsMiddle={'Miles'} infoUnitsRight={'Percent'}
                    />
                </View>
                {/*<ActionButton offsetX={65} offsetY={75} buttonColor='red' position={'left'} onPress={()=>alert('hi')}>
                    <Icon name="chevron-down" style={styles.actionButtonIcon} />
                </ActionButton>*/
                /*<ActionButton offsetX={65} offsetY={75} buttonColor='blue' position={'right'}/>*/
                /*<View style={ buttonView }>
                    <Button title="View Trips" color="#757575" onPress={()=>alert('hi')}/>
                    <View style={{width:40}}/>
                    <Button title="View Travelers" color="#757575" onPress={onPress}/>
                </View>*/}
                <View style={logoView}>
                    <Image style={logoImage} source={require('./img/logo.png')}/>
                    <Button style={bottomChevronStyle} name={'chevron-down'} color={'black'} onPress={showTabsScreen} />
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
    bottomChevronStyle: {
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center'
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
        justifyContent: 'center',
        bottom: 25 
    },
    logoImage: {
        flex: 1,
        width: 290,
        height: 290,
        resizeMode: 'contain'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
};

export default Home;