const sliderMainContainer = document.querySelector(".container");
const sliderHouse = document.querySelector(".house");
const sliderShop = document.querySelector(".shop");
const sliderBasket = document.querySelector(".basket");
const buttonHouse = document.querySelector(".house_button");
const buttonShop = document.querySelector(".shop_button");
const buttonBasket = document.querySelector(".basket_button");
const sliderBody = document.querySelector(".slider_body");

buttonHouse.addEventListener("click", showHouse);
buttonShop.addEventListener("click", showShop);
buttonBasket.addEventListener("click", showBasket);

console.dir(sliderHouse);

function showHouse() {
  sliderBody.classList.remove("shopVisible", "basketVisible");
  sliderBody.classList.add("houseVisible");
  sliderHouse.classList.remove("hidden");
  sliderShop.classList.add("hidden");
  sliderBasket.classList.add("hidden");
}

function showShop() {
  sliderBody.classList.remove("houseVisible", "basketVisible");
  sliderBody.classList.add("shopVisible");
  sliderHouse.classList.add("hidden");
  sliderShop.classList.remove("hidden");
  sliderBasket.classList.add("hidden");
}
function showBasket() {
  sliderBody.classList.remove("shopVisible", "houseVisible");
  sliderBody.classList.add("basketVisible");
  sliderHouse.classList.add("hidden");
  sliderShop.classList.add("hidden");
  sliderBasket.classList.remove("hidden");
}
