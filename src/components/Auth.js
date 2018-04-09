import React, {Component} from 'react';

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            password: ''
        };

        this.submitAuthForm = this.props.submitAuthForm.bind(this);
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