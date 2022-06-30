var data = JSON.parse(localStorage.getItem("data"));
var img = document.getElementsByTagName("img");
var item = JSON.parse(localStorage.getItem("item"));
var h2 = document.getElementsByTagName("h2")[0];
var color = document.getElementsByTagName("p")[0];
var prix = document.getElementsByTagName("p")[1];
var cart = JSON.parse(localStorage.getItem("cart"));
var couleur = JSON.parse(localStorage.getItem("color"));

var quantity = document.getElementsByClassName("itemQuantity")[0];




img[5].src = item.imageUrl
h2.innerHTML = item.name;
color.innerHTML = couleur;
if (quant > 1)
    prix.innerHTML = `${item.price} €`;
quantity.value = quant;
console.log(cart);
