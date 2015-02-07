/*
Switch Gamemode mod by tombailey94
version 0.0.2
Checks gamemode (adrianwebster/adrianmodr)
*/

function procCmd(cmd) {
	if(cmd == "survival") { //if command was /survival
	if(Level.getGameMode()!=0){ //if gamemode wasnt survival
		Level.setGameMode(0); //change to survival
	}
	} else if (cmd == "creative") { //if command was /creative
	if(Level.getGameMode()!=1){ //if wasnt already creative
		Level.setGameMode(1); //change to creative
	}
	}
}
