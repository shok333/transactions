import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';

export default class NavBar extends Component {
    render () {
        return (
            <nav className="navigation">
              <ul>
                <li><NavLink to="/">Список транзакций</NavLink></li>
                <li><NavLink to="/add-transaction">Добавить транзакцию</NavLink></li>
                <li><a href="" onClick={this.props.logoutHandler}>Выйти</a></li>
              </ul>
            </nav>
        )
    }
}
