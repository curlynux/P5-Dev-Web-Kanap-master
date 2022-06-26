var section = document.getElementById("items");
var link = document.getElementsByClassName("items").items.childNodes[1];

var kanap = async (url) =>
{
    var response = await fetch(url);
    var data = await response.json();
console.log(data);
    var i = 0;
    while(i < data.length)
    {
        var a = document.createElement("a");
        var article = document.createElement("article");
        var img = document.createElement("img");
        var h3 = document.createElement("h3");
        var p = document.createElement("p");

        a.setAttribute("href", `./product.html?id=${data[i]._id}`)
        article.id = data[i]._id;
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

        var id = article.getAttribute("id");

        a.addEventListener("click", () => {
            document.location.href = a.href;
            console.log(article._id)
        });
        localStorage.setItem("data", JSON.stringify(data));
        console.log(data[i].name);
        i++;
    }
}
kanap("http://localhost:3000/api/products")