//React
import React, {Component} from 'react';
//React-Redux
import { connect } from 'react-redux';
//Redux
import { bindActionCreators } from 'redux';

import * as TripsActions from '../../../actions/TripsActions';


import Home from '../../../components/home/home';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'BetterTrack',
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <Home navigate = {navigate}/>
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