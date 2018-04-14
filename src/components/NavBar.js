import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutAction} from 'Actions/authActions';

class NavBar extends Component {
    logoutHandler = (event) => {
        event.preventDefault();
        this.props.logout();
    };

    render () {
        return (
            <nav className="navigation">
              <ul>
                <li><NavLink to="/">Список транзакций</NavLink></li>
                <li><NavLink to="/add-transaction">Добавить транзакцию</NavLink></li>
                <li><a href="" onClick={this.logoutHandler}>Выйти</a></li>
              </ul>
            </nav>
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

// NavBar.propTypes = {
//     logout: PropTypes.func.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);