class BankAccount {
    constructor(firstName,lastName, middleName,accountType,balance) {
        this.firstName= firstName
        this.lastnme = lastName
        this.middleName = middleName
        this.balance = balance
        this.status = status       
    }

    deposit(amount) {
        this.balance += amount 
    }
}

let account = new BankAccount(100, "checking") 
console.log(account)
account.deposit(75) 
console.log(account)
