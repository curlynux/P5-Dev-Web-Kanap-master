var data = JSON.parse(localStorage.getItem("data"));

var img = document.getElementsByTagName("img");
var h1  = document.getElementById("title");
var p   = document.getElementById("price");
var des = document.getElementById("description");
var title = document.getElementsByTagName("title");
var url = window.location.href;
var id = url.substring(url.indexOf("=") + 1);



var i = 0;
while(i < data.length)
{
    i++;
    if(id === data[i]._id)
    {
        p.textContent = data[i].price;
        h1.textContent = data[i].name;
        des.textContent = data[i].description;
        title[0].innerHTML = data[i].name;
        img[5].src = data[i].imageUrl
        console.log(data[i])
    }
    console.log(title);
}