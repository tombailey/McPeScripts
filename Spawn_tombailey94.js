// Spawn mod by tombailey94
// version 0.0.1
function procCmd(cmd) {
	var commandElements = cmd.split(" ");
	if(commandElements[0] == "spawn") {
		if(commandElements.length == 1) {
			clientMessage("You forgot say which mob you want to spawn.");
		}
		else if (commandElements[1].toLowerCase() == "chicken") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,10,"mob/chicken.png")
			clientMessage("Spawned a chicken.");
		}
		else if (commandElements[1].toLowerCase() == "cow") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,11,"mob/cow.png")
			clientMessage("Spawned a cow.");
		}
		else if (commandElements[1].toLowerCase() == "creeper") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,33,"mob/creeper.png")
			clientMessage("Spawned a creeper.");
		}
		else if (commandElements[1].toLowerCase() == "pig") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,12,"mob/pig.png")
			clientMessage("Spawned a pig.");
		}
		else if (commandElements[1].toLowerCase() == "sheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_fur.png")//sure correct name?
			clientMessage("Spawned a sheep.");
		}
		else if (commandElements[1].toLowerCase() == "skeleton") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,34,"mob/skeleton.png")
			clientMessage("Spawned a skeleton.");
		}
		else if (commandElements[1].toLowerCase() == "spider") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,35,"mob/spider.png")
			clientMessage("Spawned a spider.");
		}
		else if (commandElements[1].toLowerCase() == "zombie") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,32,"mob/zombie.png")
			clientMessage("Spawned a zombie.");
		}
		else {
			clientMessage("Unknown mob.");
		}
	}
}
