
//  récupère l'url actuelle
//  créer un objet url à partir de l'url actuelle
//  à travers le searchParams récupère l'id 

function getorderId() {
    const urlLoc = window.location.href;
    const url = new URL(urlLoc);
    const urlId = url.searchParams.get("orderId");
    return urlId;
}

const orderId = document.getElementById('orderId');
orderId.inneHTrML = getorderId();

// Vider le localStorage
localStorage.clear();