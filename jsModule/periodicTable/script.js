function displayName(elementName) {
    console.log("element clicked", elementName);
}

function example(element) {
    console.log(element);
    console.log("element clicked");
}

function turnOff(element) {
    if (element.innerText == "On") {
        element.innerText = "Off";
    } else {
        element.remove();
    }
}