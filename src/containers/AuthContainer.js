import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { authRequestAction } from '../redux/actions/authActions';

import Auth from '../components/Auth';

class AuthContainer extends Component {
    submitAuthForm () {

        const authRequest = this.props.authRequest;

        return function (event) {
            event.preventDefault();
            authRequest({
                login: this.state.login,
                password: this.state.password
            });
        }
    }

    render () {
        const { userHasAuthenticated } = this.props;

        if (userHasAuthenticated) {
            return <Redirect to="/" />
        }

        return <Auth submitAuthForm={this.submitAuthForm()} />
    }
}

function mapStateToProps(state) {
    return {
        userHasAuthenticated: state.auth.userHasAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authRequest: bindActionCreators(authRequestAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
