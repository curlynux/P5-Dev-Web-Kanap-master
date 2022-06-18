var section = document.getElementById("items");
var link = document.getElementsByClassName("items").items.childNodes[1];
var id = document.getElementById("");
var data = (url) => fetch(url)
.then((response) => response.json())
.then((data) => 
{
    var i = 1;
    while(i <= 8)
    {
        var a = document.createElement("a");
        var article = document.createElement("article");
        var img = document.createElement("img");
        var h3 = document.createElement("h3");
        var p = document.createElement("p");
    
        a.setAttribute("href", "./product.html");
        article.setAttribute("id", data[i]._id)
        img.setAttribute("src", data[i].imageUrl);
        img.alt = data[i].altTxt;
        h3.classList.add("productName");
        p.classList.add("productDescription");

        h3.innerText = data[i].name;
        p.innerText = data[i].description;

        section.appendChild(a);
        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        section.appendChild(a);
        console.log(data[i++]);
    }
});

data("http://localhost:3000/api/products");

