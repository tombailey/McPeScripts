// Switch Gamemode mod by tombailey94
// version 0.0.1
function procCmd(cmd) {
	if(cmd == "survival") { //if command was /survival
		Level.setGameMode(0); //change to survival
	} else if (cmd == "creative") { //if command was /creative
		Level.setGameMode(1); //change to creative
	}
}