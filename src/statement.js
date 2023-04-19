class Statement {

  constructor(account) {
    this.account = account
  }

  formatCredit(transaction) {
    return transaction.type === 'credit' ? transaction.amount : ' ';
  }

  formatDebit(transaction) {
    
  }

  generate() {

  }

}

module.exports = Statement;