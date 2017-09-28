//React
import React, {Component} from 'react';
//React-Redux
import { connect } from 'react-redux';
//Redux
import { bindActionCreators } from 'redux';

import * as TripsActions from '../../../actions/TripsActions';


import Home from '../../../components/home/home';

class HomeScreen extends Component {
    constructor(props, context){
        super(props, context);
        this.showTripsScreen = this.showTripsScreen.bind(this);
    }

    static navigationOptions = {
        header: {
            visible: false,
        }
    };

    showTripsScreen(){
        const { navigate } = this.props.navigation;

        navigate('Trips');
    }

    render(){
        return(
            <Home onPress={this.showTripsScreen}/>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TripsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);