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
      
      expect(statement.formatCredit(transaction)).toEqual(' ');
    })

    test('it returns the credit amount if the transaction is a credit', () => {
      const transaction = {type: 'credit', amount: 200, date: '19/04/2023', balance: 300};
      
      expect(statement.formatCredit(transaction)).toEqual(200);
    })

  })

})