import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authRequestAction} from 'root/redux/actions/authActions';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };
    }

    submitAuthForm = (event) => {
        event.preventDefault();


        const {login, password} = this.state;

        this.props.authRequest({
            login,
            password,
        });
    }

    changeLogin = (event) => {
        this.setState({login: event.currentTarget.value});
    };

    changePassword = (event) => {
        this.setState({password: event.currentTarget.value});
    };

    render () {
        return <form onSubmit={this.submitAuthForm}>
            <input type="text" required placeholder="логин" onChange={this.changeLogin} />
            <input type="text" required placeholder="пароль" onChange={this.changePassword} />
            <input type="submit"/>
        </form>
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        authRequest: bindActionCreators(authRequestAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);