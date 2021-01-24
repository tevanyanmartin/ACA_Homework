class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }

    get positionEmployee() {
        return this.position
    }

    set positionEmployee(pos) {
        this.position = pos
    }

    getFullName() {
        return `${this.firstName}  ${this.lastName}`;
    }

    getAnnularSalary() {
        return this.salary * 12
    }

    raiseSalary(percent) {
        this.salary = percent;
    }

    toString() {
        return `id: ${this.id}, Name: ${this.firstName}, last name: ${this.lastName}, position: ${this.position}, salary: ${this.salary}, workHours: ${this.workingHours}.`
    }
}

let emp = new Employee(1, 'Martin', 'Tevanyan', 'manager', 150000, 8)

// _______________________________________________________________2________________________________

class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    getNandB(key) {
        return this[key]
    }

    setNandB(key, value) {
        this[key] = value
    }

    debit(amount) {
        if (this.balance < amount) {
            return 'Amount exceeded balance.'
        } else {
            this.balance -= amount
            return this.balance
        }
    }

    transferTo(anotherAcc, amount) {
        if (this.balance < amount) {
            return 'Amount exceeded balance.'
        } else {
            this.balance -= amount
            anotherAcc.balance += amount
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance) {
            return true
        }
        return false
    }

    toString() {
        return `id: ${this.id}, Name: ${this.name},balance: ${this.balance}.`
    }

}

let acc = new Account(1, 'Martin', 500)
let acc2 = new Account(1, 'Martin', 500)

// _____________________________________3_________________________________


class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age
    }

    getMethod(key) {
        return this[key]
    }

    setMethod(key, value) {
        this[key] = value
    }

    toString() {
        return `first Name: ${this.firstName}, last Name: ${this.lastName}, gender: ${this.gender}, age:${this.age}.`
    }
}

class student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age);
        this.program = [program];
        this.year = year;
        this.fee = fee;
    }

    passExam(programName, grade) {
        this.program[0] = programName;
        this.program[1] = grade;
        if (grade >= 50){
            this.year++;
            return 'congratulation you take the next course';
        }else{
            return 'sorry you didn’t take the next course'
        }
    }
    toString() {
        return `Student info, first Name: ${this.firstName}, last Name: ${this.lastName}, gender: ${this.gender}, age:${this.age},program: ${this.program[0]}, grade: ${this.program[1]}, year: ${this.year}, fee: ${this.fee}.`
    }
}

let st = new student('john', 'Doe', 'male', '22', ['Languages', 18], 2021, 25000)
