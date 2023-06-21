let allTotal = 0;

function addToCart(element) {
  let mainEl = element.closest(`.single-item`);
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let quantity = mainEl.querySelector("input").value;
  let cardItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    price = price.substring(1);
    price = parseInt(price);
    let total = price * parseInt(quantity);
    allTotal += total;
    cardItems.innerHTML += `<div class="cart-single-item"> 
                        <h3>${name}</h3>
                        <p>${price}x${quantity} = $${total}</p>
                        <button onclick="removeFromCart(this, '${name}')" class="remove-item">Ukloni</button>
                        </div>`;

    document.querySelector(".total").innerText = `Total: $${allTotal}`;

    element.innerText = `dodato`;
    element.setAttribute("disabled", `true`);
  } else {
    alert(`odberi kolicinu`);
  }
}

function removeFromCart(element, name) {
  let mainEl = element.closest(".cart-single-item");
  let price = mainEl.querySelector("p").innerText.split(" ")[2];
  price = price.substring(1);
  price = parseInt(price);
  allTotal -= price;
  document.querySelector(".total").innerText = `Total: $${allTotal}`;
  mainEl.remove();

  // Reset the "Add to Cart" button for the removed item
  let addToCartButtons = document.querySelectorAll(".add-to-cart");
  for (let button of addToCartButtons) {
    let itemName = button.closest(".single-item").querySelector("h3").innerText;
    if (itemName === name) {
      button.innerText = "Dodaj u košaricu";
      button.removeAttribute("disabled");
      break;
    }
  }
}