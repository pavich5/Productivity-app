"use strict";
// interface Student {
//     id?: number;
//     name: string;
//     age: number;
//     major: string;
//   }
const dzeki = {
    name: "dzeki",
    age: 2,
    food: "mace",
    toys: ["koski", "usteKoski"]
};
const jadejne = [];
jadejne.push(2, 3, 2, 31, 23, 12, 3);
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["OFFLINE"] = "offline";
    Status["CANCELLED"] = "cancelled";
})(Status || (Status = {}));
const newDevice = {
    title: "Washing machine",
    status: Status.ACTIVE,
};
const add = (number1, number2) => {
    return number1 + number2;
};
const res = add(2, 5);
const printName = (firstName, lastName, age) => {
    console.log(`${firstName} ${lastName} age:${age}`);
};
// const kire = printName("Kire", "Pavic", 22);
const optionalName = (name) => {
    console.log(`${name || "User"} said fuck of mada faakaaaaa`);
};
// const mile = optionalName("Mileeasdasd");
// interface Product {
//   title: string;
//   stock: number;
//   description: string;
//   category: string;
//   price: number;
//   rating?: number;
// }
// const shoes: Product = {
//   title: "patiki",
//   stock: 2,
//   description: "ubvi se",
//   category: "cizmi",
//   price: 2220,
// };
class WashingMachiens {
    constructor(title, stock, description, price, category) {
        this.title = title;
        this.stock = stock;
        this.description = description;
        this.price = price;
        this.category = category;
        this.serialCode = "123123j123j123jh123hj1";
    }
    changeSerialCode(newCode) {
        if (newCode.length !== 10)
            return;
        this.serialCode = newCode;
    }
    getSerialCode() {
        return this.serialCode;
    }
}
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(deposit) {
        this.balance = this.balance + deposit;
    }
    withdraw(withdraw) {
        this.balance = this.balance - withdraw;
    }
    getBalance() {
        return this.balance;
    }
}
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    setFullName(fullName) {
        const [newFirstName, newLastName] = fullName.split(" ");
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }
}
class Product {
    constructor(price, name, discount) {
        this.price = price;
        this.name = name;
        this.discount = discount;
    }
    getPriceWithDiscount() {
        return this.price - this.discount;
    }
}
class Car {
    constructor(firma, model, year) {
        this.firma = firma;
        this.model = model;
        this.year = year;
    }
    getMakeModelYear() {
        return `${this.firma}${this.model}${this.year}`;
    }
    setMakeModelYear(firma, model, year) {
        return `${this.firma}${this.model}${this.year}`;
    }
}
const Mile = {
    FirstName: "Mile",
    LastName: "Pavic",
    age: 12,
    email: "milepavic@gmail.com"
};
function PrintAll(Person) {
    return `Hi my name is ${Person.FirstName} ${Person.LastName} and I am ${Person.age} years old.`;
}
function createStudent(name, major, age, gpa) {
    const student = {
        Name: name,
        major: major,
        age: age,
        gpa: gpa
    };
    GPAgrades.push(gpa);
    return student;
}
const GPAgrades = [];
const student1 = createStudent("John Doe", "Computer Science", 20, 3.8);
const student2 = createStudent("Jane Smith", "Mathematics", 22, 3.5);
function calculateAverageGPA(GPAgrades) {
    const totalGrade = GPAgrades.reduce((acc, curr) => acc + curr, 0);
    const averageGrade = totalGrade / GPAgrades.length;
    return averageGrade;
}
console.log(calculateAverageGPA(GPAgrades));
