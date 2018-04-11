import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {loadListOfBanksAction} from 'Root/redux/actions/banksActions';
import {addTransactionAction} from 'Root/redux/actions/transactionsActions';

class AddTransaction extends Component {
    constructor (props) {
        super(props);

        this.state = {
            id: 0,
            amount: 0,
            bankId: 0
        };

        //this.addNewTransactionHandler = this.props.addNewTransactionHandler.bind(this);
    }

    addNewTransactionHandler (event) {
        event.preventDefault();

        const {amount, bankId} = this.state;

        this.props.addTransaction({
            amount,
            bankId,
        });
    }

    changeAmount = (event) => {
        this.setState({amount: +event.currentTarget.value});
    };

    changeBankId = (event) => {
        this.setState({bankId: +event.currentTarget.value});
    };

    render () {
        const {listOfBanks, listOfBanksHasLoaded} = this.props;
        if (listOfBanksHasLoaded) {
            //todo default props
            const
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

        return false;
    }

    componentDidMount () {
        this.props.loadListOfBanks();
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
        loadListOfBanks: bindActionCreators(loadListOfBanksAction, dispatch),
    }
}

//AddTransactionContainer.propTypes = {
//  addTransaction: PropTypes.func.isRequired,
//  listOfTransactionsHasLoaded: PropTypes.bool,
//  listOfTransactions: PropTypes.arrayOf(
//    PropTypes.shape({
//      id: PropTypes.number,
//      amount: PropTypes.number,
//      bankId: PropTypes.number
//    })
//  )
//};

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction);
