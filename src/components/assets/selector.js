//React
import React from 'react';
//React-native
import {View, Dimensions} from 'react-native';
//Components
import Header from '../assets/header';
import Button from '../assets/button';

const Selector = props => {

    const { header } = props;

    const { mainView, headerText } = styles;

    return (
        <View style={mainView}>
            <Button style={{flex: 10}} name={"chevron-thin-left"} color={'white'}/>

            <View style={headerText}>
                <Header headerText={header}/>
            </View>

            <Button style={{flex: 10}} name={"chevron-thin-right"} color={'white'}/>
        </View>
    );

};

const styles = {
    mainView: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#1e88e5',
        padding: 30
    },
    headerText: {
        flex: 80,
        height: 40,
        alignSelf: 'stretch',
    },
};

export default Selector;