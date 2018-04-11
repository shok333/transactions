import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AddTransaction from '../components/AddTransaction';
import {addTransactionAction} from '../redux/actions/transactionsActions';
import {loadListOfBanksAction} from '../redux/actions/banksActions';
import {previousSessionAuthAction} from '../redux/actions/authActions';


class AddTransactionContainer extends Component {
    constructor (props) {
        super(props);

        const {
            listOfBanksHasLoaded,
            loadListOfBanks,
            previousSessionAuth,
        } = this.props;

        if (!listOfBanksHasLoaded) {
            loadListOfBanks();
        }

        previousSessionAuth();
    }

    addNewTransactionHandler () {
        const addTransaction = this.props.addTransaction;

        return function (event) {
            event.preventDefault();

            const {amount, bankId} = this.state;

            addTransaction({
                amount,
                bankId,
            });
        }
    }

    render () {
        const {listOfBanks} = this.props;

        return <AddTransaction
            addNewTransactionHandler = {this.addNewTransactionHandler()}
            listOfBanks = {listOfBanks}
        />
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
        previousSessionAuth: bindActionCreators(previousSessionAuthAction, dispatch),
    }
}

AddTransactionContainer.propTypes = {
    addTransaction: PropTypes.func.isRequired,
    listOfTransactionsHasLoaded: PropTypes.bool,
    listOfTransactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            amount: PropTypes.number,
            bankId: PropTypes.number
        })
    )
};


export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionContainer);

