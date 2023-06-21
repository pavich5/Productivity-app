function Trainer(inputFirstName, inputLastName, inputAcademy, inputLecture){
    this.firstName = inputFirstName; //this.property = value   ->  this is the object of type Trainer, it's the same on every line in this constructor function
    this.lastName = inputLastName;
    this.academy = inputAcademy;
    this.lecture = inputLecture;
    this.getInfo = function(){ // this.property = value which is a function with no name. That's why it's called anonymous function. And we are going to call this kind of functions METHODS !!!
        return `${this.firstName} ${this.lastName} - ${this.academy} - ${this.lecture}`;
    };
}

const sedcTrainer = new Trainer("Ivan","Lazarevski", "SEDC","JS, NodeJS, Angular, React, PostgreSQL");

const sedcTrainer2 = new Trainer("Bojan","Damchevski", "gradezen fakultet","JS, NodeJS, Angular, React, PostgreSQL");

console.log(sedcTrainer);
console.log(sedcTrainer.getInfo());

function checkTrainer(object){
    if(object.academy === "SEDC") {
        console.log("He is our guy !");
    }
    else {
        console.log("Who is that guy ?!");
    }
};

checkTrainer(sedcTrainer);
checkTrainer(sedcTrainer2);

// const hotel = {
//   name: "tajna",
//   rooms: 40,
//   booked: 12,
//   roomsLeft: function roomsLeft() {
//     return this.rooms - this.booked;
//   },
//   print: function printItself() {
//     console.log(this);
//   },
// };

// let div = document.querySelector("#div");

// console.log(`There are ${hotel.roomsLeft()} rooms left in this hotel.`);

// div.innerHTML = `This is the specs of this hotel: ${JSON.stringify(hotel)}`;



function Movie(movieNameInput, movieTypeInput, movieYearInput) {
  this.movieName = movieNameInput;
  this.Type = movieTypeInput;
  this.Year = movieYearInput;
  // this.calculateAge = function () {
  //   return 2022 - this.Year;
  // };
  this.getInfo = function(){ // this.property = value which is a function with no name. That's why it's called anonymous function. And we are going to call this kind of functions METHODS !!!
    return `${this.movieName} ${this.Type} - ${this.Year}`;
  };
}

const Superman = new Movie("Superman", "Action", 2017);

function checkMovie(object){
  if(object.Type == "Action"){
    console.log("its action")
  } else {
    console.log("its not action");
  }
}

checkMovie(Superman);
console.log(Superman.getInfo());


