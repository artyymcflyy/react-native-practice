//React
import React, {Component} from 'react';
//React-Redux
import { connect } from 'react-redux';
//Redux
import { bindActionCreators } from 'redux';

import * as MonthActions from '../../../actions/MonthActions';


import Home from '../../../components/home/home';

class HomeScreen extends Component {
    constructor(props, context){
        super(props, context);

        this.showUsersScreen = this.showUsersScreen.bind(this);
        this.loadNextMonth = this.loadNextMonth.bind(this);
        this.loadPreviousMonth = this.loadPreviousMonth.bind(this);
    }

    static navigationOptions = {
        header: {
            visible: false,
        }
    };

    componentDidMount() {
        this.props.actions.fetchMonth({ user_id: 0 });
    }

    /*showTripsScreen(){
        const { navigate } = this.props.navigation;

        navigate('Trips');
    }*/

    showUsersScreen(){
        const { navigate } = this.props.navigation;

        navigate('Users');
    }

    loadNextMonth(){
        // const {month} = this.props;

        alert('next month');
    }

    loadPreviousMonth(){
        // const {month} = this.props;

        alert('previous month');
    }

    render(){
        return(
            <Home months={this.props.months} onPress={this.showUsersScreen} onPressSelectorLeft={this.loadPreviousMonth} onPressSelectorRight={this.loadNextMonth}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        months: state.months
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MonthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);