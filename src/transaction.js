class Transaction {
  
  constructor(type, amount) {
    this.type = type,
    this.amount = amount,
    this.date = new Date().toLocaleDateString()
  }

}

module.exports = Transaction;