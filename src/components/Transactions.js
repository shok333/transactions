import React, {Component} from 'react';

export default class Transactions extends Component {
    render () {
        const {
            listOfTransactionsHasLoaded,
            listOfBanksHasLoaded,
            listOfTransactions,
            getBankNameUsingIBankId,
            removeTransactionHandler
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
                 <td>{getBankNameUsingIBankId(bankId)}</td>
                 <td><button data-id={id} onClick={removeTransactionHandler}>Удалить транзакцию</button></td>
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

