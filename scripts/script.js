console.log("Script ajouté avec succes.");
function easteregg() {
	window.location.href="games/eastereggs/index.html";
}
function over(id1) {
	console.log(1);
	document.getElementById("d"+id1).setAttribute("open", "");
}

function out(id2) {
	console.log(2);
	document.getElementById("d"+id2).removeAttribute("open");
}
