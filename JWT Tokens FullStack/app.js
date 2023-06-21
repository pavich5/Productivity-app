const BASE_URL = "http://localhost:4000/api";
const loginViewEl = document.querySelector(".login-view");
const productsViewEl = document.querySelector(".products-view");

productsViewEl.style.display = "none";

const loginFormEl = document.querySelector("#loginForm");
const emailInputEL = document.querySelector("#email");
const passwordInputEL = document.querySelector("#password");
const renderStudentsDiv = document.querySelector('.renderStudents')

let accessToken = null;
let refreshToken = null;
let user = null;

loginFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInputEL.value;
  const password = passwordInputEL.value;
  loginUser({ email, password });
  loginFormEl.reset();
});

const loginUser = async (credentials) => {
  const credentialsJSON = JSON.stringify(credentials);

  const response = await fetch(BASE_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentialsJSON,
  });

  if (response.status >= 400) {
    return;
  }

  accessToken = response.headers.get("access-token");
  refreshToken = response.headers.get("refresh-token");

  const user = await response.json();

  if (user) {
    loginViewEl.style.display = "none";
    productsViewEl.style.display = "block";
    productsViewEl.querySelector(
      ".username-heading"
    ).innerText = `${user.firstName} ${user.lastName}`;

    saveUserInLocalStorage(user, accessToken, refreshToken);
  }
};

const fetchStudents = async () => {
  const response = await fetch(`${BASE_URL}/students`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 403) {
    const refreshTokenRes = await fetch(`${BASE_URL}/refresh-token`, {
      headers: {
        "refresh-token": refreshToken,
      },
    });

    if (refreshTokenRes.status === 403) return logoutUser();

    accessToken = refreshTokenRes.headers.get("access-token");
    fetchStudents();
  }
  const students = await response.json();
  renderAllStudents(students)
};

document.querySelector(".students-btn").addEventListener("click", () => {
  fetchStudents();
});

const saveUserInLocalStorage = (user, accessToken, refreshToken) => {
  const data = { user, accessToken, refreshToken };
  const stringData = JSON.stringify(data);
  window.localStorage.setItem("userData", stringData);
};

const autoLoginUser = () => {
  const userStringData = window.localStorage.getItem("userData");

  if (userStringData) {
    const userData = JSON.parse(userStringData);
    accessToken = userData.accessToken;
    refreshToken = userData.refreshToken;
    user = userData.user;
    loginViewEl.style.display = "none";
    productsViewEl.style.display = "block";
    productsViewEl.querySelector(
      ".username-heading"
    ).innerText = `${user.firstName} ${user.lastName}`;
  }
};

const logoutUser = async () => {
  const deleteResponse = await fetch(`${BASE_URL}/logout`, {
    headers: {
      "refresh-token": refreshToken,
    },
  });

  console.log(deleteResponse);
  window.localStorage.clear();
  refreshToken = null;
  accessToken = null;
  user = null;
  loginViewEl.style.display = "block";
  productsViewEl.style.display = "none";
};

autoLoginUser();

productsViewEl
  .querySelector(".logout-btn")
  .addEventListener("click", () => logoutUser());

const renderAllStudents = (Students) => {
    console.log(Students);
  const studentsList = document.createElement("ul");
  for (let i = 0; i < Students.length; i++) {
    const student = Students[i];
    const li = document.createElement("li");
    li.textContent = `Name:${student.firstName} LastName:${student.lastName}`;
    li.className = 'student'
    studentsList.appendChild(li);
  }

  studentsList.className= 'students'
  renderStudentsDiv.appendChild(studentsList);
};
