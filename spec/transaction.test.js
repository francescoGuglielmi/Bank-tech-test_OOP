const Transaction = require('../src/transaction');

describe('Transaction', () => {

  test('it stores the data of a transaction', () => {
    const transaction = new Transaction('credit', 1000, 1000);

    expect(transaction.type).toEqual('credit');
    expect(transaction.amount).toEqual(1000);
    expect(transaction.date).toEqual(new Date().toLocaleDateString());
  })
  
})