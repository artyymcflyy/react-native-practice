import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo'

class Home extends Component {
    constructor(props,context) {
        super(props, context);

        this.showTrips = this.showTrips.bind(this);
    }

    showTrips(){
        const { navigate, trips } = this.props;

        navigate('Trips', {trips: trips});
    }

    render(){
        const { viewStyle, bottomStyle, chevronStyle, topHalf, bottomHalf, mainView } = styles;

        return(
            <View style={ viewStyle }>
                <View style={ topHalf }>

                    <TouchableHighlight 
                        onPress={()=>{}}
                        style={chevronStyle}>
                        <Icon name="chevron-left" style={{height: 50}} size={30} />
                    </TouchableHighlight>

                    <View style={ mainView } />

                    <TouchableHighlight 
                        onPress={()=>{}}
                        style={chevronStyle}>
                        <Icon name="chevron-right" size={30} />
                    </TouchableHighlight>
                </View>

                <View style={ bottomHalf }>
                    <TouchableHighlight 
                        style={ bottomStyle }
                        onPress={this.showTrips}>
                        <Icon name="chevron-down" size={30} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
};

const styles = {
    viewStyle: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 10
    },
    bottomStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    chevronStyle: {
        flex: 10
    },
    mainView: {
        flex: 80,
        height: 50,
        alignSelf: 'stretch',
        backgroundColor: 'green'
    },
    topHalf: {
        flexDirection: 'row',
        flex: 92
    },
    bottomHalf: {
        flex: 8
    }
}

export default Home;