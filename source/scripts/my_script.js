var position = 0;
var movingLeft = true;
var counter = 0;
//var myTimer = setInterval(move, 50);


/*
* move
* move square to position
*/
function move() {
	var square = document.getElementById("square");
	square.style.left = position + "px";
	
	if (position >= 500)
		movingLeft = false;
	else if (position <= 0) {
		movingLeft = true;
		console.log("Counter: " + counter);
		counter ++;
	}

	if (movingLeft)
		position += 10;
	else
		position -= 10;

	if (counter > 3)
		clearInterval(myTimer);
}