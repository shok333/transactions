import React, {Component} from 'react';
import Router from '../Router';

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                {Router}
            </div>
        );
    }
}