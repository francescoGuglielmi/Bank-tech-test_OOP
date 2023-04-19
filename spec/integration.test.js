const App = require('../src/app');
const Account = require('../src/account');
const Statement = require('../src/statement');
let account;
let statement;
let app;

describe('App', () => {

  beforeEach(() => {
    account = new Account();
    statement = new Statement(account);
    app = new App(statement);
  })

  test('it deposits an amount to the account', () => {
    expect(app.deposit(100.35)).toEqual('Deposited £100.35, current balance: £100.35')
    expect(app.account.currentBalance).toBe(100.35);
  })

  test('it withdraws an amount from the account', () => {
    app.deposit(500);
    expect(app.withdraw(200)).toEqual('Withdrawn £200, current balance: £300')
    expect(app.account.currentBalance).toBe(300)
  })

  test('it prints the statement on the console', () => {
    app.deposit(500);
    app.withdraw(300);
    expect(app.printStatement()).toBe(`date || credit || debit || balance\n${new Date().toLocaleDateString()} || || 300.00 || 200.00\n${new Date().toLocaleDateString()} || 500.00 || || 500.00\n`)
  })

})