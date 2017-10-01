//React
import React, {Component} from 'react';
import { Text } from 'react-native';
//React-Redux
import { connect } from 'react-redux';
//Redux
import { bindActionCreators } from 'redux';

import * as UsersActions from '../../../actions/UsersActions';

class DetailsScreen extends Component {
    constructor(props, context){
        super(props, context);

        //this.showDetailsScreen = this.showDetailsScreen.bind(this);
    }

    static navigationOptions = {
        header: {
            visible: false,
        }
    };

    componentDidMount() {
        this.props.actions.fetchUsers({ id: 0 });
    }

    render(){
        const {month} = this.props;
        const onPress = {
            loadPreviousMonth: this.loadPreviousMonth
        };

        return(
            <Text>Hey</Text>
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