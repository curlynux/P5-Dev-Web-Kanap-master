var spans = document.getElementsByTagName("span");
console.log(spans);
var i = 0;
for(span in spans)
{
    spans[span].innerHTML = 30;
    console.log(spans[span]);
}