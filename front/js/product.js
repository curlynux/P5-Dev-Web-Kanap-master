var data = JSON.parse(localStorage.getItem("data"));
var img = document.getElementsByTagName("img");
var h1  = document.getElementById("title");
var p   = document.getElementById("price");
var des = document.getElementById("description");
var title = document.getElementsByTagName("title");
var url = window.location.href;
var id = url.substring(url.indexOf("=") + 1);
var colors = document.getElementById("colors");
var option = document.createElement("option");
var quant = document.getElementById("quantity");
var button = document.getElementById("addToCart");

console.log(button);
colors.addEventListener("change", () => 
{
    var color = colors.selectedOptions[0].text
    console.log(color)
    localStorage.setItem("color", JSON.stringify(color));
});

quant.addEventListener("change", () => 
    localStorage.setItem("quantity", quant.value)
);


var i = 0;
while(i < data.length)
{
    var item = data[i];
    
    
    if(id === data[i]._id)
    {
        var cart = {};
        button.addEventListener("click", () => 
        {
            cart.image = data[i].imageUrl;
            cart.prix = data[i].price;
            cart.nom = data[i].name;
            cart.alt = data[i].altTxt;
            cart.id = data[i]._id;
            cart.couleur = colors.selectedOptions[0].text;
            cart.quant = quant.value;
            localStorage.setItem("cart", JSON.stringify(cart));
        
        });
        
        
        console.log(cart);
        p.textContent = data[i].price;
        h1.textContent = data[i].name;
        des.textContent = data[i].description;
        title[0].innerHTML = data[i].name;
        img[5].src = data[i].imageUrl;
        img[5].alt = data[i].altTxt;
        
        console.log(data[i]);
        localStorage.setItem("item", JSON.stringify(data[i]));
        
        if (colors.length <= 3)
        {
            colors[1].innerHTML = data[i].colors[0];
            colors[2].innerHTML = data[i].colors[1];
        }
        
        if(data[i].colors.length > 2)
        {
            colors.appendChild(option);
            colors[3].innerHTML = data[i].colors[2];
        } 

        if(data[i].colors.length >= 3)
        {
            colors.appendChild(option.cloneNode(true));
            colors[4].innerHTML = data[i].colors[3];
        }

        if(colors[4].value === "undefined")
            colors[4].remove();
        
    }
    ++i;
}