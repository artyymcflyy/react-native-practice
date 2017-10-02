//React
import React, {Component} from 'react';
import { Text } from 'react-native';
//React-Redux
import { connect } from 'react-redux';
//Redux
import { bindActionCreators } from 'redux';

import * as UsersActions from '../../../actions/UsersActions';
//Components
import Details from '../../../components/details/Details';

class DetailsScreen extends Component {
    constructor(props, context){
        super(props, context);

        //this.showDetailsScreen = this.showDetailsScreen.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchUsers({ id: 0 });
    }

    goBackHome(){
        const backAction = NavigationActions.back();

        this.props.navigation.dispatch(backAction);
    }

    render(){
        const { user } = this.props;
        const onPress = {
            loadPreviousMonth: this.loadPreviousMonth
        };

        return(
            <Details user={ user } goBack={this.goBackHome} />
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UsersActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);