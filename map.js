var up = document.getElementById('MCG_UP'); 
up.innerHTML = "Click button to start"; 
var down = document.getElementById('MCG_DOWN'); 
var bottom = document.getElementById('Bottom_Text');

var head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'layout.css'; 
document.body.appendChild(link);

/* Map of images to randomly select from; each image file name minus the photo number 
* matches its corresponding svg object ID
*/
const map = new Map();
map.set(0, "mac-guessr/theater1.jpg"); //Theater and Dance Building
map.set(1, "mac-guessr/theater2.jpg"); //Theater and Dance Building
map.set(2, "mac-guessr/theater3.jpg"); //Theater and Dance Building
map.set(3, "mac-guessr/theater4.jpg"); //Theater and Dance Building
map.set(4, 'mac-guessr/library1.jpg'); //DeWitt Wallace Library
map.set(5, 'mac-guessr/library2.jpg'); //DeWitt Wallace Library
map.set(6, 'mac-guessr/library3.jpg'); //DeWitt Wallace Library
map.set(7, 'mac-guessr/library4.jpg'); //DeWitt Wallace Library
map.set(8, 'mac-guessr/art1.jpg'); //Joan Adams Mondale Hall of Studio Art
map.set(9, 'mac-guessr/art2.jpg'); //Joan Adams Mondale Hall of Studio Art
map.set(10, 'mac-guessr/art3.jpg'); //Joan Adams Mondale Hall of Studio Art
map.set(11, 'mac-guessr/jwall1.jpg'); //Janet Wallace Fine Arts Center
map.set(12, 'mac-guessr/jwall2.jpg'); //Janet Wallace Fine Arts Center
map.set(13, 'mac-guessr/jwall3.jpg'); //Janet Wallace Fine Arts Center
map.set(14, 'mac-guessr/jwall4.jpg'); //Janet Wallace Fine Arts Center
map.set(15, 'mac-guessr/leonard1.jpg'); //Leonard Center Athletics and Wellness Complex
map.set(16, 'mac-guessr/leonard2.jpg'); //Leonard Center Athletics and Wellness Complex
map.set(17, 'mac-guessr/leonard3.jpg'); //Leonard Center Athletics and Wellness Complex
map.set(18, 'mac-guessr/leonard4.jpg'); //Leonard Center Athletics and Wellness Complex
map.set(19, "mac-guessr/carnegie1.jpg"); //Carnegie Hall

const fullNameMap = new Map();
fullNameMap.set('theater', 'The Theater and Dance Building');
fullNameMap.set('library', 'DeWitt Wallace Library');
fullNameMap.set('art', 'Joan Adams Mondale Hall of Studio Art');
fullNameMap.set('jwall', 'Janet Wallace Fine Arts Center');
fullNameMap.set('carnegie', 'Carnegie Hall');
fullNameMap.set('humanities', 'The Humanities Building');
fullNameMap.set('olin', 'Olin-Rice Science Center');
fullNameMap.set('leonard', 'The Leonard Center Athletics and Wellness Complex');
fullNameMap.set('oldmain', 'Old Main');
fullNameMap.set('cc', 'Ruth Stricker Dayton Campus Center');
fullNameMap.set('chapel', 'The Weyerhaeuser Memorial Chapel');
fullNameMap.set('markim', 'Markim Hall');
fullNameMap.set('kagin', 'Kagin Commons');
fullNameMap.set('weyerhaeuser', 'Weyerhaeuser Hall');
fullNameMap.set('_77mac', '77 Mac');
fullNameMap.set('stadium', 'Macalester Stadium');
fullNameMap.set('kirk', 'Kirk Hall');

let correctlyGuessedImages = [];

