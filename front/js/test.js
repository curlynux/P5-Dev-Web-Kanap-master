var cart = localStorage.getItem("cart");
var button = document.getElementById("add");
var colors = document.getElementById("colors");
var quantite = document.getElementById("quantity").value;
var couleur = document.getElementById("colors").value;
var arr = [id, couleur, quantite];

button.addEventListener("click", () => 
{
    localStorage.setItem("cart", JSON.stringify(arr));
});
console.log(cart);