import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Auth from 'Components/Auth';
import Transactions from 'Components/Transactions';
import AddTransaction from 'Components/AddTransaction';
import NavBar from 'Components/NavBar'
import {bindActionCreators} from 'redux';
import {previousSessionAuthAction} from 'Actions/authActions';

class Router extends Component {
    render () {
        const { userHasAuthenticated, previousSessionAuthenticationHasChecked } = this.props;

        if (previousSessionAuthenticationHasChecked) {
            return (
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/auth" render={
                        () => userHasAuthenticated
                            ? <Redirect to="/add-transaction" />
                            : <Auth/>
                      } />
                      <Route exact path="/" render={
                        () => userHasAuthenticated
                            ? <div>
                                  <NavBar />
                                  <Transactions />
                              </div>
                            : <Redirect to="/auth" />
                      } />
                      <Route exact path="/add-transaction" render={
                        () => userHasAuthenticated
                            ? <div>
                                  <NavBar />
                                  <AddTransaction />
                              </div>
                            : <Redirect to="/auth" />
                      } />
                  </Switch>
              </BrowserRouter>
            )
        }

        return null;
    }

    componentDidMount () {
        this.props.previousSessionAuth();
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

export default connect(mapStateToProps, mapDispatchToProps)(Router);