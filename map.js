var up = document.getElementById('MCG_UP'); 
up.innerHTML = "Click button to start"; 
var down = document.getElementById('MCG_DOWN'); 
    
const map = new Map();
map.set(0, "mac-guessr/carnegie1.jpg"); //Carnegie Hall
map.set(1, "mac-guessr/theater1.jpg"); //Theater and Dance Building
map.set(2, 'Joan Adams Mondale Hall of Studio Art');
map.set(3, 'Humanities Building');
map.set(4,'Olin-Rice Science Center');
map.set(5, 'Leonard Center athletics and wellness complex');
map.set(6, 'Janet Wallace Fine Arts Center');
map.set(7, 'Old Main');
map.set(8, 'DeWitt Wallace Library');
map.set(9, 'Ruth Stricker Dayton Campus Center');
map.set(10,'Weyerhaeuser Memorial Chapel');
map.set(11, 'Markim Hall');
map.set(12, 'Kagin Commons');
    

function MCG_Pic() {

    let randNum = randNumber(1);
    let randImage = map.get(randNum);
    down.innerHTML = randImage;

    var img = document.createElement('img');
    img.src = 'mac-guessr/mcgpicupdate.png';
    img.style.height = "600px";
    document.getElementById('body').appendChild(img);
    // down.innerHTML = " ";

    var img3 = document.createElement('img3');
    img3.src = 'mac-guessr/carnegie1.png';
    img3.style.height = "600px";
    document.getElementById('body').appendChild(img3);

    // randomly generate an image from a list to show up on the screen
    // const img_src = ['mac-guessr/theater1.jpg','']
    var img2 = document.createElement('img2');
    // img_choose.src = img_src[randNumber(img_src.length)]
    img2.src = randImage;
    img2.style.height = "600px";
    document.getElementById('body').appendChild(img2);
    // down.innerHTML = " ";
    ///////////////


    document.getElementById("Button").disabled=true;
    document.getElementById("Button").hidden=true;
    document.getElementById("MCG_UP").hidden=true;
    // down.innerHTML = "Select which building you think the image was taken in!";
} 

function returnGuessObject(x, y) {
    return document.elementFromPoint(x, y);
}


let guessMatch = False;
let guess = returnGuessObject(x,y);
let correct = map.get('mac-guessr/theater1.jpg');
function ifguessMatch(guess, correct){
    if (guess === correct) {
        guessMatch = True;
    }
    guessMatch = False;
}
    
    
let lives = 3;
function countLives(){
    while (lives >0) {
        if (!guessMatch){
            lives -=1;
        }
    }
    return "Game Over!"
}

function getClickPosition(event) {
    var xPosition = event.clientX;
    var yPosition = event.clientY;
    down.innerHTML =
    "x: " + xPosition +
    " - y: " + yPosition;
    // return {
    //     x: xPosition,
    //     y: yPosition
    // };
}

document.getElementById('img').addEventListener("click", getClickPosition);

var head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'layout.css'; 
document.body.appendChild(link);


function randNumber(max) {
    return Math.round((Math.random()*max));
}

