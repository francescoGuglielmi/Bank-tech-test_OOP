class Transaction {
  
  constructor(type, amount, balance) {
    this.type = type,
    this.amount = amount,
    this.date = new Date().toLocaleDateString(),
    this.balance = balance
  }

}

module.exports = Transaction;