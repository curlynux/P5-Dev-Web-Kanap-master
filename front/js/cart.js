var data = JSON.parse(localStorage.getItem("data"));
var img = document.getElementsByTagName("img")[5];
var item = JSON.parse(localStorage.getItem("item"));
var h2 = document.getElementsByTagName("h2")[0];
var color = document.getElementsByTagName("p")[0];
var prix = document.getElementsByTagName("p")[1];
var cart = JSON.parse(localStorage.getItem("cart"));
var couleur = JSON.parse(localStorage.getItem("color"));
var quant = JSON.parse(localStorage.getItem("quantity"));
var quantity = document.getElementsByClassName("itemQuantity")[0];

quantity.addEventListener("change", () => 
{
    console.log(quant.value)
    localStorage.setItem("color", JSON.stringify(quant));
});


img.src = item.imageUrl;
h2.innerHTML = item.name;
prix.innerHTML = `${item.price} €`;
color.innerHTML = couleur;
if (quant > 1)
    prix.innerHTML = `${item.price} €`;
quantity.value = quant;
console.log(cart);
