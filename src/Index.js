//React
import React, { Component } from 'react';
//Routing
import Navigation from './container/Navigation';
//Redux
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';

const store = configureStore();

export default class Index extends Component {

    render() {

        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}
