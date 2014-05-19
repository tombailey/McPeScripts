//CustomBiome example by tombailey94; a good starting point but by no means the gospel; version 0.0.2

var AIR = 0;
var BEDROCK = 7;
var GRASS = 2;
var GLOWSTONE = 89;
var LAVA = 10;
var OBSIDIAN = 49;
var NETHERRACK = 87;

function newLevel() {
	var x = Math.floor(Math.random()*(256)); //random number between 0 and 255
	var z = Math.floor(Math.random()*(256)); //random number between 0 and 255
	var randomSize = Math.floor(Math.random()*(Math.min(256-x,256-z))); //random number between 0 and 256-x or 256-z (depending on which one is smaller; to avoid going out of boundaries)
	
	for (var i = x; i < x+randomSize; i++) { //x
		for (var j = z; j < z+randomSize; j++) { //z
			for (var k = 4; k < 80; k++) { //y; starts from 4 to avoid changing bedrock to lava
				var tile = Level.getTile(i, k, j);
				if (tile == GRASS || tile == AIR) { //indicates surface
					Level.setTile(i,k,j,NETHERRACK);
					break;
				} else {
					var rnd = Math.floor(Math.random()*(20)); //random number between 0 and 19 (inclusive)
					if (k < 20) {
						if (rnd%2 == 0) { //rnd was even or 0 (50% chance)
							Level.setTile(i,k,j,BEDROCK);
						} else { 
							Level.setTile(i,k,j,LAVA);
						}
					} else { 
						if (rnd%2 == 0 || rnd == 1 || rnd == 3) { //rnd was even or 0 (50% chance)
							Level.setTile(i,k,j,NETHERRACK);
						} else if (rnd == 5 || rnd == 7 || rnd == 9 || rnd == 11 || rnd == 13) {
							Level.setTile(i,k,j,OBSIDIAN);
						} else if (rnd == 15 || rnd == 17) { 
							Level.setTile(i,k,j,GLOWSTONE);
						} else { //rnd == 19
							Level.setTile(i,k,j,LAVA);
						}
					}
				}
			}
		}
	}
	
	clientMessage("Biome at X:" + x + " Z:" + z);
}