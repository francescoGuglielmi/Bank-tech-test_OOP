const Account = require('../src/account');
const Transaction = require('../src/transaction');

describe('Account', () => {

  describe('amountValidate method', () => {

    test(('throws an error if the amount is not a number'), () => {
      const account = new Account();

      expect(() => {
        account.amountValidate('hello')
      }).toThrow('The input must be a number');
    })

    test(('throws an error if the amount is negative'), () => {
      const account = new Account();

      expect(() => {
        account.amountValidate(-600)
      }).toThrow('The input must be positive');
    })

  })

})