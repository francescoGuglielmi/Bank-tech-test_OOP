class Statement {

  constructor(account) {
    this.account = account
  }

  formatCredit(transaction) {
    return transaction.type === 'credit' ? (' ' + transaction.amount.toFixed(2) + ' ') : ' ';
  }

  formatDebit(transaction) {
    return transaction.type === 'debit' ? (' ' + transaction.amount.toFixed(2) + ' ') : ' ';
  }

  generate() {
    let grid = 'date || credit || debit || balance\n'
    const sortedTransactions = this.account.transactions.reverse();
    for (let i = 0; i < sortedTransactions.length; i++) {
      grid += sortedTransactions[i].date + ' ||' +
              this.formatCredit(sortedTransactions[i]) + '||' +
              this.formatDebit(sortedTransactions[i]) + '|| ' +
              sortedTransactions[i].balance.toFixed(2) + '\n'
    }
    return grid
  }

}

module.exports = Statement;