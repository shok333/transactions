import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class AddTransaction extends Component {
    constructor (props) {
        super(props);

        this.state = {
            id: 0,
            amount: 0,
            bankId: this.props.listOfBanks[0].id
        };

        this.addNewTransactionHandler = this.props.addNewTransactionHandler.bind(this);
    }

    changeAmount = (event) => {
        this.setState({amount: +event.currentTarget.value});
    };

    changeBankId = (event) => {
        this.setState({bankId: +event.currentTarget.value});
    };

    render () {
        const {listOfBanks} = this.props,
        listOfBanksOptions = listOfBanks.map((item) => {
            const {id, name} = item;
            return (
                <option key={id} value={id}>{name}</option>
            )
        });

        return (
            <form action="" onSubmit={this.addNewTransactionHandler}>
                <input type="number" required placeholder="количество транзакций" onChange={this.changeAmount} />
                <select onChange={this.changeBankId}>
                    {listOfBanksOptions}
                </select>
                <input type="submit"/>
            </form>
        )
    }
}
