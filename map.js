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
map.set(0, "mac-guessr/theater1.jpg"); //Theater and Dance Building - medium
map.set(1, "mac-guessr/theater2.jpg"); //Theater and Dance Building - hard
map.set(2, "mac-guessr/theater3.jpg"); //Theater and Dance Building - hard
map.set(3, "mac-guessr/theater4.jpg"); //Theater and Dance Building - hard
map.set(4, 'mac-guessr/library1.jpg'); //DeWitt Wallace Library - hard
map.set(5, 'mac-guessr/library2.jpg'); //DeWitt Wallace Library - medium
map.set(6, 'mac-guessr/library3.jpg'); //DeWitt Wallace Library - medium
map.set(7, 'mac-guessr/library4.jpg'); //DeWitt Wallace Library - hard
map.set(8, 'mac-guessr/art1.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
map.set(9, 'mac-guessr/art2.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
map.set(10, 'mac-guessr/art3.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
map.set(11, 'mac-guessr/jwall1.jpg'); //Janet Wallace Fine Arts Center - medium
map.set(12, 'mac-guessr/jwall2.jpg'); //Janet Wallace Fine Arts Center - easy
map.set(13, 'mac-guessr/jwall3.jpg'); //Janet Wallace Fine Arts Center - hard
map.set(14, 'mac-guessr/jwall4.jpg'); //Janet Wallace Fine Arts Center - medium
map.set(15, 'mac-guessr/leonard1.jpg'); //Leonard Center Athletics and Wellness Complex - medium
map.set(16, 'mac-guessr/leonard2.jpg'); //Leonard Center Athletics and Wellness Complex - easy
map.set(17, 'mac-guessr/leonard3.jpg'); //Leonard Center Athletics and Wellness Complex - easy
map.set(18, 'mac-guessr/leonard4.jpg'); //Leonard Center Athletics and Wellness Complex - medium
map.set(19, "mac-guessr/carnegie1.jpg"); //Carnegie Hall - medium
map.set(20, "mac-guessr/carnegie2.jpg"); //Carnegie Hall - hard
map.set(21, "mac-guessr/carnegie3.jpg"); //Carnegie Hall - easy
map.set(22, "mac-guessr/carnegie4.jpg"); //Carnegie Hall - medium
map.set(23, "mac-guessr/cc1.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(24, "mac-guessr/cc2.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(25, "mac-guessr/cc3.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(26, "mac-guessr/cc4.jpg"); //Ruth Stricker Dayton Campus Center - easy
map.set(27, "mac-guessr/chapel1.jpg"); //The Weyerhaeuser Memorial Chapel - medium
map.set(28, "mac-guessr/chapel2.jpg"); //The Weyerhaeuser Memorial Chapel - medium
map.set(29, "mac-guessr/chapel3.jpg"); //The Weyerhaeuser Memorial Chapel - easy
map.set(30, "mac-guessr/chapel4.jpg"); //The Weyerhaeuser Memorial Chapel - easy
map.set(31, "mac-guessr/humanities1.jpg"); //The Humanities Building - medium
map.set(32, "mac-guessr/humanities2.jpg"); //The Humanities Building - hard
map.set(33, "mac-guessr/humanities3.jpg"); //The Humanities Building - easy
map.set(34, "mac-guessr/humanities4.jpg"); //The Humanities Building - medium
map.set(35, "mac-guessr/oldmain1.jpg"); //Old Main - medium
map.set(36, "mac-guessr/oldmain2.jpg"); //Old Main - hard
map.set(37, "mac-guessr/oldmain3.jpg"); //Old Main - easy
map.set(38, "mac-guessr/oldmain4.jpg"); //Old Main - medium
map.set(39, "mac-guessr/olin1.jpg"); //Olin-Rice Science Center - medium
map.set(40, "mac-guessr/olin2.jpg"); //Olin-Rice Science Center - easy
map.set(41, "mac-guessr/olin3.jpg"); //Olin-Rice Science Center - easy
map.set(42, "mac-guessr/olin4.jpg"); //Olin-Rice Science Center - medium
map.set(43, "mac-guessr/weyerhaeuser1.jpg"); //Weyerhaeuser Hall - easy
map.set(44, "mac-guessr/weyerhaeuser2.jpg"); //Weyerhaeuser Hall - easy
map.set(45, "mac-guessr/weyerhaeuser3.jpg"); //Weyerhaeuser Hall - medium
map.set(46, "mac-guessr/weyerhaeuser4.jpg"); //Weyerhaeuser Hall - medium

//total easy - 16
//total medium - 19
//total hard - 12


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

const difficultyMap = new Map(); // first input in map is image difficulty rated 1-3
difficultyMap.set(1, "mac-guessr/theater1.jpg"); // Theater and Dance building - easy
difficultyMap.set(3, "mac-guessr/theater2.jpg"); // Theater and Dance building - hard
difficultyMap.set(2, "mac-guessr/theater3.jpg"); // Theater and Dance building - medium
difficultyMap.set(2, "mac-guessr/theater4.jpg"); // Theater and Dance building - medium
difficultyMap.set(3, 'mac-guessr/library1.jpg'); //DeWitt Wallace Library - hard
difficultyMap.set(2, 'mac-guessr/library2.jpg'); //DeWitt Wallace Library - medium
difficultyMap.set(2, 'mac-guessr/library3.jpg'); //DeWitt Wallace Library - medium
difficultyMap.set(3, 'mac-guessr/library4.jpg'); //DeWitt Wallace Library - hard
difficultyMap.set(3, 'mac-guessr/art1.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
difficultyMap.set(3, 'mac-guessr/art2.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
difficultyMap.set(3, 'mac-guessr/art3.jpg'); //Joan Adams Mondale Hall of Studio Art - hard
difficultyMap.set(2, 'mac-guessr/jwall1.jpg'); //Janet Wallace Fine Arts Center - medium
difficultyMap.set(1, 'mac-guessr/jwall2.jpg'); //Janet Wallace Fine Arts Center - easy
difficultyMap.set(3, 'mac-guessr/jwall3.jpg'); //Janet Wallace Fine Arts Center - hard
difficultyMap.set(2, 'mac-guessr/jwall4.jpg'); //Janet Wallace Fine Arts Center - medium
difficultyMap.set(2, 'mac-guessr/leonard1.jpg'); //Leonard Center Athletics and Wellness Complex - medium
difficultyMap.set(1, 'mac-guessr/leonard2.jpg'); //Leonard Center Athletics and Wellness Complex - easy
difficultyMap.set(1, 'mac-guessr/leonard3.jpg'); //Leonard Center Athletics and Wellness Complex - easy
difficultyMap.set(2, 'mac-guessr/leonard4.jpg'); //Leonard Center Athletics and Wellness Complex - medium
difficultyMap.set(2, "mac-guessr/carnegie1.jpg"); //Carnegie Hall - medium
difficultyMap.set(3, "mac-guessr/carnegie2.jpg"); //Carnegie Hall - hard
difficultyMap.set(1, "mac-guessr/carnegie3.jpg"); //Carnegie Hall - easy
difficultyMap.set(2, "mac-guessr/carnegie4.jpg"); //Carnegie Hall - medium
difficultyMap.set(1, "mac-guessr/cc1.jpg"); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set(1, "mac-guessr/cc2.jpg"); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set(1, "mac-guessr/cc3.jpg"); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set(1, "mac-guessr/cc4.jpg"); //Ruth Stricker Dayton Campus Center - easy
difficultyMap.set(2, "mac-guessr/chapel1.jpg"); //The Weyerhaeuser Memorial Chapel - medium
difficultyMap.set(2, "mac-guessr/chapel2.jpg"); //The Weyerhaeuser Memorial Chapel - medium
difficultyMap.set(1, "mac-guessr/chapel3.jpg"); //The Weyerhaeuser Memorial Chapel - easy
difficultyMap.set(1, "mac-guessr/chapel4.jpg"); //The Weyerhaeuser Memorial Chapel - easy
difficultyMap.set(2, "mac-guessr/humanities1.jpg"); //The Humanities Building - medium
difficultyMap.set(3, "mac-guessr/humanities2.jpg"); //The Humanities Building - hard
difficultyMap.set(1, "mac-guessr/humanities3.jpg"); //The Humanities Building - easy
difficultyMap.set(2, "mac-guessr/humanities4.jpg"); //The Humanities Building - medium
difficultyMap.set(2, "mac-guessr/oldmain1.jpg"); //Old Main - medium
difficultyMap.set(3, "mac-guessr/oldmain2.jpg"); //Old Main - hard
difficultyMap.set(1, "mac-guessr/oldmain3.jpg"); //Old Main - easy
difficultyMap.set(2, "mac-guessr/oldmain4.jpg"); //Old Main - medium
difficultyMap.set(2, "mac-guessr/olin1.jpg");  // Olin-Rice Science Center- medium
difficultyMap.set(1, "mac-guessr/olin2.jpg"); //Olin-Rice Science Center - easy
difficultyMap.set(1, "mac-guessr/olin3.jpg"); //Olin-Rice Science Center - easy
difficultyMap.set(2, "mac-guessr/olin4.jpg"); //Olin-Rice Science Center - medium
difficultyMap.set(1, "mac-guessr/weyerhaeuser1.jpg"); //Weyerhaeuser Hall - easy
difficultyMap.set(1, "mac-guessr/weyerhaeuser2.jpg"); //Weyerhaeuser Hall - easy
difficultyMap.set(2, "mac-guessr/weyerhaeuser3.jpg"); //Weyerhaeuser Hall - medium
difficultyMap.set(2, "mac-guessr/weyerhaeuser4.jpg"); //Weyerhaeuser Hall - medium




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
                    building.setAttribute("stroke", "black");
                    building.setAttribute("stroke-width", "5");
                });
                building.addEventListener("mouseleave", () => {
                    down.innerHTML = "Select which building you think the image was taken in!";
                    building.setAttribute("stroke", "none");
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
    let randNum = getRandomNumber(46);
    let randImage = map.get(randNum);
    while (correctlyGuessedImages.includes(randImage)) {
        randNum = getRandomNumber(46);
        randImage = map.get(randNum);
    }
    var img = document.createElement('img');
    img.src = randImage;
    img.id = "randImage";
    img.style.height = "450px";
    document.getElementById('body').appendChild(img);

    return randImage;
}
  