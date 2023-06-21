let academy = document.querySelector("#academy-name");
let unordered_list = document.querySelector("#unordered-list");
let btn = document.querySelector("#btn");
const BASE_URL = "https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json";
let clickMe = document.querySelector("#clickMe");


async function getDataStudents(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(await data.students);
    printStudent(data.students)
}
async function getAcademyName(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    printAcademy(data.academy)
    console.log(await data.academy);
}

function printStudent(student_array){
    unordered_list.innerHTML = "";
    for(student of student_array){
    unordered_list.innerHTML += `<li class="students">${student}</li>`
}

}


function printAcademy(academyName){
    academy.innerHTML = `Academy Name:${academyName}`
}





btn.addEventListener("click",function(){
    btn.style.display = "none"
    clickMe.style.display = "none"
    console.log(getDataStudents(),getAcademyName())
})
