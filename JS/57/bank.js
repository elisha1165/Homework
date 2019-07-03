const account1 = {
    balance: 100
};

const account2 = {
    balance: 450
};

function transaction(amount) {
    'use strict';
    this.balance += amount;
    console.log(this.balance);
}
transaction.call(account1, 25);
transaction.call(account2, 50);