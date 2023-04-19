const Account = require('./src/account');
const Statement = require('./src/statement');

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
    
  }

}

module.exports = App;

const account = new Account();
const bankStatement = new Statement(account);
const app = new App(bankStatement);


