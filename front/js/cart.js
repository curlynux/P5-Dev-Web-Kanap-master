var data = JSON.parse(localStorage.getItem("data"));
var img = document.getElementsByTagName("img");
var item = JSON.parse(localStorage.getItem("item"));

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
var color = document.createElement("p");
var prix = document.createElement("p");
var divContentClone = divContent.cloneNode(true);

var divQuant = document.createElement("div");
var divQuantChild = document.createElement("div");
var pQuant = document.createElement("p");
var input = document.createElement("input");
var divDelete = document.createElement("div");
var divDeletetext = document.createElement("p");


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

divQuant.className = "cart__item__content__settings";
divQuantChild.className = "cart__item__content__settings__quantity";
input.className = "itemQuantity";
article.appendChild(divQuant);
divQuant.appendChild(divQuantChild);
divQuantChild.appendChild(pQuant);
divQuantChild.appendChild(input);

input.setAttribute("type", "number");
input.name = "itemQuantity";
input.min = 1;
input.max = 100;
input.value = 11;
divDelete.appendChild(divDeletetext);
article.appendChild(divDelete);

fetch(`http://localhost:3000/api/products`)
.then(res => res.json())
.then(data => afficherPanier(data));
var afficherPanier = (data) => 
{
    console.log(data);
}

cart.forEach(item => 
{
    data.forEach(elem => {
    if(item[0] === elem._id)
    {
        img[5].src = elem.imageUrl;
        img[6].src = elem.imageUrl;
        h2.innerHTML = elem.name;
        color.innerHTML = elem.colors;
        prix.innerHTML = `${elem.price} €`
        pQuant.innerHTML = "Qté : ";
    }  
    });
}); 

 