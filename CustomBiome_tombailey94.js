//CustomBiome example by tombailey94; a good starting point but by no means the gospel
//version 0.0.1

var AIR = 0;
var LAVA = 10;
var OBSIDIAN = 49;
var NETHERRACK = 87;
var GLOWSTONE = 89;


function newLevel() {
	//var x = Math.floor(Math.random()*(256)); //random number between 0 and 255
	//var y = Math.floor(Math.random()*(256)); //random number between 0 and 255
	//var z = Math.floor(Math.random()*(256)); //random number between 0 and 255
	var x = 0;
	var y = 0;
	var z = 0;
	
	for (var i = x;i<x+8;i++) { //x
		for (var j = z;j<z+8;j++) { //z
			for (var k = y;k<80;k++) { //y ~ less than 80 (*hopefully* below surface level)
				var rnd = Math.floor(Math.random()*(10)); //random number between 0 and 9
				if (y < 20) {
					if (rnd == 0) {
						setTile(i,k,j,NETHERRACK);
					} else if (rnd == 1 || 2) {
						setTile(i,k,j,OBSIDIAN);
					} else {
						setTile(i,k,j,LAVA);
					}
				} else { 
					if (rnd == 0) {
						setTile(i,k,j,AIR);
					} else if (rnd == 1) {
						setTile(i,k,j,GLOWSTONE);
					} else if (rnd == 2 || rnd == 3) {
						setTile(i,k,j,OBSIDIAN);
					} else {
						setTile(i,k,j,NETHERRACK);
					}
				}
			}
		}
	}
}
