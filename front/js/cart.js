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
var artiClone = article.cloneNode(true);
var divClone = div.cloneNode(true);
var imgClone = img5.cloneNode(true);
var divContent = document.createElement("div");
var divDesc = document.createElement("div");
var h2 = document.createElement("h2");
var h2text = document.getElementsByClassName("nom");
var color = document.createElement("p");
var prix = document.createElement("p");
var divContentClone = divContent.cloneNode(true);

div.className = "cart__item__img";
div.appendChild(img5);
article.appendChild(div);


section.appendChild(article);
article.className = "cart__item";
artiClone.className = "cart__item";
section.appendChild(artiClone);

divClone.className = "cart__item__img";
divClone.appendChild(imgClone);
artiClone.appendChild(divClone);

divContent.className = "cart__item__content";
article.appendChild(divContent);
divDesc.className = "cart__item__content__description";
divContent.appendChild(divDesc);
divDesc.appendChild(h2);
divDesc.appendChild(color);
divDesc.appendChild(prix);
h2.setAttribute("class", "nom")
color.innerHTML = "couleur";
prix.innerHTML = "prix";
h2text[0].innerHTML = "test";
// window.onload = ()
// {
//     alert("test")
// }
fetch(`http://localhost:3000/api/products`)
.then(res => res.json())
.then(data => afficherPanier(data));
var afficherPanier = (data) => 
{
    console.log(data);
    

    img.src = data.imageUrl;
    h2.innerHTML = data.name;
    color.innerHTML = data.colors[0];
    prix.innerHTML = data.price + " €";
}

cart.forEach(item => 
{
    data.forEach(elem => {
    if(item[0] === elem._id)
    {
        img[5].src = elem.imageUrl;
        img[6].src = elem.imageUrl;
    }  
    });
}); 

 