import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadListOfTransactionsAction, removeTransactionAction} from '../redux/actions/transactionsActions';
import {loadListOfBanksAction} from '../redux/actions/banksActions';
import Transactions from '../components/Transactions';

class TransactionsContainer extends Component {
    constructor (props) {
        super(props);

        const {
            listOfTransactionsHasLoaded,
            listOfBanksHasLoaded,
            loadListOfTransactions,
            loadListOfBanks
        } = this.props;

        if (!listOfTransactionsHasLoaded) {
            loadListOfTransactions();
        }

        if (!listOfBanksHasLoaded) {
            loadListOfBanks();
        }
    }

    getBankNameUsingIBankId () {
        const { listOfBanks } = this.props;

        return (id) => {
            let targetBankName = null;

            listOfBanks.forEach((item) => {
                if (item.id === id) {
                    targetBankName = item.name;

                    return;
                }
            });

            return targetBankName;
        }
    }

    removeTransactionHandler () {
        const removeTransaction = this.props.removeTransaction;

        return (event) => removeTransaction(event.currentTarget.dataset.id);
    }

    render () {
        const {
            listOfTransactionsHasLoaded,
            listOfBanksHasLoaded,
            listOfTransactions,
        } = this.props;

        return (
            <Transactions
                listOfTransactionsHasLoaded = {listOfTransactionsHasLoaded}
                listOfBanksHasLoaded = {listOfBanksHasLoaded}
                listOfTransactions = {listOfTransactions}
                getBankNameUsingIBankId = {this.getBankNameUsingIBankId()}
                removeTransactionHandler = {this.removeTransactionHandler()}
            />
        );
    }
}
//todo proptypes
function mapStateToProps(state) {
    return {
        ...state.transactions,
        ...state.banks,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadListOfTransactions: bindActionCreators(loadListOfTransactionsAction, dispatch),
        loadListOfBanks: bindActionCreators(loadListOfBanksAction, dispatch),
        removeTransaction: bindActionCreators(removeTransactionAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);

