let results = document.querySelector("#results");
let btn = document.querySelector("#btn")

btn.addEventListener("click",async function separateStudents() {
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
    const studentsWithAverageGradeGreaterThanThree = data.filter(student => student.averageGrade > 3);
    let filteredMaleStudentsLocation = maleStudents.filter(maleStudent => maleStudent.city === 'Skopje' && maleStudent.age > 18);
    let filteredMaleStudentsName = maleStudents.filter(maleStudent => maleStudent.firstName.startsWith("B") && maleStudent.averageGrade > 2);
    let femaleOver24 = femaleStudents.filter(femaleStudents => femaleStudents.age > 24);
    let totalFemaleGrades = femaleOver24.map(student => student.averageGrade).reduce((acc, curr) => acc + curr);
    let averageGradeFemaleStudent1 = totalFemaleGrades / femaleOver24.length;
    let streberki = femaleStudents.filter(femaleStudents => femaleStudents.averageGrade === 5);
    let streberkiNames = streberki.map(student => student.firstName + '   ' + student.lastName);

 
    console.log(`All  students with average grade higher than 3:`, studentsWithAverageGradeGreaterThanThree);
    console.log(`All male students from Skopje with age over 18:`, filteredMaleStudentsLocation);
    console.log(`All male students with a name starting with "B" and average grade over 2:`, filteredMaleStudentsName);
    console.log(`The average grade of a female over 24 is : ${averageGradeFemaleStudent1}`)
    console.log(`All female students who average grades are 5 are ${streberkiNames}`);

});
