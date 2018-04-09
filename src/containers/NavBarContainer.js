import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {logoutAction} from '../redux/actions/authActions';

import NavBar from '../components/NavBar';

class NavBarContainer extends Component {
    logoutHandler = (event) => {
        event.preventDefault();
        this.props.logout();
    }

    render () {
        return (
            <NavBar logoutHandler={this.logoutHandler}/>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: bindActionCreators(logoutAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);