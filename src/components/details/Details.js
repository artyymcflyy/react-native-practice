import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import ActionButton from 'react-native-action-button';

//components
import InfoCircle from '../assets/infoCircle';
import InfoDivider from '../infoDivider/infoDivider';
import Selector from '../assets/selector';
import Header from '../assets/header';
import Button from '../assets/button';
import Icon from 'react-native-vector-icons/Entypo';

const Details = props => {

    const{ onPress, month} = props;

    const { viewStyle, topHalf, bottomHalf, middleText, dividerView, headerMainView, headerText, bottomChevronStyle, actionButtonIcon } = styles;

    return (
        <View style={ viewStyle }>
            <StatusBar backgroundColor="#005cb2" barStyle="light-content" />
            <View style={topHalf}>
                <View style={headerMainView}>
                    <View style={headerText}>
                        <Header headerText={'Traveler Details'}/>
                    </View>
                </View>
            </View>

            <InfoCircle header={''} userImage={'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'} subtext={''}/>
            <View style={middleText}>
                <Text style={{fontSize: 36}}>Alec</Text>
            </View>
            <View>
                
            </View>
            <View style={bottomHalf}>
                <View style={dividerView}>
                    <InfoDivider flat={true}
                                 infoTitleLeft={'Total Travel Time'} infoTitleMiddle={'Distance Traveled'} infoTitleRight={'Phone Activity'}
                                 infoDataLeft={'10'} infoDataMiddle={'10'} infoDataRight={'10'}
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
    middleText: {
        flex: 25,
        top: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomHalf: {
        flex: 35,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    dividerView:{
        flex: 100,
        padding: 50,
    },
    buttonView: {
        flexDirection: 'row',
        bottom: 15
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    headerMainView: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#1e88e5',
        padding: 35,
        elevation: 20,
        justifyContent: 'center'
    },
    headerText: {
        flex: 80,
        height: 40,
        alignSelf: 'stretch'
    },
};

export default Details;