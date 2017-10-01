//React
import React from 'react';
import {View} from 'react-native';

//component
import InfoForDivider from './infoForDivider';

const infoDivider = props => {

    const {infoTitleLeft, infoTitleMiddle, infoTitleRight, infoDataLeft, infoDataMiddle, infoDataRight,
        infoUnitsLeft, infoUnitsMiddle, infoUnitsRight, flat} = props;

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
                <InfoForDivider infoTitle={infoTitleLeft} infoData={infoDataLeft} infoUnits={infoUnitsLeft}/>
                <View style={curvedDividedSection}>
                    <View style={curvedDividers}/>
                    <InfoForDivider infoTitle={infoTitleMiddle} infoData={infoDataMiddle} infoUnits={infoUnitsMiddle}/>
                    <View style={curvedDividers}/>
                </View>
                <InfoForDivider infoTitle={infoTitleRight} infoData={infoDataRight} infoUnits={infoUnitsRight}/>
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
        justifyContent: 'space-between',
        left: 5,
    },
    curvedDividedSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: 125,
        bottom: 20,
        margin: 10,
    },
    curvedDividers: {
        height: 125,
        width: 2,
        backgroundColor: 'grey'

    },
};

export default infoDivider;