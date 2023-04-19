class Statement {

  constructor(account) {
    this.account = account
  }

  formatCredit(transaction) {
    return transaction.type === 'credit' ? transaction.amount : ' ';
  }

  formatDebit(transaction) {
    return transaction.type === 'debit' ? transaction.amount : ' ';
  }

  generate() {

  }

}

module.exports = Statement;