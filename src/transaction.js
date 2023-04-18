class Transaction {
  
  constructor(type, amount, balance) {
    this.type = type,
    this.amount = amount,
    this.date = new Date().toLocaleDateString(),
    this.balance = this.creditOrDebit(this.type, this.amount, balance)
  }

  // This method's purpose is to test this.balance correctly in unit testing

  creditOrDebit(type, amount, balance) { 
    if (type === 'debit') {
      return balance - amount;
    } else if (type === 'credit') {
      return balance + amount;
    }
  }

}

module.exports = Transaction;