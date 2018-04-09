import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Route } from 'react-router-dom';
import {previousSessionAuthAction} from '../redux/actions/authActions';
import NavbarContainer from '../containers/NavbarContainer'
import TransactionsContainer from './TransactionsContainer';
import AddTransactionContainer from './AddTransactionContainer';
import PropTypes from 'prop-types';

class AppForAuthenticatedUsers extends Component {
    constructor (props) {
        super(props);
        this.props.previousSessionAuth();
    }

    render () {
        const { userHasAuthenticated, previousSessionAuthenticationHasChecked } = this.props;

        if (previousSessionAuthenticationHasChecked) {
            if (!userHasAuthenticated) {
                return <Redirect to="/auth" />
            } else {
                return (
                    <div>
                        <NavbarContainer />
                        <Route exact path="/" component={TransactionsContainer} />
                        <Route exact path="/add-transaction" component={AddTransactionContainer} />
                    </div>
                );
            }
        }   else {
            return <Redirect to="/auth" />
        }
    }
}

function mapStateToProps(state) {
    return {
        ...state.auth,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        previousSessionAuth: bindActionCreators(previousSessionAuthAction, dispatch),
    }
}

AppForAuthenticatedUsers.propTypes = {
    previousSessionAuthenticationHasChecked: PropTypes.bool,
    userHasAuthenticated: PropTypes.bool,
    previousSessionAuth: PropTypes.func.isRequired
};

AppForAuthenticatedUsers.defaultProps = {
    listOfTransactionsHasLoaded: false,
    listOfTransactions: false
};

export default connect(mapStateToProps, mapDispatchToProps)(AppForAuthenticatedUsers);
