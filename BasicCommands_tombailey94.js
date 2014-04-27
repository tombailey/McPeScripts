// Basic Commands mod by tombailey94; uses the DayAndNight as well as SwtichGamemode mod also made by myself :)
// version 0.0.1
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
		Level.setGameMode(0); //change to survival
		clientMessage("Gamemode set to survival.");
	} else if (cmd == "creative") { //if command was /creative
		Level.setGameMode(1); //change to creative
		clientMessage("Gamemode set to creative.");
	}
	//heal command
	else if(cmd == "heal") { //if command was /heal
		Player.setHealth(20); //heal the player; 20 half hearts or 10 whole hearts
		clientMessage("Health set to 10 hearts.");
	}
}        //give command
         else if(cmd == "give") { //if command was /give; 20 diamonds 
                Player.setGive(20)
                clientMessage("Give Dianond 20")
