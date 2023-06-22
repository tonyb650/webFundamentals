console.log("page loaded");
let pTags = document.querySelectorAll("p");
console.log(pTags);

function getColor(element){
    console.log(element.value);
    for (let i = 0; i < pTags.length;i++) {
            pTags[i].style.color = element.value;
    }
}