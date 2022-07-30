var section = document.getElementById("cart__items");
var cart = JSON.parse(localStorage.getItem("cart"));
var data = JSON.parse(localStorage.getItem("data"));
var sumPrice = 0;
var Data = fetch(`http://localhost:3000/api/products`)
.then(res => res.json())
    .then(data => 
        {
            afficherPanier(data)
            deleEmptyArticle();
            updateQuantity();
            deleteItem();
            addTotalArticle();
            checkValidity();
            return data;
        });  

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
                var quantity = cart[i][2];
                var totalPrice = document.getElementById("totalPrice");

input.addEventListener("change", () => 
{
    var value = parseInt(input.value);
    console.log(typeof(value));
    if(value > quantity)
    {
        item[2] = parseInt(input.value);
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(input.value, item);
        sumPrice += elem.price * quantity;
        totalPrice.innerHTML = sumPrice;
        addTotalArticle();
    }
    else
    {
        item[2] = parseInt(input.value);
        localStorage.setItem("cart", JSON.stringify(cart))
        console.log(input.value, item);
        sumPrice -= elem.price * quantity;
        totalPrice.innerHTML = sumPrice;
        addTotalArticle();
    }
});
                sumPrice += elem.price * quantity;
                totalPrice.innerHTML = sumPrice;
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
            }
        });
    }); 

}

function deleEmptyArticle()
{
    var article = document.getElementsByClassName("cart__item")
    for(item of article)
    {
        if(item.children[0].children[0].src.length === 0)
            item.remove();
        console.log();
    }
}

function deleteItem()
{
    var deleteButton = document.getElementsByClassName("deleteItem");
    var array = [...deleteButton]

    array.forEach((item, index) => 
    {
        var id = item.parentElement.parentElement.parentElement.dataset.id
        item.addEventListener("click", () => 
        {
            cart.forEach(elem =>
            {
                if(id === elem[0])
                {
                    console.log(cart);
                    console.log(cart.splice(index, 1));
                    localStorage.setItem("cart", JSON.stringify(cart))
                    location.reload()
                    console.log(cart);
                }
            });
        })
    });
        
}

function updateQuantity()
{
    var article = document.getElementsByClassName("cart__item");
    var input = document.getElementsByClassName("itemQuantity");
}

function addTotalArticle()
{
    var sumQuantity = 0;
    var totalArticle = document.getElementById("totalQuantity");

    cart.forEach(elem => sumQuantity += elem[2])
    totalArticle.innerHTML = sumQuantity;    
}
var firstname = document.getElementById("firstName");
var firstnameErrorMsg = document.getElementById("firstNameErrorMsg");
var lastname = document.getElementById("lastName");
var lastnameErrorMsg = document.getElementById("lastNameErrorMsg");
var addr = document.getElementById("address");
var addrErrorMsg = document.getElementById("addressErrorMsg");
var city = document.getElementById("city");
var cityErrorMsg = document.getElementById("cityErrorMsg");
var email = document.getElementById("email");
var emailErrorMsg = document.getElementById("emailErrorMsg");
var order = document.getElementById("order");
// const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
// var letters = /^[A-Za-z]+$/;
var i = 0;
const regexForName = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
const regexForAddress = /^([0-9]{1,3}(([,. ]?){1}[a-zA-Zàâäéèêëïîôöùûüç' ]+))$/;
const regexForEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// vérification du formulaire lors de la validation
var cartOrder = document.querySelector('.cart__order__form');

function checkValidity() {
    cartOrder.addEventListener("submit", (e) => {
        e.preventDefault();
        if (formValidation()) {
           sendCommand();
        } 
    });
}

function formValidation() {
    let isValid = true;
    if(firstname.value.trim().match(regexForName)){
        firstname.style.border = 'solid 2px #D5FCB4';
            firstname.style.color = '#D5FCB4';
            firstnameErrorMsg.innerHTML = "Valide";
    } else{
        isValid=false;
        firstnameErrorMsg.innerHTML = "le champ prénom est incorecte";
            firstname.style.border = 'solid 2px red';
            firstnameErrorMsg.style.color = '#fbbcbc';
    }
    if(lastname.value.trim().match(regexForName)){
        lastname.style.border = 'solid 2px #D5FCB4';
        lastnameErrorMsg.style.color = '#D5FCB4';
        lastnameErrorMsg.innerHTML = "Valide";
    } else{
        isValid=false;
        lastnameErrorMsg.innerHTML = "le champ nom est incorecte";
        lastname.style.border = 'solid 2px red';
        lastnameErrorMsg.style.color = '#fbbcbc';
    }
    if(addr.value.trim().match(regexForAddress)){
        addr.style.border = 'solid 2px #D5FCB4';
        addrErrorMsg.style.color = '#D5FCB4';
        addrErrorMsg.innerHTML = "Valide";
    } else{
        isValid=false;
        addressErrorMsg.innerHTML = "le champ address est incorecte";
        address.style.border = 'solid 2px red';
        addrErrorMsg.style.color = '#fbbcbc';
    }
    if(city.value.trim().match(regexForName)){
        city.style.border = 'solid 2px #D5FCB4';
        cityErrorMsg.style.color = '#D5FCB4';
        cityErrorMsg.innerHTML = "Valide";
    } else{
        isValid=false;
        cityErrorMsg.innerHTML = "le champ ville est incorecte";
        city.style.border = 'solid 2px red';
        cityErrorMsg.style.color = '#fbbcbc';
    }
    if(email.value.trim().match(regexForEmail)){
        email.style.border = 'solid 2px #D5FCB4';
        emailErrorMsg.style.color = '#D5FCB4';
        emailErrorMsg.innerHTML = "Valide";
    } else{
        isValid=false;
        emailErrorMsg.innerHTML = "l'email' est incorecte";
        email.style.border = 'solid 2px red';
        emailErrorMsg.style.color = '#fbbcbc';
    }
return isValid;    
};

function sendCommand() {
    const firstNameValue = document.querySelector("#firstName").value;
    const lastNameValue = document.querySelector("#lastName").value;
    const addressValue = document.querySelector("#address").value;
    const cityValue = document.querySelector("#city").value;
    const emailValue = document.querySelector("#email").value;

    const orderProducts = {
        contact: {
            firstname: firstNameValue,
            lastname: lastNameValue,
            address: addressValue,
            city: cityValue,
            email: emailValue
        },
        products: cart
    }
    
    fetch('http://localhost:3000/api/products/order', {
            method: "POST",
            body: JSON.stringify(orderProducts),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => console.log(res.json()))
        .then (data => {
            console.log(data);
            const orderID = data.orderId;
            window.location = `confirmation.html?orderId=${orderID}`
        })
        console.log(orderProducts);   
}