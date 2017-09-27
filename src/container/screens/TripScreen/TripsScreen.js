//React
import React, { Component} from 'react';
//Redux
import { bindActionCreators } from 'redux';
//React-Redux
import { connect } from 'react-redux';
//Components
import TripsList from '../../../components/trips/TripsList';

import * as TripsActions from '../../../actions/TripsActions';

class TripsScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.tripSelected = this.tripSelected.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchTrips({ user_id: 1 });
    }

    tripSelected() {
        alert('You have clicked a trip!');
    }

    render() {
        const { trips } = this.props;

        return (
            <TripsList trips={ trips }
                   onPress={ this.tripSelected } />
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
