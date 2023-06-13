console.log("page loaded...");
// let darkMode = false;

function setActive(element) {
    // console.log(element.style.backgroundColor);
    // if (element.style.backgroundColor=="rgb(34, 34, 34)") {
    if (element.classList.contains("dark-mode")) {
    //     element.style.backgroundColor = "#fff";
    //     element.style.color = "#222";
        element.classList.remove("dark-mode");
        element.innerText = "Switch to dark mode";
        // darkMode=false;
    } else {
    //     element.style.backgroundColor = "#222";
    //     element.style.color = "#fff";
        element.classList.add("dark-mode");
        element.innerText = "Switch to light mode";
        // darkMode = true;
    }
}