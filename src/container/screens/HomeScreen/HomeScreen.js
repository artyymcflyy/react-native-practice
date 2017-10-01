//React
import React, {Component} from 'react';
//React-Redux
import { connect } from 'react-redux';
//Redux
import { bindActionCreators } from 'redux';

import * as TripsActions from '../../../actions/TripsActions';
import * as UsersActions from '../../../actions/UsersActions';


import Home from '../../../components/home/home';

class HomeScreen extends Component {
    constructor(props, context){
        super(props, context);
        //this.showTripsScreen = this.showTripsScreen.bind(this);
        this.showUsersScreen = this.showUsersScreen.bind(this);
    }

    static navigationOptions = {
        header: {
            visible: false,
        }
    };

    /*showTripsScreen(){
        const { navigate } = this.props.navigation;

        navigate('Trips');
    }*/

    showUsersScreen(){
        const { navigate } = this.props.navigation;

        navigate('Users');
    }

    render(){
        return(
            <Home onPress={this.showUsersScreen}/>
        );
    }
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UsersActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);