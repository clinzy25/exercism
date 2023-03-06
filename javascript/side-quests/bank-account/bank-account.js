export class BankAccount {
  constructor() {
    this.accountState = false;
  }

  open() {
    if (!this.accountState) {
      this.accountState = true;
      this.accountBalance = 0;
    } else {
      throw new ValueError('This account is already open');
    }
  }

  close() {
    if (this.accountState) {
      this.accountState = false;
      this.accountBalance = 0;
    } else {
      throw new ValueError('This account is already closed');
    }
  }

  deposit(amt) {
    if (this.accountState && amt > 0) this.accountBalance += amt;
    else throw new ValueError('This account is closed');
  }

  withdraw(amt) {
    if (amt < 0) {
      throw new ValueError('Please enter a positive number');
    }
    if (this.accountBalance < amt) {
      throw new ValueError('Not enough funds');
    }
    if (this.accountState) {
      this.accountBalance -= amt;
    } else {
      throw new ValueError('This account is closed');
    }
  }

  get balance() {
    if (this.accountState) {
      return this.accountBalance;
    } else {
      throw new ValueError('This account is closed');
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
