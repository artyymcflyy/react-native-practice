//React
import React, { Component} from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TripsActions from '../../../actions/TripsActions';
//Components
import TripsList from '../../../components/trips/TripsList';

class TripsScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.tripSelected = this.tripSelected.bind(this);
    }

    componentDidMount(){
        this.props.actions.fetchTrips({ user_id: 1 });
    }

    tripSelected() {
        const { navigate, trips } = this.props;

        // alert('You have clicked a trip!');
        navigate('Map', { item: trips[0].name });

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

export default connect(mapStateToProps, mapDispatchToProps)(TripsScreen)