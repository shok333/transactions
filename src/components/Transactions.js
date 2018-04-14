import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {removeTransactionAction} from 'Actions/transactionsActions';

class Transactions extends Component {
    getBankNameUsingIBankId = (id) => { //Массив должен быть отсортирован по id по возрастанию
        const {listOfBanks} = this.props;

        let targetBankName = null;

        var mid, low = 0, high = listOfBanks.length-1;

        while (listOfBanks[low].id < id && listOfBanks[high].id > id)
        {
            mid = low + Math.floor( ((id-listOfBanks[low].id)*(high-low))/(listOfBanks[high].id-listOfBanks[low].id) );

            if (listOfBanks[mid].id < id) {
                low = mid + 1;
            } else if (listOfBanks[mid].id > id) {
                high = mid-1;
            }
            else {
                targetBankName = listOfBanks[mid].name;
                break;
            }
        }

        if (listOfBanks[low].id === id) {
            targetBankName = listOfBanks[low].name;
        }
        else if (listOfBanks[high].id === id) {
            targetBankName = listOfBanks[high].name;
        }

        return targetBankName;
    };

    removeTransactionHandler = (event) => {
        this.props.removeTransaction(event.currentTarget.dataset.id);
    };

    render () {
        const {
            listOfTransactionsHasLoaded,
            listOfBanksHasLoaded,
            listOfTransactions,
        } = this.props;

        if (!listOfTransactionsHasLoaded && !listOfBanksHasLoaded) {
            return null;
        }

        const tableElement = listOfTransactions.map((item) => {
            const { id, bankId, amount } = item;
            return (
               <tr key={id}>
                 <td>{id}</td>
                 <td>{amount}</td>
                 <td>{this.getBankNameUsingIBankId(bankId)}</td>
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

// TransactionsContainer.propTypes = {
//     removeTransaction: PropTypes.func.isRequired,
//     listOfTransactionsHasLoaded: PropTypes.bool,
//     listOfBanksHasLoaded: PropTypes.bool,
//     listOfBanks: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number,
//             name: PropTypes.string
//         })
//     ),
//     listOfTransactions: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number,
//             amount: PropTypes.number,
//             bankId: PropTypes.number
//         })
//     ),
// };


export default connect(mapStateToProps, mapDispatchToProps)(Transactions);