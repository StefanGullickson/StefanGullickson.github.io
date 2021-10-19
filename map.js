var up = document.getElementById('MCG_UP'); 
up.innerHTML = "Click button to start"; 
var down = document.getElementById('MCG_DOWN'); 

// Map of images to randomly select from
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

    // adds the visual map to the document, and function for clicking on buildings
    let mapImage = document.createElement('object');
    mapImage.data = 'mac-guessr/mcgpicnew.svg';
    mapImage.type = "image/svg+xml";
    mapImage.style.height = "600px";
    document.getElementById('body').appendChild(mapImage);
    mapImage.addEventListener("load", () => {
        mapImage.contentDocument
            .querySelectorAll("#buildings > *")
            .forEach((building) => {
                building.addEventListener("click", () => {
                    console.log(building.id);

                });
            });
    });


    // Gets a random image from the map and adds it to the document
    let randNum = randNumber(1);
    let randImage = map.get(randNum);
    var img = document.createElement('img');
    img.src = randImage;
    img.style.height = "600px";
    document.getElementById('body').appendChild(img);

    
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
    // if (!event.target.matches(buildingName)) return;
	console.log(mapImage.elementFromPoint(x, y));
    
    
    // console.log("x", x, "y", y, event);

    // let guessMatch = false;
    // let guess = returnGuessObject(x,y);
    // let correct = map.get('mac-guessr/theater1.jpg');
    // function ifguessMatch(guess, correct){
    //     if (guess === correct) {
    //         guessMatch = True;
    //     }
    //     guessMatch = False;
    // }
        
        
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

function Game_Rules() {
    let item = document.getElementById("How_To");
    item.style.color = "lightgray";
    item.style.fontSize = "21px";
}

function mouseOut() {
    let item = document.getElementById("How_To");
    item.style.color = "rgb(194, 194, 194)";
    item.style.fontSize = "20px";
}

  

