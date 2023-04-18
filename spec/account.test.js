const Account = require('../src/account');
// const Transaction = require('../src/transaction');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  })

  describe('amountValidate', () => {

    test('throws an error if the amount is not a number', () => {
      expect(() => {
        account.amountValidate('hello')
      }).toThrow('The input must be a number');
    })

    test(('throws an error if the amount is negative'), () => {
      expect(() => {
        account.amountValidate(-600)
      }).toThrow('The input must be positive');
    })

  })

  describe('withdrawValidate', () => {
    
    test('it throws an error if the amount for withdrawal is higher than the currentBalance', () => {
      expect(() => {
        account.withdrawValidate(100)
      }).toThrow('You do not have enough funds in your account.');
    })

  })

  describe('deposit', () => {
    
    test('adds a certain amount to the currentBalance', () => {
      expect(account.deposit(500)).toBe('Deposited £500, current balance: £500');
    })

  })

})