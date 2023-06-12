// Both of these will select the h1 tag
var h1 = document.querySelector("h1");
var title = document.querySelector("#title");
console.log("h1" + h1);
console.log("title" + title);

var logoImg = document.querySelector(".nav h1");
console.log(logoImg);

function over(element) {
    alert("mouseover");
}

function out(element) {
    alert("mouseout");
}