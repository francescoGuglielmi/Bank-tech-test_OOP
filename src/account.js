const Transaction = require('./transaction');

class Account {
  
  constructor() {
    this.balance = 0.00
    this.transactions = []
  }

  withdraw(amount) {

  }

  deposit(amount) {

  }

  amountValidate(amount) {
    if (!(typeof amount === 'number')) {
      throw 'The input must be a number';
    } else if (amount <= 0) {
      throw 'The input must be positive';
    }
  }

  withdrawValidate(amount) {
    if (amount > this.balance) {
      throw 'You do not have enough funds in your account.';
    }
  }

}

module.exports = Account;