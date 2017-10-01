//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
//React-Redux
import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';
//Components
import TripsList from '../../../components/trips/TripsList';

import * as TripsActions from '../../../actions/TripsActions';

class TripsScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.tripSelected = this.tripSelected.bind(this);
        this.goBackHome = this.goBackHome.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchTrips({ user_id: 1 });
    }

    tripSelected() {
        const { navigate } = this.props.navigation;
        console.log(this);
        navigate('Details', {name: 'Brent'});
    }

    goBackHome(){
        const backAction = NavigationActions.back();

        this.props.navigation.dispatch(backAction);
    }

    render() {
        const { trips } = this.props;

        return (
            <TripsList trips={ trips } onPress={ this.tripSelected } goBack={this.goBackHome} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TripsScreen);
