var command_n_minus_1 = 0;
var command_n_minus_2 = 0;
var output_n_minus_1 = 0;
var output_n_minus_2 = 0;

var reference = 1000 - 50; //1000px - size of square

setInterval(function() {
    //motor(reference);
    controller(reference - output_n_minus_1);
}, 50);

/*
* motor(command)
*/
function motor(command) {
    //Compute output according to Z-transform function
    output = 0.002586 * command_n_minus_1
        + 0.0016858 * command_n_minus_2
        + 1.5113 * output_n_minus_1
        - 0.5487910 * output_n_minus_2;
    
    //Set square position
    var square = document.getElementById("square");
	square.style.left = output + "px";
    
    //Save values
    command_n_minus_2 = command_n_minus_1;
    command_n_minus_1 = command;
    output_n_minus_2 = output_n_minus_1;
    output_n_minus_1 = output;

    //Print values
    console.log("Ref = " + reference + " --- Output = " + output);
}

/*
* controller(error)
*/
var integral = 0;
var derivative = 0;
var last_error = 0;
function controller(error) {
    integral = integral + error;
    derivative = error - last_error;

    var kp = 20;
    var ki = 2.0;
    var kd = 10.0; //20, 30
    motor(kp*error + ki*integral + kd*derivative);

    last_error = error;
}