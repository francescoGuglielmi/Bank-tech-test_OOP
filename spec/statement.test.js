const Statement = require('../src/statement');
const Account = require('../src/account');
jest.mock('../src/account');
let mockAccount;
let statement;

describe('statement', () => {
  
  beforeEach(() => {
    Account.mockClear();
    mockAccount = new Account();
    statement = new Statement(mockAccount);
  })

  describe('formatCredit', () => {

    test('it leaves an empty space if the transaction is not a credit', () => {
      const transaction = {type: 'debit', amount: 200, date: '19/04/2023', balance: 300};
      expect(statement.formatCredit(transaction)).toBe(' ');
    })

    test('it returns the credit amount if the transaction is a credit', () => {
      const transaction = {type: 'credit', amount: 200, date: '19/04/2023', balance: 300};
      expect(statement.formatCredit(transaction)).toBe(' 200.00 ');
    })

  })

  describe('formatDebit', () => {

    test('it leaves an empty space if the transaction is not a credit', () => {
      const transaction = {type: 'credit', amount: 200, date: '19/04/2023', balance: 300};
      expect(statement.formatDebit(transaction)).toBe(' ')
    })

    test('it returns the debit amount if the transaction is a credit', () => {
      const transaction = {type: 'debit', amount: 200, date: '19/04/2023', balance: 300};
      expect(statement.formatDebit(transaction)).toBe(' 200.00 ');
    })

  })

  describe('generate', () => {

    test('it prints the statement for the account passed as a parameter of the class', () => {
      const mockTransactions = [
        {type: 'credit', amount: 500.00, date: '14/04/2023', balance: 500.00},
        {type: 'debit', amount: 150.00, date: '15/04/2023', balance: 350.00},
      ];
      mockAccount.transactions = mockTransactions;

      expect(statement.generate()).toBe('date || credit || debit || balance\n15/04/2023 || || 150.00 || 350.00\n14/04/2023 || 500.00 || || 500.00\n');
    })

  })

})