const Account = require('./account');
const Statement = require('./statement');

class App {

  constructor(statement) {
    this.account = statement.account;
    this.statement = statement;
  }

  withdraw(amount) {
    let confirmation = this.account.withdraw(amount); 
    return confirmation
  }

  deposit(amount) {
    let confirmation = this.account.deposit(amount);
    return confirmation
  }

  printStatement() {
    let history = this.statement.generate();
    console.log(history)
    return history
  }

}

module.exports = App;









