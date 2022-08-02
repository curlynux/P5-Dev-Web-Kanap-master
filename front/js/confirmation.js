
//  récupère l'url actuelle
//  créer un objet url à partir de l'url actuelle
//  à travers le searchParams récupère l'id 

function getorderId() {
    const urlLoc = window.location.href;
    const url = new URL(urlLoc);
    const urlId = url.searchParams.get("orderId");
<<<<<<< HEAD
    console.log(urlId);
=======
>>>>>>> 06770cf (quantite marche pas)
    return urlId;
}

const orderId = document.getElementById('orderId');
<<<<<<< HEAD
orderId.innerHTML = getorderId();
=======
orderId.inneHTrML = getorderId();
>>>>>>> 06770cf (quantite marche pas)

// Vider le localStorage
localStorage.clear();