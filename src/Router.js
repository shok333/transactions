import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './containers/AuthContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import AddTransactionContainer from './containers/AddTransactionContainer';
import NavBarContainer from 'Root/containers/NavBarContainer'

class PrivateRoute extends Component {
    render () {
        const { userHasAuthenticated, previousSessionAuthenticationHasChecked } = this.props;

        if (previousSessionAuthenticationHasChecked) {
            if (!userHasAuthenticated) {
                return <Redirect to="/auth" />
            } else {
                return (
                    <div>
                        <NavBarContainer />
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

PrivateRoute = connect(mapStateToProps)(PrivateRoute);



export default class Router extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/auth" component={Auth} />
                <PrivateRoute />
            </Switch>
        );
    }
}
