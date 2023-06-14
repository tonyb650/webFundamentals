console.log("page loaded.");
let cookieConsentElement = document.querySelector("#cookieConsent");
let cityArr = [
    "Burbank",
    "Chicago",
    "Dallas"
];

let tempUnitsChoice = "C"; //starting temp units
let dailyTempsC = [24, 18, 27, 19, 21, 16, 26, 21]; //starting temps
let dailyIds = [
    "dayOneHigh",
    "dayOneLow",
    "dayTwoHigh",
    "dayTwoLow",
    "dayThreeHigh",
    "dayThreeLow",
    "dayFourHigh",
    "dayFourLow"
];

let dailyTemps = []; //an array to hold the HTML element

// build array of DOM elements
for(let i=0; i<dailyIds.length; i++) {
    dailyTemps.push(document.getElementById(dailyIds[i]));
}

//function to dismiss cookie consent popup
function dismiss() {
    cookieConsentElement.remove();
}

// alert when city name is selected from nav bar
function cityChange(id) {
    alert("Loading weather report for " + cityArr[id]);
}

// switch between F units and C units
function changeTempUnits() {
    if (tempUnitsChoice == "C") {
        tempUnitsChoice = "F";
        for (let i=0; i < dailyTemps.length;i++) {
            dailyTemps[i].innerText = (Math.round(dailyTempsC[i]*9/5)+32) + "\u00B0";
        }
    } else {
        tempUnitsChoice = "C";
        for (let i=0; i < dailyTemps.length;i++) {
            dailyTemps[i].innerText = dailyTempsC[i] + "\u00B0";
        }
    }
}