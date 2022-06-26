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

var i = 0;
while(i < data.length)
{
    if(id === data[i]._id)
    {
        p.textContent = data[i].price;
        h1.textContent = data[i].name;
        des.textContent = data[i].description;
        title[0].innerHTML = data[i].name;
        img[5].src = data[i].imageUrl;
        img[5].alt = data[i].altTxt;
        colors.children[1].innerHTML = data[i].colors[1]
        
        var j = 0;
        while(j < colors.length)
        {
            j++;
            colors.appendChild(option);
            option.innerHTML = data[j].colors[2];
        }
        console.log(colors);
        console.log(data[i]);
    }
    ++i;
}