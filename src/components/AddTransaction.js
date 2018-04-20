import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTransactionAction} from 'root/redux/actions/transactionsActions';

class AddTransaction extends Component {
    constructor (props) {
        super(props);

        this.state = {
            amount: 0,
            bankId: null
        };
    }

    addNewTransactionHandler = (event) => {
        event.preventDefault();

        const {amount, bankId} = this.state;

        this.props.addTransaction({
            amount,
            bankId
        });
    };

    changeAmount = (event) => {
        this.setState({
            amount: +event.currentTarget.value,
            bankId: this.state.bankId ? this.state.bankId : this.props.listOfBanks[0][0],
        });
    };

    changeBankId = (event) => {
        this.setState({bankId: +event.currentTarget.value});
    };

    render () {
        const {listOfBanks, listOfBanksHasLoaded} = this.props;

        if (listOfBanksHasLoaded) {
            const listOfBanksOptions = listOfBanks.map((item) => {
                const [id, name] = item;

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
            );
        }

        return false;
    }
}

function mapStateToProps(state) {
    return {
        ...state.banks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTransaction: bindActionCreators(addTransactionAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
