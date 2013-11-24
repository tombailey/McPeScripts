// Basic Commands mod by tombailey94; uses the DayAndNight as well as SwtichGamemode mod also made by myself :)
// version 0.0.1
function procCmd(cmd) {
	//DayAndNight commands
	if(cmd == "day") { //if command was /day
		Level.setTime(0); //change time to day
	} else if (cmd == "night") { //if command was /night
		Level.setTime(14000); //change time to night
	} 
	//SwitchGamemode commands
	else if(cmd == "survival") { //if command was /survival
		Level.setGameMode(0); //change to survival
	} else if (cmd == "creative") { //if command was /creative
		Level.setGameMode(1); //change to creative
	}
}