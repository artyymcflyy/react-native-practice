//React
import React, { Component } from 'react';
//Redux
import { bindActionCreators } from 'redux';
//React-Redux
import { connect } from 'react-redux';

import { NavigationActions } from 'react-navigation';
//Components
import UsersList from '../../../components/users/UsersList';

import * as UsersActions from '../../../actions/UsersActions';

class UserScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.userSelected = this.userSelected.bind(this);
        this.goBackHome = this.goBackHome.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchUsers({ user_id: 1 });
    }

    userSelected() {
        alert('You have clicked a user!');
    }

    goBackHome(){
        const backAction = NavigationActions.back();

        this.props.navigation.dispatch(backAction);
    }

    render() {
        const { users } = this.props;

        return (
            <UsersList users={ users } onPress={ this.userSelected } goBack={this.goBackHome} />
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.lastMonthsUsers,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UsersActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
