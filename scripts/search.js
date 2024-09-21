console.log("search.js added");

function go() {
    var recup = document.getElementById("input").value;
    if (recup==="Chute de fruits") {
        window.location.href="games/chuteDeFruits/chute de fruits.html";
    }
    else {
        window.location.href="games/"+recup+".html";
    }
}