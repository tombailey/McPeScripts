//LuckyBlock mod by tombailey94; with credit to PlayerInDistress (http://www.minecraftforum.net/topic/2031111-164-lucky-block-drops-items-spawns-mobs-structures-and-more/) and NOAHZ (http://www.minecraftforum.net/topic/2174428-noahzdarkdiaminers-modscripts-new-darkdiamondminers-mods/)
// version10.00

var goldId = 41;

ModPE.overrideTexture("images/terrain-atlas.tga","http://www.tombailey.me/projects/modpe/luckyblocks.tga");

function procCmd(cmd) {
	if(cmd == "resettextures") {
		ModPE.resetImages();
		clientMessage("Restart BlockLauncher to apply this.");
	}
}

function destroyBlock(x, y, z, side) {
	var blockId = getTile(x,y,z);
	
	if (blockId == goldId) {
		var rnd = Math.floor(Math.random()*(10)); //(pseudo) random number between 0 and 9
		
		if (rnd == 0 || rnd == 1) {
			rnd = Math.floor(Math.random()*(5)); //random number between 0 and 4
			
			Level.setTime(8280); //set to night for mobs not to burn (doesn't seem to work :S)
			
			if (rnd == 0) { //creepers
				Level.spawnMob(x+4,y,z+4,33);
				Level.spawnMob(x-4,y,z+4,33);
				Level.spawnMob(x+4,y,z-4,33);
				Level.spawnMob(x-4,y,z-4,33);
			} else if (rnd == 1) { //zombie pigmen
				Level.spawnMob(x+4,y,z+4,32);
				Level.spawnMob(x-4,y,z+4,32);
				Level.spawnMob(x+4,y,z-4,32);
				Level.spawnMob(x-4,y,z-4,32);
			} else if (rnd == 2) { //skeletons
				Level.spawnMob(x+4,y,z+4,34);
				Level.spawnMob(x-4,y,z+4,34);
				Level.spawnMob(x+4,y,z-4,34);
				Level.spawnMob(x-4,y,z-4,34);
			} else if (rnd == 3) { //spiders
				Level.spawnMob(x+4,y,z+4,35);
				Level.spawnMob(x-4,y,z+4,35);
				Level.spawnMob(x+4,y,z-4,35);
				Level.spawnMob(x-4,y,z-4,35);
			} else { //all of the above
				Level.spawnMob(x+4,y,z+4,33);
				Level.spawnMob(x-4,y,z+4,33);
				Level.spawnMob(x+4,y,z-4,33);
				Level.spawnMob(x-4,y,z-4,33);
				Level.spawnMob(x+4,y,z+4,32);
				Level.spawnMob(x-4,y,z+4,32);
				Level.spawnMob(x+4,y,z-4,32);
				Level.spawnMob(x-4,y,z-4,32);
				Level.spawnMob(x+4,y,z+4,34);
				Level.spawnMob(x-4,y,z+4,34);
				Level.spawnMob(x+4,y,z-4,34);
				Level.spawnMob(x-4,y,z-4,34);
				Level.spawnMob(x+4,y,z+4,35);
				Level.spawnMob(x-4,y,z+4,35);
				Level.spawnMob(x+4,y,z-4,35);
				Level.spawnMob(x-4,y,z-4,35);
			}			
		} else if (rnd == 2 || rnd == 3 || rnd == 4 || rnd == 5 || rnd == 6 || rnd == 7 || rnd == 8) {
			rnd = Math.floor(Math.random()*(10)); //random number between 0 and 9
			
			if (rnd == 0) { //diamond armour
				Level.dropItem(x,y,z,0,310,1,0); 
				Level.dropItem(x,y,z,0,311,1,0);
				Level.dropItem(x,y,z,0,312,1,0);
				Level.dropItem(x,y,z,0,313,64,0);
			} else if (rnd == 1) { //compass, clock, bow and arrows 
				Level.dropItem(x,y,z,0,345,1,0); 
				Level.dropItem(x,y,z,0,347,1,0);
				Level.dropItem(x,y,z,0,261,1,0);
				Level.dropItem(x,y,z,0,262,64,0);
			} else if (rnd == 2) { //leather armour
				Level.dropItem(x,y,z,0,298,1,0); 
				Level.dropItem(x,y,z,0,299,1,0);
				Level.dropItem(x,y,z,0,300,1,0);
				Level.dropItem(x,y,z,0,301,1,0);
			} else if (rnd == 3) { //drops a iron sword, shovel and pickaxe
				Level.dropItem(x,y,z,0,267,1,0); 
				Level.dropItem(x,y,z,0,256,1,0);
				Level.dropItem(x,y,z,0,257,1,0);
			} else if (rnd == 4) { //drops a stone sword, hoe and axe
				Level.dropItem(x,y,z,0,272,1,0); 
				Level.dropItem(x,y,z,0,291,1,0);
				Level.dropItem(x,y,z,0,275,1,0);
			} else if (rnd == 5) { //carrots
				Level.dropItem(x,y,z,0,391,Math.floor(Math.random()*(6)+1),0); //drop anywhere from 1 to 6 carrots
			} else if (rnd == 6) { //apples
				Level.dropItem(x,y,z,0,260,Math.floor(Math.random()*(6)+1),0); //drop anywhere from 1 to 6 apples
			} else if (rnd == 7) { //emeralds
				Level.dropItem(x,y,z,0,388,Math.floor(Math.random()*(10)+1),0); //drop anywhere from 1 to 10 emeralds
			} else if (rnd == 8) { //gunpowder
				Level.dropItem(x,y,z,0,289,Math.floor(Math.random()*(6)+1),0); //drop anywhere from 1 to 6 gunpowder
			} else { //luck stuff
				Level.dropItem(x,y,z,0,264,Math.floor(Math.random()*(3)+1),0); //drop anywhere from 1 to 3 diamonds
				Level.dropItem(x,y,z,0,265,Math.floor(Math.random()*(6)+1),0); //drop anywhere from 1 to 6 iron
				Level.dropItem(x,y,z,0,266,Math.floor(Math.random()*(3)+1),0); //drop anywhere from 1 to 3 diamonds
			}
			
		} else {
			rnd = Math.floor(Math.random()*(3)); //random number between 0 and 2
			
			var playerX = getPlayerX();
			var playerY = getPlayerY();
			var playerZ = getPlayerZ();
			
			if (rnd == 0) { //creates a jail type structure (with iron bars) and spawns falling spawn above the players head
				
				setTile(playerX+1, playerY-1, playerZ, 101); //front, back and sides
				setTile(playerX+1, playerY, playerZ, 101);
				setTile(playerX-1, playerY-1, playerZ, 101);
				setTile(playerX-1, playerY, playerZ, 101);
				setTile(playerX, playerY-1, playerZ+1, 101); 
				setTile(playerX, playerY-1, playerZ-1, 101);
				setTile(playerX, playerY, playerZ+1, 101);
				setTile(playerX, playerY, playerZ-1, 101);
				
				setTile(playerX+1, playerY-1, playerZ+1, 101); //corners
				setTile(playerX+1, playerY, playerZ+1, 101);
				setTile(playerX-1, playerY-1, playerZ+1, 101); 
				setTile(playerX-1, playerY, playerZ+1, 101);
				setTile(playerX+1, playerY-1, playerZ-1, 101); 
				setTile(playerX+1, playerY, playerZ-1, 101);
				setTile(playerX-1, playerY-1, playerZ-1, 101); 
				setTile(playerX-1, playerY, playerZ-1, 101);
				
				setTile(playerX, playerY+50, playerZ, 12); //dat sand doe
				setTile(playerX, playerY+51, playerZ, 12);
				
				clientMessage("Look up!");
			
			} else if (rnd == 1) { //sandstone structure
				setTile(playerX+2, playerY, playerZ-2, 24);
				setTile(playerX-2, playerY, playerZ+2, 24);
				setTile(playerX-2, playerY, playerZ-2, 24);
				setTile(playerX+2, playerY, playerZ+2, 24);
				setTile(playerX+2, playerY, playerZ, 24);
				setTile(playerX-2, playerY, playerZ, 24);
				setTile(playerX, playerY, playerZ+2, 24);
				setTile(playerX, playerY, playerZ-2, 24);
				
				setTile(playerX+2, playerY-1, playerZ-2, 24);
				setTile(playerX-2, playerY-1, playerZ+2, 24);
				setTile(playerX-2, playerY-1, playerZ-2, 24);
				setTile(playerX+2, playerY-1, playerZ+2, 24);
				setTile(playerX+2, playerY-1, playerZ, 24);
				setTile(playerX-2, playerY-1, playerZ, 24);
				setTile(playerX, playerY-1, playerZ+2, 24);
				setTile(playerX, playerY-1, playerZ-2, 24);
				
				setTile(playerX+2, playerY, playerZ-1, 24);
				setTile(playerX-2, playerY, playerZ+1, 24);
				setTile(playerX-1, playerY, playerZ-2, 24);
				setTile(playerX+1, playerY, playerZ+2, 24);
				setTile(playerX+1, playerY, playerZ-2, 24);
				setTile(playerX-1, playerY, playerZ+2, 24);
				setTile(playerX-2, playerY, playerZ-1, 24);
				setTile(playerX+2, playerY, playerZ+1, 24);
				
				setTile(playerX+2, playerY-1, playerZ-1, 24);
				setTile(playerX-2, playerY-1, playerZ+1, 24);
				setTile(playerX-1, playerY-1, playerZ-2, 24);
				setTile(playerX+1, playerY-1, playerZ+2, 24);
				setTile(playerX+1, playerY-1, playerZ-2, 24);
				setTile(playerX-1, playerY-1, playerZ+2, 24);
				setTile(playerX-2, playerY-1, playerZ-1, 24);
				setTile(playerX+2, playerY-1, playerZ+1, 24);
				
				setTile(playerX, playerY-2, playerZ, 24); //under player
				
				setTile(playerX+1, playerY-2, playerZ-1, 24); //corners
				setTile(playerX-1, playerY-2, playerZ+1, 24);
				setTile(playerX-1, playerY-2, playerZ-1, 24);
				setTile(playerX+1, playerY-2, playerZ+1, 24);
				
				setTile(playerX, playerY-2, playerZ-1, 24); //sides
				setTile(playerX, playerY-2, playerZ+1, 24);
				setTile(playerX-1, playerY-2, playerZ, 24);
				setTile(playerX+1, playerY-2, playerZ, 24);
				
				
				setTile(playerX+1, playerY-1, playerZ-1, goldId);
				setTile(playerX-1, playerY-1, playerZ+1, goldId);
				setTile(playerX-1, playerY-1, playerZ-1, goldId);
				setTile(playerX+1, playerY-1, playerZ+1, goldId);
				
				
			} else { //primed TnT
				Level.spawnMob(x+1,y,z,65);
				Level.spawnMob(x,y,z+1,65);
			}
		}
		
		Level.destroyBlock(x,y,z,false); //destroy the gold block
	}
}
