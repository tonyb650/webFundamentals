// var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
//                 [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
//                 [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
//                 [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
//                 [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
//                 [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
//                 [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
//                 [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
//                 [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
//                 [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];

// CREATE "theDojo" 2d array
var theDojo = [];
for(var i=0; i<10; i++) {
    theDojo.push([]);
    for(var j=0; j<10; j++) {
        theDojo[i].push(0);
    }
}


// PLACE 10 hidden Ninjas in "theDojo" array
let placedNinjas = 0;
while(placedNinjas<10) {
    x = Math.floor(Math.random()*theDojo.length);
    y = Math.floor(Math.random()*theDojo[0].length);
    if (theDojo[x][y] == 0){
        theDojo[x][y] = 1;
        placedNinjas++;
    }

}

// CREATE the 'Show' 2d array will display revealed squares' value
var show = [];
for(var i=0; i<theDojo.length; i++) {
    show.push([]);
    for(var j=0; j<theDojo[i].length; j++) {
        show[i].push(false);
    }
}


var dojoDiv = document.querySelector("#the-dojo");

// CREATE the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            if (show[i][j] === false){
                result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
            } else {
                result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)">${show[i][j]}</button>`;
            }
        }
    }
    return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding - DONE
function howMany(i, j, element) {
    if(theDojo[i][j] !=0 ) {
        alert("you died")
        show[i][j] = "!!";
        dojoDiv.innerHTML = render(theDojo)+`<button onclick="location.reload()">restart</button>`;
    } else {
        let ninjaCount = -theDojo[i][j];
        for(let k=i-1; k<=i+1; k++) {
            if (k >=0 && k < theDojo.length){
                for(let l=j-1; l<=j+1; l++) {
                    if(l >=0 && l < theDojo[k].length)
                    ninjaCount += theDojo[k][l];
                }
            }
        }
        show[i][j] = ninjaCount;
        dojoDiv.innerHTML = render(theDojo); 
    }
}

// message to greet a user of the game
// var style="color:cyan;font-size:1.5rem;font-weight:bold;";
// console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
// console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
console.table(show);

// start the game
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it - DONE
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot - DONE
// 3. if you click on a ninja you must restart the game -DONE
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
    