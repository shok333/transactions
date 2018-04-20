import React, {Component} from 'react';
import {Switch, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Auth from 'root/components/Auth';
import Transactions from 'root/components/Transactions';
import AddTransaction from 'root/components/AddTransaction';
import {bindActionCreators} from 'redux';
import {previousSessionAuthAction} from 'root/redux/actions/authActions';
import GuestRoute from 'root/routes/GuestRoute';
import UserRoute from 'root/routes/UserRoute';

class Router extends Component {
    render () {
        const {previousSessionAuthenticationHasChecked} = this.props;

        if (previousSessionAuthenticationHasChecked) {
            return (
              <BrowserRouter>
                  <Switch>
                      <GuestRoute exact path="/auth" component={Auth}/>
                      <UserRoute exact path="/" component={Transactions}/>
                      <UserRoute exact path="/add-transaction" component={AddTransaction}/>
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
        previousSessionAuthenticationHasChecked: state.auth.previousSessionAuthenticationHasChecked,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        previousSessionAuth: bindActionCreators(previousSessionAuthAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);