// Begin game function: adds map and random image to body of document
function MCG_Pic() {

    correctlyGuessedImages = [];
    let lives = 5;
    up.innerHTML = "Lives Remaining: " + lives;

    // adds the visual map to the document, and function for clicking on buildings
    let mapImage = document.createElement('object');
    mapImage.data = 'mac-guessr/mcgpicnew.svg';
    mapImage.type = "image/svg+xml";
    mapImage.id = "mapImage";
    mapImage.style.height = "450px";
    document.getElementById('body').appendChild(mapImage);
    
    // Gets a random image from the map and adds it to the document
    let randImage = getRandomImage();
    let buildingName = grabImageLocation(randImage);
    
    mapImage.addEventListener("load", () => {
        mapImage.contentDocument
            .querySelectorAll("#buildings > *")
            .forEach((building) => {
                building.addEventListener("click", () => {
                    console.log(building.id);
                    console.log(building.style); 

                    if (building.id === buildingName) {
                        
                        down.innerHTML = "Congratulations! That is correct! This image was taken in " + fullNameMap.get(buildingName) + ".";
                        document.getElementById("countdown").hidden = false;
                        correctlyGuessedImages.push(randImage);
                        document.body.removeChild(document.getElementById('mapImage'));
                        var timeleft = 5;
                        var downloadTimer = setInterval(function(){

                            if(timeleft <= 0){
                                clearInterval(downloadTimer);
                                document.getElementById('body').appendChild(mapImage);
                                document.getElementById("countdown").hidden = true;
                                document.body.removeChild(document.getElementById('randImage'));
                                randImage = getRandomImage();
                                buildingName = grabImageLocation(randImage);
                                down.innerHTML = "Select which building you think the image was taken in!";

                            } else {
                                document.getElementById("countdown").innerHTML = timeleft + " seconds before next round";
                            }
                            timeleft -= 1;
                        }, 1000);
                    } else {

                        lives -= 1;

                        if (lives === 1) {
                            down.innerHTML = "That is incorrect. You have " + lives + " life remaining.";
                            up.innerHTML = "Lives Remaining: " + lives;
                        } else if  (lives === 0){
                            down.innerHTML = "That is incorrect. You lost! The correct building was " + fullNameMap.get(buildingName) + ".";
                            up.innerHTML = "Final Score: " + correctlyGuessedImages.length;
                            newGame();
                        } else {
                            down.innerHTML = "That is incorrect. You have " + lives + " lives remaining.";
                            up.innerHTML = "Lives Remaining: " + lives;
                        }
                        
                    }
                });

                // These two event listeners allow for users to hover over buildings and get information about them.
                building.addEventListener("mouseenter", () => {
                    down.innerHTML = "This is " + fullNameMap.get(building.id) + ".";
                });
                building.addEventListener("mouseleave", () => {
                    down.innerHTML = "Select which building you think the image was taken in!";
                });
            });
    });

    document.getElementById("Button").textContent = "Reset Game";
    document.querySelector('#Button').onclick = 
    function() {
        document.body.removeChild(document.getElementById('mapImage'));
        document.body.removeChild(document.getElementById('randImage'));
        MCG_Pic();
    }; 
    down.innerHTML = "Select which building you think the image was taken in!";
} 

function Game_Rules(x) {
    x.style.height = "50px";
}

function getRandomNumber(max) {
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

function grabImageLocation(url) {
    let numbers = "0123456789";
    let building = "";

    for (let i = 0; i < url.length; i++) {
        if (url[i] === "/") {
            for (let j = i+1; j < url.length; j++) {
                if (!numbers.includes(url[j])) {
                    building += url[j];
                } else {
                    break;
                }    
            }
            break;
        }
    }
    console.log(building);
    return building;
}

function newGame() {
    document.body.removeChild(document.getElementById('mapImage'));
    document.querySelector('#Button').textContent = 'New Game';   
    document.querySelector('#Button').disabled = false;
    document.querySelector('#Button').onclick = 
    function() {
        correctlyGuessedImages = [];
        document.body.removeChild(document.getElementById('randImage'));
        MCG_Pic();
    }; 
}

function getRandomImage() {
    let randNum = getRandomNumber(19);
    let randImage = map.get(randNum);
    while (correctlyGuessedImages.includes(randImage)) {
        randNum = getRandomNumber(19);
        randImage = map.get(randNum);
    }
    var img = document.createElement('img');
    img.src = randImage;
    img.id = "randImage";
    img.style.height = "450px";
    document.getElementById('body').appendChild(img);

    return randImage;
}
  