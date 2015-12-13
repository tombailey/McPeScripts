/*
Spawn mod by tombailey94
version 0.0.2
more updated mobs and colored sheep! By adrianwebster (adrianmodr) much much wow huge update.
*/
function procCmd(cmd) {
	var commandElements = cmd.split(" ");
	if(commandElements[0] == "spawn") {
		if(commandElements.length == 1) {
			clientMessage("You forgot say which mob you want to spawn.");
		}
		else if (commandElements[1].toLowerCase() == "chicken") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,10,"mob/chicken.png");
			clientMessage("Spawned a chicken.");
		}
		else if (commandElements[1].toLowerCase() == "cow") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,11,"mob/cow.png");
			clientMessage("Spawned a cow.");
		}
		else if (commandElements[1].toLowerCase() == "creeper") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,33,"mob/creeper.png");
			clientMessage("Spawned a creeper.");
		}
		else if (commandElements[1].toLowerCase() == "pig") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,12,"mob/pig.png");
			clientMessage("Spawned a pig.");
		}
		else if (commandElements[1].toLowerCase() == "sheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_0.png"); //thats the right name (as of 0.10.5)
			clientMessage("Spawned a sheep.");
		}
		else if (commandElements[1].toLowerCase() == "orangesheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_1.png");
			clientMessage("Spawned a orange sheep.");
		}
		else if (commandElements[1].toLowerCase() == "purplesheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_2.png");
			clientMessage("Spawned a purple sheep.");
		}
		else if (commandElements[1].toLowerCase() == "lightbluesheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_3.png");
			clientMessage("Spawned a lightblue sheep.");
		}
		else if (commandElements[1].toLowerCase() == "yellowsheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_4.png");
			clientMessage("Spawned a yellow sheep.");
		}
		else if (commandElements[1].toLowerCase() == "limesheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_5.png");
			clientMessage("Spawned a lime sheep.");
		}
		else if (commandElements[1].toLowerCase() == "pinksheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_6.png");
			clientMessage("Spawned a pink sheep.");
		}
		else if (commandElements[1].toLowerCase() == "greysheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_7.png");
			clientMessage("Spawned a grey sheep.");
		}
		else if (commandElements[1].toLowerCase() == "lightgreysheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_8.png");
			clientMessage("Spawned a lightgrey sheep.");
		}
		else if (commandElements[1].toLowerCase() == "aquasheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_9.png");
			clientMessage("Spawned a aqua sheep.");
		}
		else if (commandElements[1].toLowerCase() == "darkpurplesheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_10.png");
			clientMessage("Spawned a darkpurple sheep.");
		}
		else if (commandElements[1].toLowerCase() == "darkbluesheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_11.png");
			clientMessage("Spawned a darkblue sheep.");
		}
		else if (commandElements[1].toLowerCase() == "brownsheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_12.png"); //omg much sheep colors wow
			clientMessage("Spawned a brown sheep.");
		}
		else if (commandElements[1].toLowerCase() == "barfgreensheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_13.png");
			clientMessage("Spawned a barfgreen sheep lol.");
		}
		else if (commandElements[1].toLowerCase() == "redsheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_14.png");
			clientMessage("Spawned a red sheep.");
		}
		else if (commandElements[1].toLowerCase() == "blacksheep") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,13,"mob/sheep_15.png");
			clientMessage("Spawned a black sheep.");
		}
		else if (commandElements[1].toLowerCase() == "skeleton") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,34,"mob/skeleton.png");
			clientMessage("Spawned a skeleton.");
		}
		else if (commandElements[1].toLowerCase() == "spider") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,35,"mob/spider.png");
			clientMessage("Spawned a spider.");
		}
		else if (commandElements[1].toLowerCase() == "zombie") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,32,"mob/zombie.png");
			clientMessage("Spawned a zombie.");
		}
		else if (commandElements[1].toLowerCase() == "villager") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,15,"mob/villager/villager.png");
			clientMessage("Spawned a villager.");
		}
		else if (commandElements[1].toLowerCase() == "silverfish") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,39,"mob/silverfish.png");
			clientMessage("Spawned a silverfish.");
		}
		else if (commandElements[1].toLowerCase() == "enderman") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,38,"mob/enderman.png");
			clientMessage("Spawned a enderman.");
		}
		else if (commandElements[1].toLowerCase() == "mooshroom") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,16,"mob/mooshroom.png");
			clientMessage("Spawned a mooshroom.");
		}
		else if (commandElements[1].toLowerCase() == "slime") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,37,"mob/slime.png");
			clientMessage("Spawned a slime.");
		}
		else if (commandElements[1].toLowerCase() == "zombiepigman") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,36,"mob/pigzombie.png");
			clientMessage("Spawned a zombiepigman.");
		}
		else if (commandElements[1].toLowerCase() == "wolf") {
			Level.spawnMob(getPlayerX,getPlayerY,getPlayerZ,14,"mob/wolf.png");
			clientMessage("Spawned a wolf.");
		}
		else {
			clientMessage("Unknown mob.");
		}
	}
}
