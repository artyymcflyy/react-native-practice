//React
import React from 'react';
import {View} from 'react-native';

//component
import InfoForDivider from './infoForDivider';

const infoDivider = props => {

    const {infoTitleLeft, infoTitleMiddle, infoTitleRight, infoDataLeft, infoDataMiddle, infoDataRight,
        infoUnitsLeft, infoUnitsMiddle, infoUnitsRight, flat} = props;

    const { curvedDividers, curvedSectionStyle, curvedDividedSection,
        flatDividers, flatSectionStyle, flatDividedSection  } = styles;

    return (
        <View style={flat ? flatSectionStyle : curvedSectionStyle}>
            <InfoForDivider infoTitle={infoTitleLeft} infoData={infoDataLeft} infoUnits={infoUnitsLeft}/>
            <View style={flat ? flatDividedSection : curvedDividedSection}>
                <View style={flat ? flatDividers : curvedDividers}/>
                <InfoForDivider infoTitle={infoTitleMiddle} infoData={infoDataMiddle} infoUnits={infoUnitsMiddle}/>
                <View style={flat ? flatDividers : curvedDividers}/>
            </View>
            <InfoForDivider infoTitle={infoTitleRight} infoData={infoDataRight} infoUnits={infoUnitsRight}/>
        </View>
    );

};

const styles = {
    flatDividedSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        width: 125,
        margin: 10,
    },
    flatSectionStyle: {
        flex: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        left: 5,
        top: 15
    },
    flatDividers: {
        height: 125,
        width: 2,
        backgroundColor: 'black'

    },
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
        backgroundColor: 'black'

    },
};

export default infoDivider;