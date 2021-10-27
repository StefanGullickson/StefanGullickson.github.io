var up = document.getElementById('MCG_UP'); 
up.innerHTML = "Click button to start"; 
var down = document.getElementById('MCG_DOWN'); 

// Map of images to randomly select from
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
map.set(15, "mac-guessr/carnegie1.jpg"); //Carnegie Hall


// map.set(2, 'Joan Adams Mondale Hall of Studio Art'); //Joan Adams Mondale Hall of Studio Art
// map.set(3, 'Humanities Building'); //Humanities Building
// map.set(4,'Olin-Rice Science Center'); //Olin-Rice Science Center
// map.set(5, 'Leonard Center athletics and wellness complex'); //Leonard Center
// map.set(6, 'Janet Wallace Fine Arts Center'); //Janet Wallace Fine Arts Center
// map.set(7, 'Old Main'); //Old Main
// map.set(12, 'Ruth Stricker Dayton Campus Center'); //Ruth Stricker
// map.set(13,'Weyerhaeuser Memorial Chapel'); //Weyerhaeuser Memorial Chapel
// map.set(14, 'Markim Hall'); //Markim Hall
// map.set(15, 'Kagin Commons'); //Kagin Commons
// map.set(16, 'Weyerhaeuser Hall'); //Weyerhaeuser Hall
// map.set(17, '77 Mac'); //77 Mac
// map.set(18, 'Kirk Hall'); //Kirk Hall

// Begin game function: adds map and random image to body of document
function MCG_Pic() {


    let lives = 3;

    // adds the visual map to the document, and function for clicking on buildings
    let mapImage = document.createElement('object');
    mapImage.data = 'mac-guessr/mcgpicnew.svg';
    mapImage.type = "image/svg+xml";
    mapImage.id = "mapImage";
    mapImage.style.height = "600px";
    document.getElementById('body').appendChild(mapImage);
    
    // Gets a random image from the map and adds it to the document
    let randNum = randNumber(15);
    let randImage = map.get(randNum);
    var img = document.createElement('img');
    img.src = randImage;
    img.id = "randImage";
    img.style.height = "600px";
    document.getElementById('body').appendChild(img);
    let buildingName = grabImageLocation(randImage);
    
    mapImage.addEventListener("load", () => {
        mapImage.contentDocument
            .querySelectorAll("#buildings > *")
            .forEach((building) => {
                building.addEventListener("click", () => {
                    console.log(building.id);
                    if (building.id === buildingName) {
                        console.log("that's correct!");
                        down.innerHTML = "That is correct!";
                        buttonReset();
                    } else {
                        lives -= 1;
                        console.log("that's incorrect.");
                        if (lives === 1) {
                            down.innerHTML = "That is incorrect. You have " + lives + " guess remaining.";
                        } else if  (lives === 0){
                            down.innerHTML = "That is incorrect. You lost! The correct building was " + buildingName + ".";
                            buttonReset();
                        } else {
                            down.innerHTML = "That is incorrect. You have " + lives + " guesses remaining.";
                        }
                        
                    }
                });
            });
    });




    
    document.getElementById("Button").disabled=true;
    document.getElementById("MCG_UP").hidden=true;
    down.innerHTML = "Select which building you think the image was taken in!";
} 

function Game_Rules(x) {
    x.style.height = "50px";
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

function buttonReset() {
    document.querySelector('#Button').textContent = 'Reset Game';    
    document.querySelector('#Button').disabled = false;
    document.querySelector('#Button').onclick = 
    function() {
        console.log('reseting');
        // document.removeChild(document.getElementById('body').getAttributeNode('randImage'));
        console.log(document);
        console.log(document.getElementById('randImage'));
        //let ob=document.getElementById('randImage');
        //let ob2=document.getElementById('mapImage');
        document.body.removeChild(document.getElementById('randImage'));
        document.body.removeChild(document.getElementById('mapImage'));
        //document.removeChild(document.getElementById('mapImage'));
        // document.getElementbyId('body').removeChild(document.getElementById('randImage'));
        // console.log(document.getElementById('mapImage'));
        // console.log(document.getElementById('randImage'));
        // while (document.firstChild) {
        //     document.removeChild(document.firstChild);
        // }
        MCG_Pic();
    }; 
}
  

