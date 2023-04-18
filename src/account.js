const Transaction = require('./transaction');

class Account {
  
  constructor() {
    this.currentBalance = 0.00
    this.transactions = []
  }

  withdraw(amount) {

  }

  deposit(amount) {
    this.currentBalance += amount;
    return `Deposited £${amount}, current balance: £${this.currentBalance}`;
  }

  amountValidate(amount) {
    if (!(typeof amount === 'number')) {
      throw 'The input must be a number';
    } else if (amount <= 0) {
      throw 'The input must be positive';
    }
  }

  withdrawValidate(amount) {
    if (amount > this.currentBalance) {
      throw 'You do not have enough funds in your account.';
    }
  }



}

module.exports = Account;