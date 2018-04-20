import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class GuestRoute extends Component {
    render () {
        const {userHasAuthenticated, path, exact, component} = this.props;

        if (userHasAuthenticated){
            return (
                <Redirect to="/add-transaction" />
            )
        } else {
            return (
                <Route exact={exact} path={path} component={component}/>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        userHasAuthenticated: state.auth.userHasAuthenticated,
    }
}


export default connect(mapStateToProps)(GuestRoute);