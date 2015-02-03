//LuckyBlock mod by tombailey94; with credit to PlayerInDistress (http://www.minecraftforum.net/topic/2031111-164-lucky-block-drops-items-spawns-mobs-structures-and-more/) and NOAHZ (http://www.minecraftforum.net/topic/2174428-noahzdarkdiaminers-modscripts-new-darkdiamondminers-mods/)
// version 0.0.6

var goldId = 41;

function destroyBlock(x, y, z, side) {
	var blockId = Level.getTile(x, y, z);
	
	if (blockId == goldId) {
		var rnd = random(0, 9);
		
		if (rnd == 0 || rnd == 1) {
			rnd = random(0, 4);
			
			var mobs = [];
			
			if (rnd == 0) { //creepers
				mobs.push(33);
			} else if (rnd == 1) { //zombie pigmen
				mobs.push(32);
			} else if (rnd == 2) { //skeletons
				mobs.push(34);
			} else if (rnd == 3) { //spiders
				mobs.push(35);
			} else { //all of the above
				mobs.push(33);
				mobs.push(32);
				mobs.push(34);
				mobs.push(35);
			}

			for (var i in mobs) {
				for (var j = 0; j < 4; j++) {
					var xIncrement = (j % 2 == 0 ? 4 : -4);
					var zIncrement = ((j == 0 || j == 1) ? 4 : -4);
					
					Level.spawnMob(x+xIncrement, y, z+zIncrement, mobs[i]);
				}
			}
			
		} else if (rnd > 1 && rnd < 9) {
			rnd = random(0, 12);
			
			if (rnd == 0) { //compass and clock
				Level.dropItem(x,y,z,0,345,1,0); 
				Level.dropItem(x,y,z,0,347,1,0);
			} else if (rnd == 1) { //bow and arrows 
				Level.dropItem(x,y,z,0,261,1,0);
				Level.dropItem(x,y,z,0,262,64,0);
			} else if (rnd == 2) { //leather armour (cap and tunic)
				Level.dropItem(x,y,z,0,298,1,0); 
				Level.dropItem(x,y,z,0,299,1,0);
			} else if (rnd == 3) { //leather armour (pants and boots)
				Level.dropItem(x,y,z,0,300,1,0);
				Level.dropItem(x,y,z,0,301,1,0);
			} else if (rnd == 4) { //iron sword
				Level.dropItem(x,y,z,0,267,1,0); 
			} else if (rnd == 5) { //stone sword
				Level.dropItem(x,y,z,0,272,1,0); 
			} else if (rnd == 6) { //stone axe
				Level.dropItem(x,y,z,0,275,1,0);
			} else if (rnd == 7) { //carrots
				Level.dropItem(x,y,z,0,391,random(1,6),0); //drop anywhere from 1 to 4 carrots
			} else if (rnd == 6) { //apples
				Level.dropItem(x,y,z,0,260,random(1,6),0); //drop anywhere from 1 to 3 apples
			} else if (rnd == 7) { //emeralds
				Level.dropItem(x,y,z,0,388,random(1,3),0); //drop anywhere from 1 to 3 emeralds
			} else if (rnd == 8) { //diamond armour (helmet and leggings)
				Level.dropItem(x,y,z,0,310,1,0);
				Level.dropItem(x,y,z,0,312,1,0);
			} else if (rnd == 9) { //diamond armour (chestplate and boots)
				Level.dropItem(x,y,z,0,311,1,0);
				Level.dropItem(x,y,z,0,313,1,0);
			} else if (rnd == 10) { //lava bucket
				Level.dropItem(x,y,z,0,327,1,0);
			} else if (rnd == 11) { //mushroom stew
				Level.dropItem(x,y,z,0,282,1,0);
			} else { //diamonds and iron
				Level.dropItem(x,y,z,0,264,random(1,3),0); //drop anywhere from 1 to 3 diamonds
				Level.dropItem(x,y,z,0,265,random(1,5),0); //drop anywhere from 1 to 6 iron
			}

		} else {
			rnd = random(0,4);
			
			var playerX = Player.getX();
			var playerY = Player.getY();
			var playerZ = Player.getZ();
			
			if (rnd == 0) { //creates a jail type structure (with iron bars) and spawns flowing lava above the player's head
				
				var xs = [playerX-1, playerX, playerX+1];
				var zs = [playerZ-1, playerZ, playerZ+1];

				for (var i = 0; i < xs.length; i++) {
					for (var j = 0; j < zs.length; j++) {
						if (i != Math.floor(xs.length/2) || j != Math.floor(zs.length/2)) { //don't do the centre block
							Level.setTile(xs[i], playerY, zs[j], 101); //iron bars
							Level.setTile(xs[i], playerY-1, zs[j], 101);
						}

						Level.setTile(xs[i], playerY-2, zs[j], 98); //stone floor
					}
				}
				
				Level.setTile(playerX, playerY+2, playerZ, 10); //dat lava doe
				
				clientMessage("Look up!");
			
			} else if (rnd == 1) { //sandstone structure

				var xs = [playerX-2, playerX-1, playerX, playerX+1, playerX+2];
				var zs = [playerZ-2, playerZ-1, playerZ, playerZ+1, playerZ+2];

				for (var i = 0; i < xs.length; i++) {
					for (var j = 0; j < zs.length; j++) {
						if ((i != 1 && j != 1 && j != 2 && j != 3) || (i != 2 && j != 1 && j != 2 && j != 3) || (i != 3 && j != 1 && j != 2 && j != 3)) { //don't do the 3x3 centre blocks
							Level.setTile(xs[i], playerY, zs[j], 24);
							Level.setTile(xs[i], playerY-1, zs[j], 24);
						}

						Level.setTile(xs[i], playerY-2, zs[j], 24);
					}
				}				
				
				Level.setTile(playerX+1, playerY-1, playerZ-1, goldId);
				Level.setTile(playerX-1, playerY-1, playerZ+1, goldId);
				Level.setTile(playerX-1, playerY-1, playerZ-1, goldId);
				Level.setTile(playerX+1, playerY-1, playerZ+1, goldId);

			} else if (rnd == 2) { //obsidian structure

				var xs = [playerX-1, playerX, playerX+1];
				var zs = [playerZ-1, playerZ, playerZ+1];

				for (var i = 0; i < xs.length; i++) {
					for (var j = 0; j < zs.length; j++) {
						if (i == Math.floor(xs.length/2) && j == Math.floor(zs.length/2)) { //water for the centre blocks
							Level.setTile(xs[i], playerY, zs[j], 9);
							Level.setTile(xs[i], playerY-1, zs[j], 9);
						} else {
							Level.setTile(xs[i], playerY, zs[j], 20); //glass on eye level
							Level.setTile(xs[i], playerY-1, zs[j], 49); //obsidian below eye level
						}

						Level.setTile(xs[i], playerY+1, zs[j], 49); //obsidian roof
						Level.setTile(xs[i], playerY-2, zs[j], 49); //obsidian floor
					}
				}

			} else if (rnd == 3) { //hole to the void (very evil :P) 
				
				for (var i = playerY; i >= 0; i--) {
					for (var j = playerX-2; j < playerX+3; j++) {
						for (var k = playerZ-2; k < playerZ+3; k++) {
							Level.setTile(j, i, k, 0); //air
						}
					}
				}
				
			} else { //primed TnT
				Level.spawnMob(x+1,y,z,65);
				Level.spawnMob(x,y,z+1,65);
			}
		}
		
		Level.destroyBlock(x,y,z,false); //destroy the gold block
	}
}

function random(min, max) { //inclusive
	return Math.floor(Math.random()*(max+1)+min);
}