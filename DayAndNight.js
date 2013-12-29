// Day and Night mod by tombailey94
// version 0.0.1
function procCmd(cmd) {
	if(cmd == "day") { //if command was /day
		Level.setTime(0); //change time to day
	} else if (cmd == "night") { //if command was /night
		Level.setTime(14000); //change time to night
	}
