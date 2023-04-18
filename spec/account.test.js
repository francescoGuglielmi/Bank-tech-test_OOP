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

    test('adds a certain amount to the currentBalance and verifies it', () => {
      expect(account.deposit(500)).toBe('Deposited £500, current balance: £500');
      expect(account.deposit(200.35)).toBe('Deposited £200.35, current balance: £700.35');
      expect(account.transactions[0]).toEqual({ type: 'credit', amount: 500, date: new Date().toLocaleDateString(), balance: 500.00 });
      expect(account.transactions[1]).toEqual({ type: 'credit', amount: 200.35, date: new Date().toLocaleDateString(), balance: 700.35 });
      expect(account.currentBalance).toBe(700.35);
    })

  })

  describe('withdraw', () => {

    test('it withdraws a certain amount from the currentBalance', () => {
      account.deposit(1000);
      expect(account.withdraw(1000)).toBe('Withdrawn £1000, current balance: £0');
    })

    test('it withdraws a certain amount from the currentBalance and verifies it', () => {
      account.deposit(1000);
      expect(account.withdraw(600)).toBe('Withdrawn £600, current balance: £400');
      expect(account.withdraw(100.99)).toBe('Withdrawn £100.99, current balance: £299.01');
      expect(account.transactions[1]).toEqual({ type: 'debit', amount: 600, date: new Date().toLocaleDateString(), balance: 400 });
      expect(account.transactions[2]).toEqual({ type: 'debit', amount: 100.99, date: new Date().toLocaleDateString(), balance: 299.01 });
      expect(account.currentBalance).toBe(299.01);
    });

  })
  
})