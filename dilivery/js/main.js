const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")

cartButton.addEventListener("click",toggleModal);
close.addEventListener("click",toggleModal);

function toggleModal () {
  modal.classList.toggle("is-open")
}

new WOW().init();

const registerButton = document.querySelector("#register-button");
const register = document.querySelector(".register")
const registerJoin = document.querySelector(".register-join")

registerButton.addEventListener("click",toggleModal1)
registerJoin.addEventListener("click",toggleModal1)

function toggleModal1 () {
  register.classList.toggle("is-visible")
}