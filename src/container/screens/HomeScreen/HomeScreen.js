//React
import React, {Component} from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TripsActions from '../../../actions/TripsActions';

import { View, Text } from 'react-native';


import Home from '../../../components/home/home';

class HomeScreen extends Component {
    navigationOptions = {
        title: 'Welcome',
    };

    componentDidMount() {
        this.props.actions.fetchTrips({ user_id: 1 });
    }

    render(){
        const { navigate, trips } = this.props;

        return(
            <Home navigate={navigate} trips={trips}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        trips: state.trips.lastMonthsTrips,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TripsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);