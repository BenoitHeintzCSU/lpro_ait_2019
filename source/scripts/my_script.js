/*
* init
* called when body loaded
*/
function init() {
	document.getElementById("test").innerHTML = "Ajouté par init();";
}

/*
* test_button
* called by button onClick
*/
function test_button() {
	alert("Clicked");
}