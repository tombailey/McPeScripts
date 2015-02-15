// Basic Commands mod by tombailey94; uses the DayAndNight as well as SwtichGamemode mod also made by myself :)
// version 0.0.2

function procCmd(cmd) {
	if(cmd == "day") { 
		Level.setTime(0); 
		clientMessage("Time set to day.");
	} else if (cmd == "night") { 
		Level.setTime(14000); 
		clientMessage("Time set to night.");
	} else if(cmd == "survival" || cmd == "creative") { 
		Level.setGameMode(Level.getGameMode() ? 0 : 1);
		clientMessage("Gamemode set to " + (Level.getGameMode() ? "survival" : "creative") + ".");
	} else if(cmd == "heal") { 
		Player.setHealth(20); 
		clientMessage("Health set to 10 hearts.");
	}
}