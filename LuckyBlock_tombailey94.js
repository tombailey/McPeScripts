var goldId = 41;

function useItem(x,y,z,itemId,blockId,side) {
	if (blockId == goldId) {
		var rnd = Math.floor(Math.random()*(6));  //(pseudo) random number between 0 to 6
		if(rnd == 0) {
			Level.explode(x,y,z,5);
		} else if(rnd == 1) {
			Level.dropItem(x,y,z,0,264,3,0); //drop 3 diamonds
		} else if(rnd == 2) {
			Player.setHealth(0); //kills player
		} else if(rnd == 3) {
			Level.dropItem(x,y,z,0,306,1,0); //drops iron armour
			Level.dropItem(x,y,z,0,307,1,0);
			Level.dropItem(x,y,z,0,308,1,0);
			Level.dropItem(x,y,z,0,309,1,0);
		} else if(rnd == 4) {
			Level.spawnMob(x,y,z,10,"mob/chicken.png"); //spawns a chicken
		} else if(rnd == 5) {
			Level.spawnMob(x,y,z,11,"mob/cow.png"); //spawns a cow
		}
		Level.destroyBlock(x,y,z,false); //destroy the gold block
	}
}