//React
import React from 'react';
import {View} from 'react-native';

//component
import InfoForDivider from './infoForDivider';

const infoDivider = props => {

    const {infoTitleLeft, infoTitleMiddle, infoTitleRight, flat} = props;

    const { flatDividers, flatSectionStyle } = flatStyles;
    const { curvedDividers, curvedSectionStyle, curvedDividedSection } = curvedStyles;

    if(flat){
        return (
            <View style={flatSectionStyle}>
                <InfoForDivider style={{marginRight: 20}} infoTitle={infoTitleLeft}/>
                <View style={[{marginRight: 50}, flatDividers]}/>
                <InfoForDivider infoTitle={infoTitleMiddle}/>
                <View style={[{marginLeft:50},flatDividers]}/>
                <InfoForDivider style={{marginLeft: 20}} infoTitle={infoTitleRight}/>
            </View>
        );
    }else{
        return (
            <View style={curvedSectionStyle}>
                <View>
                    <InfoForDivider style={{marginRight: 20}} infoTitle={infoTitleLeft}/>
                </View>
                <View style={curvedDividedSection}>
                    <View style={[{marginRight: 0}, curvedDividers]}/>
                    <InfoForDivider infoTitle={infoTitleMiddle}/>
                    <View style={[{marginLeft: 0},curvedDividers]}/>
                </View>
                <View>
                    <InfoForDivider style={{marginLeft: 20}} infoTitle={infoTitleRight}/>
                </View>
            </View>
        );
    }

};

const flatStyles = {
    flatSectionStyle: {
        flex: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        left: 5,
    },
    flatDividers: {
        height: 125,
        width: 2,
        backgroundColor: 'black'

    },
};

const curvedStyles = {
    curvedSectionStyle: {
        flex: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        left: 5,
    },
    curvedDividedSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: 125,
        paddingTop: 50,
    },
    curvedDividers: {
        height: 125,
        width: 2,
        backgroundColor: 'black'

    },
};

export default infoDivider;