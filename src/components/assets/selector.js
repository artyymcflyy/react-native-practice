//React
import React from 'react';
//React-native
import {View} from 'react-native';
//Components
import Header from '../assets/header';
import Button from '../assets/button';

const Selector = props => {

    const {} = props;
    const { mainView, headerText } = styles;

    return (
        <View style={mainView}>
            <Button style={{flex: 10}} name={"chevron-left"}/>

            <View style={headerText}>
                <Header headerText={'January'}/>
            </View>

            <Button style={{flex: 10}} name={"chevron-right"}/>
        </View>
    );

};

const styles = {
    mainView: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#1e88e5',
        padding: 40
    },
    headerText: {
        flex: 80,
        height: 40,
        alignSelf: 'stretch',
    },
};

export default Selector;