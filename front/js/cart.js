var data = JSON.parse(localStorage.getItem("data"));
var img = document.getElementsByTagName("img");
var item = JSON.parse(localStorage.getItem("item"));
var h2 = document.getElementsByTagName("h2")[0];
var color = document.getElementsByTagName("p")[0];
var prix = document.getElementsByTagName("p")[1];
var cart = JSON.parse(localStorage.getItem("cart"));
var color = JSON.parse(localStorage.getItem("color"));
var quant = localStorage.


img[5].src = item.imageUrl;
h2.innerHTML = item.name;
color.innerHTML = item.colors[0];
prix.innerHTML = item.price + " €";
console.log(cart);
