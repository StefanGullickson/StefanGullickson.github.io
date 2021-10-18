var up = document.getElementById('MCG_UP'); 
up.innerHTML = "Click button to start"; 
var down = document.getElementById('MCG_DOWN'); 

// Map of images to randomly generate 
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

// Begin game function: adds map and random image to body of document
function MCG_Pic() {

    // Creates a string object of a random image name from the image map
    let randNum = randNumber(1);
    let randImage = map.get(randNum);
    // down.innerHTML = randImage; // This was to check that the string was functioning correctly

    let mapImage = document.createElement('img');
    mapImage.src = 'mac-guessr/mcgpicupdate.png';
    mapImage.style.height = "600px";
    document.getElementById('body').appendChild(mapImage);
    mapImage.addEventListener("click", getClickPosition);

    // Uses the random image name to add a random image from the image map
    var img2 = document.createElement('img');
    img2.src = randImage;
    img2.style.height = "600px";
    document.getElementById('body').appendChild(img2);


    // randomly generate an image from a list to show up on the screen
    // const img_src = ['mac-guessr/theater1.jpg','']
    // var img2 = document.createElement('img');
    // img_choose.src = img_src[randNumber(img_src.length)]
    // img2.style.height = "600px";
    // document.getElementById('body').appendChild(img2);
    ///////////////

    document.getElementById("Button").disabled=true;
    document.getElementById("MCG_UP").hidden=true;
    down.innerHTML = "Select which building you think the image was taken in!";
} 

function Game_Rules(x) {
    x.style.height = "50px";
}


function returnGuessObject(x, y) {
    return document.elementFromPoint(x, y);
}


function getClickPosition(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log("x", x, "y", y, event);

    let guessMatch = false;
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
    // return {
    //     x: xPosition,
    //     y: yPosition
    // };
}


var head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'layout.css'; 
document.body.appendChild(link);


function randNumber(max) {
    return Math.round((Math.random()*max));
}

