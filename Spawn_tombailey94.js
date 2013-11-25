// Spawn mod by tombailey94
// version 0.0.1
function procCmd(cmd) {
	var commandElements = cmd.split(" ");
	if(cmd[0] == "spawn") {
		if(cmd.length == 1) {
			clientMessage("You forgot say which mob you want to spawn.");
		}
		else if (cmd[1] == "chicken") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,10,"chicken.png")
			clientMessage("Spawned a chicken.");
		}
		else if (cmd[1] == "cow") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,11,"cow.png")
			clientMessage("Spawned a cow.");
		}
		else if (cmd[1] == "creeper") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,33,"creeper.png")
			clientMessage("Spawned a creeper.");
		}
		else if (cmd[1] == "pig") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,12,"pig.png")
			clientMessage("Spawned a pig.");
		}
		else if (cmd[1] == "sheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"sheep_fur.png")
			clientMessage("Spawned a sheep.");
		}
		else if (cmd[1] == "skeleton") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,34,"skeleton.png")
			clientMessage("Spawned a skeleton.");
		}
		else if (cmd[1] == "spider") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,35,"spider.png")
			clientMessage("Spawned a spider.");
		}
		else if (cmd[1] == "zombie") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,32,"zombie.png")
			clientMessage("Spawned a zombie.");
		}
	}
}