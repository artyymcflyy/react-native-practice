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

        this.showTabsScreen = this.showTabsScreen.bind(this);
        this.showTripsScreen = this.showTripsScreen.bind(this);
        this.showTravelersScreen = this.showTravelersScreen.bind(this);
        this.loadCurrentMonth = this.loadCurrentMonth.bind(this);
        this.loadNextMonth = this.loadNextMonth.bind(this);
        this.loadPreviousMonth = this.loadPreviousMonth.bind(this);
    }

    componentDidMount() {
        this.loadCurrentMonth(0);
    }

    showTabsScreen(){
        const { navigate } = this.props.navigation;

        navigate('Tabs');
    }

    loadCurrentMonth(id){
        this.props.actions.fetchMonth(id);
    }

    loadNextMonth(){
        const {month} = this.props;

        const currentId = month.id;

        if(currentId < 3){
            this.loadCurrentMonth(currentId+1);
        }

    }

    loadPreviousMonth(){
        const {month} = this.props;

        const currentId = month.id;

        if(currentId > 0){
            this.loadCurrentMonth(currentId-1);
        }
    }

    showTripsScreen(){
        const { navigate } = this.props.navigation;

        navigate('Trips');
    }

    showTravelersScreen(){
        const { navigate } = this.props.navigation;

        navigate('Users');
    }

    render(){
        const {month} = this.props;
        const onPress = {
            showTabsScreen: this.showTabsScreen,
            showTripsScreen: this.showTripsScreen,
            showTravelersScreen: this.showTravelersScreen,
            loadPreviousMonth: this.loadPreviousMonth,
            loadNextMonth: this.loadNextMonth
        };

        return(
            <Home month={month} onPress={onPress}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        month: state.month.currentMonth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MonthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);