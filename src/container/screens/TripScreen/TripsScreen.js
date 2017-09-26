//React
import React, { Component} from 'react';
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
