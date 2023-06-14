let nameElement = document.getElementById("name");
let foodToOrder = "Pizza";
let nameTagElement = document.querySelector("#name-tag");

function setName(element) {
    // console.log(element.value);
    nameElement.innerText = element.value;
}

function pickFood(element) {
    console.log(element.value);
    foodToOrder = element.value;
}

function order(){
    alert("Ordering a " + foodToOrder);
}

function setName(element) {
    nameTagElement.innerText = element.value;
}