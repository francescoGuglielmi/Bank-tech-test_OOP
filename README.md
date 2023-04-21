# Bank-tech-test_OOP
The same bank tech test but using OOP! A simple bank program that allows withdrawals and deposits from an account to test the ability to write clean, tested and easily maintenable code.

The program comprises of four classes: Transaction, Account, Statement and App.

- Transaction is the blueprint for a single transaction.
- Account stores the data and performs the transactions.
- Statement uses an instance of Account to print the statement.
- App uses an instance of Statement to perform all the operations in a cleaner way.

Below is a demo on how to use the app in Node.js.

<img src="https://github.com/francescoGuglielmi/Bank-tech-test_OOP/blob/main/public/app_in_use2.png" width="500" >

## Test Coverage

<img src="https://github.com/francescoGuglielmi/Bank-tech-test_OOP/blob/main/public/test_coverage2.png" width="700" >

### Packages Used:

- node.js (for implementing)
- jest.js (for testing)
- eslint.js (for linting)

## Setup

- If you don't have nvm installed do so by running:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

### Inside the project directory:

- Install node 

```
nvm install node
```

- Enable node inside the directory

```
nvm use node
```

- Install all the dependencies by running:

```
npm install
```

- You can also check the test coverage report by running:

```
npx jest --coverage --watchAll=false
```

## Usage

Open node

```
node
```

Require bank.js

```
const bank = require('./bank');
```

Call the functions on the bank variable!

```
bank.deposit(100)  // deposits 100
bank.withdraw(100)  // withdraws 100
bank.printStatement()  // prints the statement
```
