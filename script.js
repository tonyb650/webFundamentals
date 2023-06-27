console.log("page loaded.")

 // ********** INITIALIZE ALL VARIABLES **********
let world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,1,2,0,0,2,1,2,0,0,0,2,1,2,1,2,0,0,0,2,1,2,0,0,2,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,1,2,2,2,2,2,2,2,1,2,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,2,2,1,1,1,1,2,1,1,1,1,2,2,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,1,2,2,2,2,2,0,2,0,2,2,2,2,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,2,1,2,0,0,0,0,0],
    [2,2,2,2,2,2,1,2,0,2,2,2,2,0,2,2,2,2,0,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0],
    [2,2,2,2,2,2,1,2,0,2,2,2,2,2,2,2,2,2,0,2,1,2,2,2,2,2,2],
    [0,0,0,0,0,2,1,2,0,0,0,0,0,0,0,0,0,0,0,2,1,2,0,0,0,0,0],
    [2,2,2,2,2,2,1,2,0,2,2,2,2,2,2,2,2,2,0,2,1,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,2,2,2,1,2,1,2,2,2,2,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,2,2,2,2,2,1,1,1,2,2,2,2,2,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

let pacman = { // starting coordinates for Pacman
    x: 13,
    y: 13
};

let blueGhost = { // starting coordinates and directionfor BlueGhost
    x: 13,
    y: 11,
    direction: 0 
};

let score = 0; // initialize score at 0
let lives = 3; // initialize lives at 3

// ****** ALL FUNCTIONS HERE:  ************
// create maze (world)
function displayWorld() {
    let output = '';
    for(let i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for(let j=0; j<world[i].length; j++){
            if(world[i][j]==2){
                output += "<div class='brick'></div>";
            } else if (world[i][j]==1) {
                output += "<div class='coin'></div>";
            } else if (world[i][j]==0) {
                output += "<div class='empty'></div>";    
            } else if (world[i][j]==3) {
                output += "<div class='cherry'></div>";
            }    
        }
        output += "\n</div>";
    }
    document.querySelector("#world").innerHTML = output;
    // console.log(output);
}

// refresh Pacman's location
function displayPacman() { 
    document.getElementById("pacman").style.top = "" + pacman.y*20 + "px";
    document.getElementById("pacman").style.left = "" + pacman.x*20 + "px";
}

// refresh blueGhost's location
function displayBlueGhost() { 
    console.log ("BlueGhost.x "+ blueGhost.x);
    document.getElementById("blueGhost").style.top = "" + blueGhost.y*20 + "px";
    document.getElementById("blueGhost").style.left = "" + blueGhost.x*20 + "px";
}

// testSpace returns false if pacman cannot move to the proposed space
function testSpace(x,y) {
    if (world[y][x] == 2){
        return false;
    } else {
        return true;
    }
}

// ***** START INSTRUCTIONS ********

// Initial display of elements
displayWorld();
displayPacman();
displayBlueGhost();

// monitor keystrokes for movement keys
document.onkeydown = function(e){
    if(e.keyCode == 37 && testSpace(pacman.x-1, pacman.y)) { // left arrow  
        document.getElementById("pacman").style.transform = "rotate(180deg)";
        if (pacman.x > 0) { 
            pacman.x -= 1;
        } else {
            pacman.x = 26; // Through the tunnel
        }      
    } else if (e.keyCode == 38  && testSpace(pacman.x, pacman.y-1)) { //up arrow
        document.getElementById("pacman").style.transform = "rotate(270deg)";
        pacman.y -= 1;
    } else if (e.keyCode == 40  && testSpace(pacman.x, pacman.y+1)) { //down arrow
        document.getElementById("pacman").style.transform = "rotate(90deg)";
        pacman.y += 1;
    } else if (e.keyCode == 39  && testSpace(pacman.x+1, pacman.y)) { //right arrow
        document.getElementById("pacman").style.transform = "rotate(0deg)";
        if (pacman.x < 26 ) { // Through the tunnel
            pacman.x += 1;
        } else {
            pacman.x = 0;
        }
    } else {
        // other key
    }
    // Replace location contents with blanks on new Pacman coordinate & update score
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score +=10;
        document.getElementById("score").innerText = score;
    }
    if (world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        score +=50;
        document.getElementById("score").innerText = score;
    }
    displayPacman();
    displayWorld();
    // console.log(e.keyCode);
}

//Toggle Cherry on and off every 5 seconds
setInterval(function() {
    world[13][13]= 3;
    displayWorld();
    setTimeout(function() { 
        world[13][13] = 0;     
        displayWorld();
    }, 5000);
}, 10000);


// ***** BLUE GHOST MOVEMENT *****
setInterval(moveBlueGhost, 100); // move ghost 10 times/second

function moveBlueGhost() {
    console.log("old direction = "+ blueGhost.direction);

    if (blueGhost.y ==11 && blueGhost.x > 9 && blueGhost.x <17) { // in the pen, reversing is OK
        newDirection = Math.floor(Math.random()*4);
    }  else { // not in pen
        newDirection = Math.floor(Math.random()*3);
        if( blueGhost.direction == 0 ) { //1 is no good
            if (newDirection>0){
                newDirection++;
            }
        } else if ( blueGhost.direction == 1) { //0 is no good
            newDirection++;  
        } else if ( blueGhost.direction == 3) { //2 is no good
            if (newDirection>1){
                newDirection =3;
            }
        } else if ( blueGhost.direction == 2) { //3 is no good
            //no adjustment needed
        }
        // now we should have a non-reversing random direction
    }

    if (newDirection == "0") {  // blueGhost.direction map: 0=Lt 1=Rt 2=Up 3=Dn
        if(testSpace(blueGhost.x -1, blueGhost.y)) {
            if (blueGhost.x > 0) { 
                blueGhost.x--;
            } else {
                blueGhost.x = 26; // Through the tunnel
            }   
        } else {
            moveBlueGhost()
        }
    } else if (newDirection == "1") { // blueGhost.direction map: 0=Lt 1=Rt 2=Up 3=Dn
        if(testSpace(blueGhost.x+1, blueGhost.y)) {
            if (blueGhost.x < 26 ) { // Through the tunnel
                blueGhost.x++;
            } else {
                blueGhost.x = 0;
            }
        } else {
            moveBlueGhost();
        }
    } else if (newDirection == "2") {  // blueGhost.direction map: 0=Lt 1=Rt 2=Up 3=Dn
        if(testSpace(blueGhost.x, blueGhost.y-1)) {
            blueGhost.y--;
        } else {
            moveBlueGhost();
        }
    } else if (newDirection == "3") { // blueGhost.direction map: 0=Lt 1=Rt 2=Up 3=Dn
        if(testSpace(blueGhost.x, blueGhost.y+1)) {
            blueGhost.y++;
        } else {
            moveBlueGhost();
        }
    }
    blueGhost.direction = newDirection;
    displayBlueGhost();

    // check for collision with pacMan
    if (pacman.x == blueGhost.x && pacman.y == blueGhost.y) {
        pacman.x = 13; // reset coordinates for Pacman & blueGhost
        pacman.y= 13
        blueGhost.x = 13;
        blueGhost.y = 11;
        blueGhost.direction= 0;
        lives--;
        if (lives>0){
            alert (" You died");
        } else {
            alert("Game over!");
            //reset game here
            lives = 3;
        }
        document.getElementById("lives").innerText = lives;
        displayPacman();
        displayBlueGhost();
    }
}
