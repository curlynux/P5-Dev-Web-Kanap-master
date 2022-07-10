var url = window.location.href;
var id = url.split("=")[1];

fetch(`http://localhost:3000/api/products/${id}`)
.then((response) => response.json())
.then((kanap) => afficherProduit(kanap))

var afficherProduit = (data) =>
{
    console.log(data);
    var div_img = document.getElementsByClassName("item__img")[0];
    var h1  = document.getElementById("title");
    var p   = document.getElementById("price");
    var des = document.getElementById("description");
    var colors = document.getElementById("colors");
    var button = document.getElementById("addToCart");
    var img = document.createElement("img");
    
    img.setAttribute("src", data.imageUrl);
    img.alt = data.altTxt;
    div_img.appendChild(img);

    data.colors.forEach(elem => {
        var option = document.createElement("option");
        option.value = elem;
        option.textContent = elem;
        colors.appendChild(option);
    });

    h1.textContent = data.name;
    p.textContent = data.price;
    des.textContent = data.description;
    button.addEventListener("click", AjouterPanier);

}

var AjouterPanier = () => 
{
    var quantite = parseInt(document.getElementById("quantity").value);
    console.log("ajouter");
    var couleur = document.getElementById("colors").value;
    var array = [id, couleur, quantite];
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart === undefined || cart === null)
    {
        cart = [];
    }
    var index = 0;
    var ok = false;
    cart.forEach(element => 
        {
            index++;
            if (element[0] === id && !ok)
            {
                ok = true;
                if (couleur === element[1])
                {
                    element[2] = quantite + parseInt(element[2]);
                    
                } else
                {
                    cart.splice(index, 0, array)
                }

            }
        });
  
    if(!ok)
        cart.push(array);
    localStorage.setItem("cart", JSON.stringify(cart));
    
}