// interface Student {
//     id?: number;
//     name: string;
//     age: number;
//     major: string;
//   }
  
//   let students: Student[] = [];
  
//   function createStudent(student: Student): void {
//     students.push(student);
//   }
//   function printStudents(): void {
//     students.forEach((student) =>{
//         console.log(`Student id:${student.id},name:${student.name}, age:${student.age},Major:${student.major}`)
//     })
//   }

//   createStudent({ id: 1, name: 'John', age: 21, major: 'Computer Science' });
//   createStudent({ id: 2, name: 'Mile', age: 31, major: 'Computer Science' });
//   createStudent({ id: 3, name: 'Cile', age: 41, major: 'Computer Science' });
//   console.log(students)

//   function deleteStudent(id: number): void {
//         students = students.filter((student) => student.id !== id);
//   }

//   function updateStudent(id: number, updateData: Student): void {
//     students = students.map((student) => {
//       if (student.id === id) {
//         return { ...student, ...updateData };
//       }
//       return student;
//     });
//   }

//   updateStudent(3, {name: 'Ciregsgsdfsdfdfle', age: 41, major: 'Computer Science'});
//   console.log(students)


type Dog = {
  name: string,
  age: number,
  food: string,
  toys: string[]
}

const dzeki: Dog = {
  name:"dzeki",
  age: 2,
  food: "mace",
  toys: ["koski", "usteKoski"]
}

const jadejne: number[] = []

jadejne.push(2,3,2,31,23,12,3);


enum Status {
  ACTIVE = "active",
  OFFLINE = "offline",
  CANCELLED = "cancelled"
}

type Device = {
  title: string;
  status: Status;
};

const newDevice = {
  title: "Washing machine",
  status: Status.ACTIVE,
};

const add = (number1:number, number2:number):number =>{
  return number1 + number2;
}

const res = add(2,5)

const printName = (firstName: string, lastName:string, age:number): void =>{
    console.log(`${firstName} ${lastName} age:${age}`)
}

// const kire = printName("Kire", "Pavic", 22);



const optionalName = (name?: string) =>{
  console.log(`${name || "User"} said fuck of mada faakaaaaa`)
}

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


class WashingMachiens implements Product {

  private serialCode: string = "123123j123j123jh123hj1";

  constructor(
    public title: string,
    public stock: number,
    public description: string,
    public price: number,
    public category: string
  ) {}

  changeSerialCode(newCode: string) {
    if (newCode.length !== 10) return;

    this.serialCode = newCode;
  }

  getSerialCode() {
    return this.serialCode;
  }
}

class BankAccount {
  private balance: number = 0;

  public deposit(deposit: number) {
    this.balance = this.balance + deposit;
  }
  public withdraw(withdraw: number) {
    this.balance = this.balance - withdraw;
  }
  public getBalance() {
    return this.balance;
  }
}

class Person {
  constructor(private firstName: string, private lastName: string) {}

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

 public setFullName(fullName: string) {
  const [newFirstName, newLastName] = fullName.split(" ");
  this.firstName = newFirstName;
  this.lastName = newLastName;
}
}

class Product{
  constructor(private price: number, private name: string, private discount: number) {}
  public getPriceWithDiscount() {
    return this.price - this.discount;
  }  
}

class Car {
  constructor(private firma: string, private model: string, private year: number) {}
  getMakeModelYear(){
    return `${this.firma}${this.model}${this.year}`
  }
  setMakeModelYear(firma: string, model:string, year: number){
    return `${this.firma}${this.model}${this.year}`
  }
}

interface Person1 {
  FirstName: string;
  LastName: string;
  age: number;
  email: string;
}

const Mile: Person1 = {
  FirstName: "Mile",
  LastName: "Pavic",
  age: 12,
  email: "milepavic@gmail.com"
};

function PrintAll(Person: Person1): string {
  return `Hi my name is ${Person.FirstName} ${Person.LastName} and I am ${Person.age} years old.`;
}

type Studentss = {
  Name: string;
  major: string;
  age: number;
  gpa: number;
}
function createStudent(name: string, major: string, age: number, gpa: number): Studentss {
  const student: Studentss = {
    Name: name,
    major: major,
    age: age,
    gpa: gpa
  };
  GPAgrades.push(gpa);
  return student;
}
const GPAgrades: number[] = [];

const student1 = createStudent("John Doe", "Computer Science", 20, 3.8);
const student2 = createStudent("Jane Smith", "Mathematics", 22, 3.5);

function calculateAverageGPA(GPAgrades: number[]) {
  const totalGrade = GPAgrades.reduce((acc, curr) => acc + curr, 0);
  const averageGrade = totalGrade / GPAgrades.length;
  return averageGrade;
}

class Animals {
  constructor(private name: string, private type: string, private age: number) {}
}

class Dogs extends Animals implements Animals {
  constructor(name: string, type: string, age: number, private breed: string, private trained: boolean) {
    super(name, type, age);
  }
  public trainDog() {
    if(this.trained) throw new Error("this dog is alredy trained")
    return this.trained = true;
  }
}
class Calculator {
  constructor(private number1: number, private number2: number) {}

  public add() {
    return this.number1 + this.number2;
  }

  public divide() {
    return this.number1 / this.number2;
  }

  public subtract() {
    return this.number1 - this.number2;
  }

  public multiply() {
    return this.number1 * this.number2;
  }
}
