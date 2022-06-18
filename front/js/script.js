var section = document.getElementById("items");
var link = document.getElementsByClassName("items").items.childNodes[1];
var i = 0;
var id = document.getElementById("");

var data = url => fetch(url)
.then(res => res.json())
.then(data => console.log(data));
data("http://localhost:3000/api/products");

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
    img.setAttribute("src", "http://localhost:3000/images/kanap0"  + i + ".jpeg");
    h3.classList.add("productName");
    h3.innerText = "text";
    p.classList.add("productDescription");
    p.innerText = "text";
    a.appendChild(article);
    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    section.appendChild(a);
}

