var data = JSON.parse(localStorage.getItem("data"));

var img = document.getElementsByTagName("img");
var h1  = document.getElementById("title");
var p   = document.getElementById("price");
var des = document.getElementById("description");
var title = document.getElementsByTagName("title");


p.textContent = data[0].price;
h1.textContent = data[0].name;
des.textContent = data[0].description;
title.textContent = data[0].name
console.log("title");
var i = 0;
while(i < data.length)
{
    i++;

    console.log(data[i].imageUrl);
    console.log(img[5]);
    console.log(h1);
    console.log(p);
    console.log(des);

}

console.log(img[5].src);
console.log(window.location.search);