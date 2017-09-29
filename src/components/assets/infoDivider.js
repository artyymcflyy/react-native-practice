//React
import React from 'react';
import {View} from 'react-native';

//component
import InfoForDivider from '../assets/infoForDivider';

const infoDivider = props => {

    const {infoTitleLeft, infoTitleMiddle, infoTitleRight} = props;
    const { dividers, dividedViews, sectionStyle } = styles;

    return (
        <View style={sectionStyle}>
            <InfoForDivider style={{marginRight: 20}} infoTitle={infoTitleLeft}/>
            <View style={[{marginRight: 20}, dividers]}/>
            <InfoForDivider style={[{}, dividedViews]} infoTitle={infoTitleMiddle}/>
            <View style={[{marginLeft: 20},dividers]}/>
            <InfoForDivider style={{marginLeft: 20}} infoTitle={infoTitleRight}/>
        </View>
    );

};

const styles = {
    dividers: {
        height: 125,
        width: 2,
        backgroundColor: 'black'

    },
    sectionStyle: {
        flex: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
};

export default infoDivider;