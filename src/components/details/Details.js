import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import MapView from 'react-native-maps';

//components
import InfoCircle from '../assets/infoCircle';
import InfoDivider from '../infoDivider/infoDivider';
import Header from '../assets/header';
import { UserImageRenderer } from '../images/UserImageRenderer';

const Details = props => {

    const {trip} = props;

    const { viewStyle, topHalf, bottomHalf, middleText, dividerView, headerMainView, headerText, splitInfoCircles, middleHalf } = styles;

    if(trip){
        return (
            <View style={ viewStyle }>
                <StatusBar backgroundColor="#005cb2" barStyle="light-content" />
                <View style={topHalf}>
                    <View style={headerMainView}>
                        <View style={headerText}>
                            <Header headerText={'Trip Details'}/>
                        </View>
                    </View>
                </View>
                <View style={middleHalf}>
                    <MapView initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}/>
                </View>
            </View>
        );
    }else{
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
                <UserImageRenderer detailScreen={true} images={[{img: 'https://i.pinimg.com/736x/c7/28/ae/c728ae90470258962ecf92dc72201720--brad-pitt--square-faces.jpg'}]}/>
                <View style={middleText}>
                    <Text style={{fontSize: 28}}>Alec</Text>
                </View>
                <View style={splitInfoCircles}>
                    <InfoCircle header={'4.7'} subtext={'User Score'}/>
                    <InfoCircle header={'5%'} subtext={'Phone Usage'}/>
                </View>
                <View style={bottomHalf}>
                    <View style={dividerView}>
                        <InfoDivider flat={true}
                                     infoTitleLeft={'Total Travel Time'} infoTitleMiddle={'Distance Traveled'} infoTitleRight={'Phone Activity'}
                                     infoDataLeft={'10'} infoDataMiddle={'10'} infoDataRight={'10'}
                                     infoUnitsLeft={'Minutes'} infoUnitsMiddle={'Miles'} infoUnitsRight={'Percent'}
                        />
                    </View>
                </View>
            </View>
        );
    }
};

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topHalf: {
        flex: 30,
    },
    middleHalf:{
      flex: 30,
    },
    bottomChevronStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleText: {
        flex: 25,
        top: 45,
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
    splitInfoCircles: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    splitInfoCircles2: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    }
};

export default Details;