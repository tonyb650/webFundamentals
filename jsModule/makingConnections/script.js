console.log("Page loaded...")
let h2 = document.querySelector("h2");
let reqCountElement = document.getElementById("connectionRequestCount");
let reqCount = 2;
let connectionCountElement = document.getElementById("connectionCount");
let connCount = 500;
let requestElement = [
    document.getElementById("request-1"),
    document.getElementById("request-2"),
];

function changeName() {
    if (h2.innerText == "New Name") {
        h2.innerText = "Jane Doe";
    } else {
        h2.innerText = "New Name";
    }
}

function rejectRequest(id) {
    console.log("Rejected");
    requestElement[id].remove();
    reqCount--;
    reqCountElement.innerText = "  " + reqCount + "  ";
}

function acceptRequest(id) {
    console.log("Accepted");
    requestElement[id].remove();
    reqCount--;
    connCount++;
    reqCountElement.innerText = "  " + reqCount + "  ";
    connectionCountElement.innerText = "  " + connCount + "  ";
}