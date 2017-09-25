import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo'

export default class Home extends Component {
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <TouchableHighlight onPress={()=>{}}>
                    <Icon name="chevron-left" style={{height: 50}} size={30} />
                </TouchableHighlight>
                <View style={{height: 50, width: 50, backgroundColor: 'green'}} />
                <TouchableHighlight onPress={()=>{}}>
                    <Icon name="chevron-right" size={30} />
                </TouchableHighlight>
            </View>
        );
    }
};