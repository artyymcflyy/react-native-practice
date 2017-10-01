//React
import React, {Component} from 'react';
//React-Redux
import { connect } from 'react-redux';
//Redux
import { bindActionCreators } from 'redux';

import * as MonthActions from '../../../actions/MonthActions';

import Home from '../../../components/home/Home';

class HomeScreen extends Component {
    constructor(props, context){
        super(props, context);

        this.showTabsScreen = this.showTabsScreen.bind(this);
        this.showTripsScreen = this.showTripsScreen.bind(this);
        this.showTravelersScreen = this.showTravelersScreen.bind(this);
        this.loadNextMonth = this.loadNextMonth.bind(this);
        this.loadPreviousMonth = this.loadPreviousMonth.bind(this);
    }

    static navigationOptions = {
        header: {
            visible: false,
        }
    };

    componentDidMount() {
        this.props.actions.fetchMonth({ id: 0 });
    }

    showTabsScreen(){
        const { navigate } = this.props.navigation;

        navigate('Tabs');
    }

    showTripsScreen(){
        const { navigate } = this.props.navigation;

        navigate('Trips');
    }

    showTravelersScreen(){
        const { navigate } = this.props.navigation;

        navigate('Users');
    }

    loadNextMonth(){
        const {month} = this.props;

        const currentId = month.id;

        if(currentId < 3){
            this.props.actions.fetchMonth({ id: month.id + 1 });
        }

    }

    loadPreviousMonth(){
        const {month} = this.props;

        const currentId = month.id;

        if(currentId > 0){
            this.props.actions.fetchMonth({ id: month.id - 1 });
        }
    }

    render(){
        const {month} = this.props;
        const onPress = {
            showTripsScreen: this.showTripsScreen,
            showTravelersScreen: this.showTravelersScreen,
            loadPreviousMonth: this.loadPreviousMonth,
            loadNextMonth: this.loadNextMonth
        };

        return(
            <Home month={month} 
                onPress={this.showTabsScreen} 
                onPressSelectorLeft={this.loadPreviousMonth} 
                onPressSelectorRight={this.loadNextMonth}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        month: state.month.singleMonth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MonthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);