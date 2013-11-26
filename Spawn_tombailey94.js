// Spawn mod by tombailey94
// version 0.0.1
function procCmd(cmd) {
	clientMessage(cmd);
	var commandElements = cmd.split(" ");
	clientMessage(commandElements);
	if(commandElements[0] == "spawn") {
		if(commandElements.length == 1) {
			clientMessage("You forgot say which mob you want to spawn.");
		}
		else if (commandElements[1] == "chicken") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,10,"mob/chicken.png")
			clientMessage("Spawned a chicken.");
		}
		else if (commandElements[1] == "cow") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,11,"mob/cow")
			clientMessage("Spawned a cow.");
		}
		else if (commandElements[1] == "creeper") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,33,"mob/creeper")
			clientMessage("Spawned a creeper.");
		}
		else if (commandElements[1] == "pig") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,12,"mob/pig")
			clientMessage("Spawned a pig.");
		}
		else if (commandElements[1] == "sheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_fur")
			clientMessage("Spawned a sheep.");
		}
		else if (commandElements[1] == "skeleton") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,34,"mob/skeleton")
			clientMessage("Spawned a skeleton.");
		}
		else if (commandElements[1] == "spider") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,35,"mob/spider")
			clientMessage("Spawned a spider.");
		}
		else if (commandElements[1] == "zombie") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,32,"mob/zombie")
			clientMessage("Spawned a zombie.");
		}
		else {
			clientMessage("Unknown mob.");
		}
	}
}