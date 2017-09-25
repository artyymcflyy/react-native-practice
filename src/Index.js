//React
import React, { Component } from 'react';
//Routing
import TripsScreen from './container/screens/TripScreen/TripsScreen';
//Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();

export default class Index extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <Provider store={store}>
                <TripsScreen navigate = { navigate }/>
            </Provider>
        );
    }
}
