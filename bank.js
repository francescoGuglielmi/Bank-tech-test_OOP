const Account = require('./src/account');
const Statement = require('./src/statement');
const App = require('./src/app');

const account = new Account();
const statement = new Statement(account);
const bank = new App(statement);

module.exports = bank;