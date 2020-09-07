var menuBtn = document.getElementById("menuBtn");
var nav1 = document.getElementById("nav1");
var img1 = document.getElementById("img1");
var text = document.getElementById("text");
var div1 = document.getElementById("div1");
var img2 = document.getElementById("img2");
var text2 = document.getElementById("text2");
var img3 = document.getElementById("img3");
var text3 = document.getElementById("text3");

/*
menuBtn.onclick = function (){
    nav1.classList.add("show");
};
*/
menuBtn.onclick = function(){
    nav1.classList.toggle("show");
}

img1.onclick = function (){
    img1.classList.toggle("img");
    text.classList.toggle("textjs");
}

img2.onclick = function (){
    img2.classList.toggle("img");
    text2.classList.toggle("textjs")
}

img3.onclick = function (){
    img3.classList.toggle("img");
    text3.classList.toggle("textjs")
}
