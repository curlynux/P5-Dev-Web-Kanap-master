var section = document.getElementById("items");
var link = document.getElementsByClassName("items").items.childNodes[1];
var i = 0;
var id = document.getElementById("");



while (i <= 7)
{
    i++;
    var a = document.createElement("a");
    var article = document.createElement("article");
    var img = document.createElement("img");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");

    section.appendChild(a);
    a.setAttribute("href", "./product.html");
    img.setAttribute("src", "../../back/images/kanap0" + i + ".jpeg");
    h3.classList.add("productName");
    h3.innerText = "text head" + i;
    p.classList.add("productDescription");
    p.innerText = "description" + i; 
    a.appendChild(article);
    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    section.appendChild(a);
}

