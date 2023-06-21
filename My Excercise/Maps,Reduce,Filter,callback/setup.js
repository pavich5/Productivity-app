async function fetchdata(){
    const response = await fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json');
    const data = await response.json();
  
    const maleStudents = [];
    const femaleStudents = [];
  
    data.forEach(student => {
      if (student.gender === 'Male') {
        maleStudents.push(student);
      } else if (student.gender === 'Female') {
        femaleStudents.push(student);
      }
    });

    let doble = maleStudents.map(student => student.age * 2);
    let sumMaleAge = doble.reduce((total,value) => total + value, 0);
    let avrgMaleAge = sumMaleAge / doble.length;
    console.log(avrgMaleAge);

    let sumFemAge = femaleStudents.reduce((total, student) => total + student.age, 0);
    let avrgFemAge = sumFemAge / femaleStudents.length;
    console.log(avrgFemAge);
    
   

}
let students = [
  {firstName: "Ivo", lastName: "Ignov", grade: 10, age: 15},
  {firstName: "Toso", lastName: "Jordanov", grade: 10, age: 16},
  {firstName: "Monika", lastName: "Spasevska", grade: 10, age: 14},
  {firstName: "Jovan", lastName: "Spasov", grade: 10, age: 16},
  {firstName: "Dani", lastName: "Metodieva", grade: 10, age: 16},
];


let myforeach = (arr,callback) =>
  for(i=0;i > arr.length; i++)
    const element = arr[i];
    callback(element);
  

myforeach(students,(element)=>
  console.log(element)
)
        
fetchdata()