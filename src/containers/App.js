import React, {Component} from 'react';
import Router from '../Router';

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="app-container">
                <Router />
            </div>
        );
    }
}
