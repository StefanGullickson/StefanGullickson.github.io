var up = document.getElementById('MCG_UP'); 
    up.innerHTML = "Click button to start"; 
    var down = document.getElementById('MCG_DOWN'); 
    function MCG_Pic() {
        var img = document.createElement('img');
        img.src = 'mac-guessr/mcgpic.png';
        img.style.height = "300px";
        if (!document.getElementById('body').contains(img)) {
            document.getElementById('body').appendChild(img);
            down.innerHTML = " ";
        }

        var img2 = document.createElement('img');
        img2.src = 'mac-guessr/theater1.jpg';
        img2.style.height = "300px";
        if (!document.getElementById('body').contains(img2)) {
            document.getElementById('body').appendChild(img2);
            down.innerHTML = " ";
        }
    } 
    const map = new Map();
    map.set(b1, 'Janet Wallace Fine Arts Center');
    map.set(b2, 'Theater and Dance Building');
    map.set(b3, 'Joan Adams Mondale Hall of Studio Art');
    map.set(b4, 'Humanities Building');
    map.set(b5,'Olin-Rice Science Center');
    map.set(b6, 'Leonard Center athletics and wellness complex');
    map.set(b7, 'Carnegie Hall');
    map.set(b8, 'Old Main');
    map.set(b9, 'DeWitt Wallace Library');
    map.set(b10, 'Ruth Stricker Dayton Campus Center');
    map.set(b11,'Weyerhaeuser Memorial Chapel');
    map.set(b12, 'Markim Hall');
    map.set(b13, 'Kagin Commons');
    
    
    
    let guessMatch = False;
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

campusMap.addEventListener("click", getClickPosition, false);

function getClickPosition(event) {
    var xPosition = x.clientX;
    var yPosition = y.clientY;
    return {
        x: xPosition,
        y: yPosition
    };
}

var head = document.getElementsByTagName('HEAD')[0]; 
        var link = document.createElement('link');
        link.rel = 'stylesheet'; 
        link.type = 'text/css';
        link.href = 'layout.css'; 
        document.body.appendChild(link);

