import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from 'root/components/NavBar';

class UserRoute extends Component {
    render () {
        const {userHasAuthenticated, path, exact, component} = this.props;

        if (!userHasAuthenticated){
            return (
                <Redirect to="/auth" />
            )
        } else {
            return (
                <div>
                    <NavBar />
                    <Route exact={exact} path={path} component={component}/>
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        userHasAuthenticated: state.auth.userHasAuthenticated,
    }
}


export default connect(mapStateToProps)(UserRoute);