// 1. Display the hero
// 2. Make the hero move in 4 directions
// 3. Display all enemies
// 4. Make enemies move
// 5. When spacebar is pressed, have the hero shoot a bullet
// 6...

console.log("Page loaded.");

let hero = {
    x: 500,
    y: 500
}

let enemies = [
    {x: 50, y:70, model:'enemy2'},
    {x:250, y:30, model:'enemy2'},
    {x:350, y:200, model:'enemy2'},
    {x:450, y:20, model: 'enemy2'},
    {x:150, y:35, model: 'enemy1'},
    {x:570, y:85, model:'enemy1'},
    {x:530, y:150, model:'enemy1'}
];

let bullets = [];
let score = 0;

if (Math.random() >.5){
    document.getElementById("container").style['background'] = "url('background2.jpg')";
}


function displayHero(){
    document.getElementById("hero").style['top'] = hero.y + "px";
    document.getElementById("hero").style['left'] = hero.x + "px";
}

function displayEnemies() {
    let output = "";
    for (let i=0; i< enemies.length; i++){
        output += `<div class='${enemies[i].model}' style='top:${enemies[i].y}px; left:${enemies[i].x}px;'></div>`;
    }
    document.getElementById("enemies").innerHTML = output;
}


function moveEnemies(){
    for (let i=0; i< enemies.length; i++){
        enemies[i].y += 5;
        if (enemies[i].y > 540){ // need to respawn enemy at top of screen
            enemies[i].y = 5;
            enemies[i].x = Math.floor(Math.random()*900)+50;
            if (Math.random() >.5){
                enemies[i].model = 'enemy1';
            } else {
                enemies[i].model = 'enemy2';
            }
        }
    }
}

function displayBullets() {
    let output = "";
    for (let i=0; i< bullets.length; i++){
        output += `<div class='bullet' style='top:${bullets[i].y}px; left:${bullets[i].x}px;'></div>`;
    }
    document.getElementById("bullets").innerHTML = output;
}

function moveBullets(){
    for (let i=0; i< bullets.length; i++){
        bullets[i].y -= 10;
        if (bullets[i].y < 0){ // bullet off screen
            bullets[i] = bullets[bullets.length-1];
            bullets.pop();
        }
    }
}

function detectKills() {        // detect collision with bullet & enemy
    for (let i=0; i< bullets.length; i++){
        for (let j=0; j<enemies.length; j++){
            if (Math.abs(bullets[i].x - (enemies[j].x+5)) <= 10 && Math.abs(bullets[i].y - (enemies[j].y+5)) <=10) {
                console.log("collision");
                // bullets[i] = bullets[bullets.length-1];  // doesn't work because it messes up array
                // bullets.pop();
                enemies[j].y = 10; // respawn enemy
                enemies[j].x = Math.floor(Math.random()*900)+50; // respawn enemy
                score += 10;
                document.getElementById("score").innerText = score;
                document.getElementById("explosion").play();
            }
        }
    }
}

function detectCollision() {
    for (let j=0; j<enemies.length; j++){
        if (Math.abs(hero.x - (enemies[j].x)) <= 18 && Math.abs(hero.y-8 - (enemies[j].y-6)) <=10) {
            score -= 500;
            document.getElementById("score").innerText = score;
            alert("Crash!");
            enemies[j].y = 10; // respawn enemy
            enemies[j].x = Math.floor(Math.random()*900)+50; // respawn enemy
            hero.x= 500;
            hero.y= 500;
        }
    }
}

function gameLoop() {
    displayHero();
    moveEnemies();
    displayEnemies();
    moveBullets();
    detectKills();
    displayBullets();
    detectCollision();
}

setInterval(gameLoop, 50);

document.onkeydown = function (a){
    // console.log(a.keyCode); //40=down, 38=up, 37=lft, 39=right
    if(a.keyCode == 37) { //Left
        hero.x -= 10;
    } else if(a.keyCode == 39) { // Right
        hero.x += 10;
    } else if(a.keyCode == 38) { // Up
        hero.y -= 10;
    } else if(a.keyCode == 40) { // Down
        hero.y += 10;
    } else if(a.keyCode == 32){ //spacebar - fire bullet
        bullets.push({x: hero.x+5, y:hero.y-8});
    }
}
