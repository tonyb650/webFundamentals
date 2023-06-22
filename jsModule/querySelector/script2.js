console.log("page loaded");
let paragraphs = document.querySelectorAll("p");

function applyColors() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = paragraphs[i].innerText;
    }
}