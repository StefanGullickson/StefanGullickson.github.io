var up = document.getElementById('MCG_UP'); 
    up.innerHTML = "Click button to start"; 
    var down = document.getElementById('MCG_DOWN'); 
    function MCG_Pic() {
        var img = document.createElement('img');
        img.src = 'mac-guessr/mcgpic.png';
        var img = document.createElement('img');
        img.src = 'mac-guessr/theater1.jpg';

        if (!document.getElementById('body').contains(img)) {
            document.getElementById('body').appendChild(img);
            down.innerHTML = " ";
        }
    } 