// Basic Commands mod by tombailey94; uses the DayAndNight as well as SwtichGamemode mod also made by myself :)
// version 0.0.2
// now checks gamemode to prevent setting the same gamemode again (adrianwebster/adrianmodr)
function procCmd(cmd) {
	//commands without parameters. e.g. '/day'
	//DayAndNight commands
	if(cmd == "day") { //if command was /day
		Level.setTime(0); //change time to day
		clientMessage("Time set to day.");
	} else if (cmd == "night") { //if command was /night
		Level.setTime(14000); //change time to night
		clientMessage("Time set to night.");
	} 
	//SwitchGamemode commands
	else if(cmd == "survival") { //if command was /survival
	if(Level.getGameMode()!=0){
		Level.setGameMode(0); //change to survival
		clientMessage("Gamemode set to survival.");
	}else{
		clientMessage("You already are survival");
	}
	} else if (cmd == "creative") { //if command was /creative
	if(Level.getGameMode()!=1){
		Level.setGameMode(1); //change to creative
		clientMessage("Gamemode set to creative.");
	}else{
		clientMessage("You already are creative");
	}
	}
	//heal command
	else if(cmd == "heal") { //if command was /heal
		Player.setHealth(20); //heal the player; 20 half hearts or 10 whole hearts
		clientMessage("Health set to 10 hearts.");
	}
}
