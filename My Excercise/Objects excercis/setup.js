let cars = [];
let motorbikes = [];

class Vehicle {
  constructor(id, brand, model, engine, horsepower, ac, wheels, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.horsepower = horsepower;
    this.ac = ac;
    this.wheels = wheels;
    this.price = price;
  }

  printVehicle() {
    console.log(
      `ID: ${this.id}, ${this.brand} ${this.model} has ${this.horsepower}HP with ${this.engine} ENGINE and has `
    );
  }
  driveVehicle() {
    console.log(`We are driving the ${this.brand} on ${this.wheels} wheels.`);
  }

  buyVehicle(money) {
    if (money >= this.price) {
      console.log(`You bought the ${this.model}.`);
    } else {
      console.log(`You need ${this.price - money}$ to buy this ${this.model}.`);
    }
  }

  static addAc(Vehicle) {
    if (Vehicle.ac === false) {
      Vehicle.ac = true;
      Vehicle.price += 500;
      console.log(`This Vehicle now has AC.`);
    } else {
      console.log(`This Vehicle already has AC.`);
    }
  }
}

class MotorBikes extends Vehicle {
  constructor(id, brand, model, engine, horsepower, price) {
    super(id, brand, model, engine, horsepower, false, 2, price);
  }
}

class Car extends Vehicle {
  constructor(id, brand, model, engine, horsepower, price) {
    super(id, brand, model, engine, horsepower, false, 4, price);
  }
}

let newMotorbike = new MotorBikes(3, "Yamaha", "R1", "1000cc", 130, 5000);
let newCar = new Car(1, "Golf", "6", "2.0D", 105, 35000);

newMotorbike.printVehicle();
newCar.printVehicle();

newMotorbike.buyVehicle(20000);
newCar.buyVehicle(20000);

newMotorbike.driveVehicle();
newCar.driveVehicle();

Car.addAc(newCar);
MotorBikes.addAc(newMotorbike);

console.log(newMotorbike);
console.log(newCar);


cars.push(newCar);
motorbikes.push(newMotorbike);
cars.push(newCar);
motorbikes.push(newMotorbike);
cars.push(newCar);
motorbikes.push(newMotorbike);


console.log(cars)
console.log(motorbikes)