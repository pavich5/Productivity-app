const BASE_URL = "http://localhost:4000/api";

// DOM elements
const loginFormEl = document.querySelector("#login-form");
const emailInputEl = document.querySelector("#loginEmail");
const passwordInputEl = document.querySelector("#loginPassword");
const loginView = document.querySelector(".container");
const productsViewEl = document.querySelector(".products-view");
const register_form = document.querySelector("#register-form");
const register_email = document.querySelector("#registerEmail");
const register_password = document.querySelector("#registerPassword");
const register_name = document.querySelector("#registerName");
const registerAge = document.querySelector("#registerAge");
const registerLastName = document.querySelector("#registerLastName");

// Initial setup
productsViewEl.style.display = "none";
let accessToken = null;
let refreshToken = null;
let user = null;

// Event listeners
loginFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInputEl.value;
  const password = passwordInputEl.value;
  await loginUser({ email, password });
});

const productButton = document.querySelector(".products-btn").addEventListener("click", () => {
  fetchProducts();
});

document.querySelector(".logout-btn").addEventListener("click", () => {
  logoutUser();
});

register_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const emailReg = register_email.value;
  const passReg = register_password.value;
  const nameReg = register_name.value;
  await createUser({ emailReg, passReg, nameReg });
});

// Functions
function toggleForm() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}

const loginUser = async (credentials) => {
  const credentialsJSON = JSON.stringify(credentials);
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentialsJSON,
  });

  if (response.status >= 400) return;
  accessToken = response.headers.get("access-token");
  refreshToken = response.headers.get("refresh-token");

  console.log(accessToken, refreshToken);
  console.log(response.status);
  const user = await response.json();
  console.log(user);

  if (user) {
    loginView.style.display = "none";
    productsViewEl.style.display = "block";
    document.querySelector(".username-heading").innerText = `${user.firstName} ${user.lastName}`;
    saveUserInLocalStorage(user, accessToken, refreshToken);
  }
};

const fetchProducts = async () => {
  const response = await fetch(`${BASE_URL}/test`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(await response.json());

  if (response.status >= 400) {
    const refreshTokenRes = await fetch(`${BASE_URL}/users/refreshAccessToken`, {
      headers: {
        "refresh-token": refreshToken,
      },
    });
    if (refreshTokenRes.status === 403) {
      console.log("You cannot login. Refresh token expired.");
    }
    accessToken = refreshTokenRes.headers.get("access-token");
    fetchProducts();
  }
};

const autoLoginUser = () => {
  const userStringData = window.localStorage.getItem("userData");
  if (userStringData) {
    const userData = JSON.parse(userStringData);
    accessToken = userData.accessToken;
    refreshToken = userData.refreshToken;
    user = userData.user;
    loginView.style.display = "none";
    productsViewEl.style.display = "block";
    document.querySelector(".username-heading").innerText = `${user.firstName} ${user.lastName}`;
  }
};
autoLoginUser();

const saveUserInLocalStorage = (user, accessToken, refreshToken) => {
  const data = { user, accessToken, refreshToken };
  const stringData = JSON.stringify(data);
  window.localStorage.setItem("userData", stringData);
};

const logoutUser = async () => {
  const deleteResponse = await fetch(`${BASE_URL}/users/logout`, {
    headers: {
      "refresh-token": refreshToken,
    },
  });
  console.log(deleteResponse);
  window.localStorage.clear();
  refreshToken = null;
  accessToken = null;
  user = null;
  loginView.style.display = "block";
  productsViewEl.style.display = "none";
};

const createUser = async (data) => {
  const { emailReg, passReg, nameReg } = data;

  const userData = {
    email: emailReg,
    password: passReg,
    firstName: nameReg,
    age: registerAge.value,
    lastName: registerLastName.value,
  };

  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  console.log(await response.json());

  register_email.value = "";
  register_password.value = "";
  register_name.value = "";
  registerAge.value = "";
  registerLastName.value = "";
  register_form.style.display = "none";
  loginFormEl.style.display = "block";
};

const productsListDiv = document.querySelector("#productsList");

function renderProducts(products) {
  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productContent = document.createElement("div");
    productContent.classList.add("product-content");

    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.textContent = product.name;

    const productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = "$" + product.price.toFixed(2);

    productContent.appendChild(productName);
    productContent.appendChild(productDescription);
    productContent.appendChild(productPrice);

    productItem.appendChild(productImage);
    productItem.appendChild(productContent);

    productsListDiv.appendChild(productItem);
  });
}

async function fetchProductss() {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();
  const products = data.allProducts;
  renderProducts(products);
}

fetchProductss()


