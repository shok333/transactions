import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddTransaction from '../components/AddTransaction';
import { addTransactionAction } from '../redux/actions/transactionsActions';

class AddTransactionContainer extends Component {
    constructor (props) {
        super(props);

        const {
            listOfBanksHasLoaded,
            loadListOfBanks
        } = this.props;

        if (!listOfBanksHasLoaded) {
            loadListOfBanks();
        }
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionContainer);

