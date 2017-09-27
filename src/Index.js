//React
import React, { Component } from 'react';
//Routing
import HomeScreen from './container/screens/HomeScreen/HomeScreen';
//Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();

export default class Index extends Component {
    static navigationOptions = {
        title: 'BetterTrack',
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <Provider store={store}>
                <HomeScreen navigate = { navigate }/>
            </Provider>
        );
    }
}
