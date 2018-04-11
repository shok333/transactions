import React, {Component} from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Auth from './containers/AuthContainer';
import TransactionsContainer from './containers/TransactionsContainer';
import AddTransaction from './components/AddTransaction';
import NavBarContainer from 'Root/containers/NavBarContainer'
import {bindActionCreators} from 'redux';
import {previousSessionAuthAction} from './redux/actions/authActions';

class Router extends Component {
    render () {
        const { userHasAuthenticated, previousSessionAuthenticationHasChecked } = this.props;

        if (previousSessionAuthenticationHasChecked) {
            return (
              <BrowserRouter>
                  <Switch>
                      <Route exact path="/auth" render={
                        () => userHasAuthenticated
                            ? <Redirect to="/" />
                            : <Auth/>
                      } />
                      <Route exact path="/" render={
                        () => userHasAuthenticated
                            ? <div>
                                  <NavBarContainer />
                                  <TransactionsContainer />
                              </div>
                            : <Redirect to="/auth" />
                      } />
                      <Route exact path="/add-transaction" render={
                        () => userHasAuthenticated
                            ? <div>
                                  <NavBarContainer />
                                  <AddTransaction />
                              </div>
                            : <Redirect to="/" />
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



//export default class Router extends Component {
//    render () {
//        return (
//            <Switch>
//                <Route exact path="/auth" component={Auth} />
//                <PrivateRoute />
//            </Switch>
//        );
//    }
//}
