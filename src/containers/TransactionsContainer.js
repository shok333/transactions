import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeTransactionAction} from '../redux/actions/transactionsActions';
import Transactions from '../components/Transactions';
import PropTypes from 'prop-types';

class TransactionsContainer extends Component {
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

function mapStateToProps(state) {
    return {
        ...state.transactions,
        ...state.banks,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeTransaction: bindActionCreators(removeTransactionAction, dispatch),
    }
}

TransactionsContainer.propTypes = {
    removeTransaction: PropTypes.func.isRequired,
    listOfTransactionsHasLoaded: PropTypes.bool,
    listOfBanksHasLoaded: PropTypes.bool,
    listOfBanks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      })
    ),
    listOfTransactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          amount: PropTypes.number,
          bankId: PropTypes.number
        })
    ),
};


export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);

