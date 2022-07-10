var data = JSON.parse(localStorage.getItem("data"));
var img = document.getElementsByTagName("img");
var item = JSON.parse(localStorage.getItem("item"));
var h2 = document.getElementsByTagName("h2")[0];
var color = document.getElementsByTagName("p")[0];
var prix = document.getElementsByTagName("p")[1];
var cart = JSON.parse(localStorage.getItem("cart"));
var color = JSON.parse(localStorage.getItem("color"));
var section = document.getElementById("cart__items");
var article = document.createElement("article");
var div = document.createElement("div");
var img5 = document.createElement("img");

article.setAttribute("class", "cart__item");
section.appendChild(article);
div.setAttribute("class", "cart__item__img")
div.appendChild(img5);
article.appendChild(div);

fetch(`http://localhost:3000/api/products`)
.then(res => res.json())
.then(data => afficherPanier(data));
var afficherPanier = (data) => 
{
    console.log(data);
    img[5].setAttribute("src", "test");

    img.src = data.imageUrl;
    h2.innerHTML = data.name;
    color.innerHTML = data.colors[0];
    prix.innerHTML = data.price + " €";
}
console.log(cart[0][0]);