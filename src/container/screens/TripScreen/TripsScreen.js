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

    tripSelected() {
        alert('You have clicked a trip!');
    }

    render() {
        const { trips } = this.props.navigation.state.params;

        return (
            <TripsList trips={ trips }
                   onPress={ this.tripSelected } />
        );
    }
}

export default TripsScreen;
