console.log("search.js added");

function go() {
    var recup = document.getElementById("input").value;
    if (recup==="Chute de fruits") {
        window.location.href="games/chuteDeFruits/chute de fruits.html";
    }
    
    else if (recup==="pacman") {
        window.location.href="https://www.google.fr/logos/2010/pacman10-hp.html#bg=black";
    }
    
    else if (recup==="space invader") {
        window.location.href="https://games.crazygames.com/fr_FR/space-invaders/index.html?v=1.303";
    }
    
    else {
        window.location.href="games/"+recup+".html";
    }
}
