import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from './containers/AuthContainer';
import AppForAuthenticatedUsers from './containers/AppForAuthenticatedUsers';

export default (
    <Switch>
        <Route exact path="/auth" component={Auth} />
        <Route path="" component={AppForAuthenticatedUsers} />
    </Switch>
);