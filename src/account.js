const Transaction = require('./transaction');

class Account {
  
  constructor() {
    this.currentBalance = 0.00
    this.transactions = []
  }

  withdraw(amount) {
    this.amountValidate(amount);
    this.withdrawValidate(amount);
    this.transactions.push(
      new Transaction('debit', amount, this.currentBalance)
    );
    this.currentBalance -= amount;
    return `Withdrawn £${amount}, current balance: £${this.currentBalance}`
  }

  deposit(amount) {
    this.amountValidate(amount);
    this.transactions.push(
      new Transaction('credit', amount, this.currentBalance)
    );
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