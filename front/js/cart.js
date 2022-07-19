var section = document.getElementById("cart__items");
var cart = JSON.parse(localStorage.getItem("cart"));
var data = JSON.parse(localStorage.getItem("data"));
var Data = fetch(`http://localhost:3000/api/products`)
.then(res => res.json())
    .then(data => 
        {
            afficherPanier(data)
            return data;
        });
        
// var log = () => Data.then(a => console.log(a));

var afficherPanier = (data) => 
{
    
    var i = 0;
    cart.forEach(item => 
    {
        var color = document.getElementsByTagName("p")[0];
        var prix = document.getElementsByTagName("p")[1];

        var article = document.createElement("article");
        var divImg = document.createElement("div");
        var img = document.createElement("img");

        var artiClone = article.cloneNode(true);
        var divClone = divImg.cloneNode(true);
        var imgClone = img.cloneNode(true);

        var divContent = document.createElement("div");
        var divDesc = document.createElement("div");

        var h2 = document.createElement("h2");
        var prix = document.createElement("p");
        var color = document.createElement("p");

        var divSettings = document.createElement("div");
        var divQuantChild = document.createElement("div");
        var pQuant = document.createElement("p");
        var input = document.createElement("input");
        var divDelete = document.createElement("div");
        var divDeletetext = document.createElement("p");
        

        section.appendChild(article);
        article.className = "cart__item";
        artiClone.className = "cart__item";
        section.appendChild(artiClone);

        divImg.className = "cart__item__img";
        divImg.appendChild(img);
        article.appendChild(divImg);

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

        divSettings.className = "cart__item__content__settings";
        divQuantChild.className = "cart__item__content__settings__quantity";
        divContent.appendChild(divSettings);
        divSettings.appendChild(divQuantChild);
        divQuantChild.appendChild(pQuant);
        divQuantChild.appendChild(input);
        divContent.appendChild(divDelete);

        input.setAttribute("type", "number");
        input.name = "itemQuantity";
        input.className = "itemQuantity";
        input.min = 1;
        input.max = 100;

        divDelete.className = "cart__item__content__settings__delete";
        divDeletetext.className = "deleteItem";
        divDeletetext.innerHTML = "supprimer";
        divDelete.appendChild(divDeletetext);
        data.forEach(elem => {
            if(item[0] === elem._id)
            {
                
                var couleur = cart[i][1];
                var totalQuantity = document.getElementById("totalQuantity");
                var totalPrice = document.getElementById("totalPrice");
                var quantity = cart[i][2];

                img.src = elem.imageUrl;
                img.src = elem.imageUrl;
                img.setAttribute("alt", elem.altTxt);
                h2.innerHTML = elem.name;
                color.innerHTML = cart[i][1];
                i++;
                prix.innerHTML = `${elem.price} €`
                pQuant.innerHTML = "Qté : ";
                article.dataset.id = elem._id;
                article.dataset.color = couleur;
                input.value = quantity;
                totalQuantity.innerHTML = cart.length;
                input.addEventListener("change", () => 
                {
                    totalItem();
                    quantity = input.value;
                    totalPrice.innerHTML = elem.price * quantity;
                })
                totalPrice.innerHTML = elem.price * quantity;
            }
        });
    });
}

function totalItem()
{
    var sum = 0;
    cart.forEach(item => 
    {
        sum += item[2]
    });
    console.log(sum);
}