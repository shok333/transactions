import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeTransactionAction} from 'root/redux/actions/transactionsActions';

class Transactions extends Component {
    removeTransactionHandler = (event) => {
        this.props.removeTransaction(event.currentTarget.dataset.id);
    };

    render () {
        const {
            listOfTransactionsHasLoaded,
            listOfBanksHasLoaded,
            listOfTransactions,
            listOfBanks,
        } = this.props;

        if (!listOfTransactionsHasLoaded && !listOfBanksHasLoaded) {
            return null;
        }

        const
            listOfBanksMap = new Map(listOfBanks),
            tableElement = listOfTransactions.map((item) => {
                const { id, bankId, amount } = item;
                return (
                   <tr key={id}>
                     <td>{id}</td>
                     <td>{amount}</td>
                     <td>{listOfBanksMap.get(bankId)}</td>
                     <td><button data-id={id} onClick={this.removeTransactionHandler}>Удалить транзакцию</button></td>
                   </tr>
                );
            });

        return (
          <div className="transactions">
            <table>
                <tbody>
                <tr>
                  <th>id</th>
                  <th>количество</th>
                  <th>Название банка</th>
                  <th></th>
                </tr>
                {tableElement}
                </tbody>
            </table>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);