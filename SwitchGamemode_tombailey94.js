// Switch Gamemode mod by tombailey94
// version 0.0.2

function procCmd(cmd) {
	if(cmd == "survival" || cmd == "creative") { 
		Level.setGameMode(Level.getGameMode() ? 0 : 1);
		clientMessage("Gamemode set to " + (Level.getGameMode() ? "survival" : "creative") + ".");
	}
}