var marge = 0;
var nombre=true;
var signe=true;
var points=0;
var vies = 1;

function videostart(){
        document.getElementById('game').innerHTML="<video autoplay='' width='100%'><source src='Présentation.mp4' type='video/mp4'></video>";
        document.getElementById('jsf').innerHTML="<button class='skype' title='passer les règles' onclick='gogame()'>Passer les règles</button>";
        setTimeout("gogame()",28000);
       
}

function audiostart(){
        audio = new Audio("click.wav");
        audio.play();
        videostart();
}

function gogame(){
        document.getElementById('game').innerHTML="<center><img class='img' style='visibility:visible;' src='images/panier.png' id='panier'></img><img class='img' src='images/banane.png' id='1'></img><img class='img' src='images/pomme.png' id='2'></img><img class='img' src='images/pasteque.png' id='3'></img><img class='img' src='images/cerise.png' id='4'></img><img class='img' src='images/fraise.png' id='5'></img><img class='img' src='images/orange.png' id='6'></img><img class='img' src='images/passion.png' id='7'></img><img class='img' src='images/bombe.png' id='8'></img><img class='img' src='images/sncf.svg' id='9'></img>";
        document.getElementById('jsf').innerHTML="";
        document.getElementById("compte").removeAttribute("style");
        play();
}

function play() {
	nombreRandom(10)
  	function nombreRandom(max) {
  		nombre = Math.floor(Math.random() * max);
	}
	poseRandom(5)
  	function poseRandom(max) {
                pose = Math.floor(Math.random() * max);
	}
        signeRandom(2)
  	function signeRandom(max) {
                signe = Math.floor(Math.random() * max);
	}
        if (signe===1) {
                signe = "+";
                console.log(signe);
        }
        else {
                signe = "-";
                console.log(signe);
        }
        pose = pose*50;
        pose =  signe+pose;
        if (pose===-0){
                pose=0;
        }
        else{}
        pose = parseInt(pose);
        console.log(pose);
        console.log(nombre);
	document.getElementById(nombre).removeAttribute("style");
        document.getElementById(nombre).setAttribute("style","animation: 1.5s linear 0s slidein;margin-left:"+pose+"px;");
        setTimeout("test();",1500);
}
function test() {
        if (pose===marge || pose===marge+50 || pose===marge-50) {
                console.log("ok");
                if(nombre===8){
                        vies=vies-1;
                        console.log("8");
                }
                else if (nombre===9){
                        vies=vies+1;
                        console.log("9");
                }
                else{
                        points=points+1;
                        console.log("auther");
                }
        }
        else{
                console.log("raté...");
        }
        document.getElementById("pts").innerHTML=points;
        document.getElementById("live").innerHTML=vies;
        if (vies===0){
                alert("Vous avez perdu.\nVotre score est de "+points+"points.");
                window.location.href="";
        }
        else if (points===10){
                alert("Vous avez gagné !");
                window.location.href="";
        }
        else {
                play();
        }

}

document.addEventListener("keydown",(event) => {
	const touche = event.key;
	
	if (event.key) {

		if (touche==="ArrowLeft"){
                        if (marge===-250) {
                        }

                        else {
                                marge-=50;
		                document.getElementById("panier").removeAttribute("style");
                                document.getElementById("panier").setAttribute("style","margin-left:"+marge+"px;visibility:visible;");
                                marge = parseInt(marge);
                                console.log(marge);
                        }
		}
                else if (touche==="ArrowRight"){
                        if (marge===250) {
                        }

                        else {
                                marge+=50;
                                document.getElementById("panier").removeAttribute("style");
                                document.getElementById("panier").setAttribute("style","margin-left:"+marge+"px;visibility:visible;");
                                marge = parseInt(marge);
                                console.log(marge);
                        }
		}
		else {
		}
	}

},false,);
