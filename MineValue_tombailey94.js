0// MineValue mod by tombailey94
// version 0.0.1

var wand = 280; //"the wand", data value for sticks
var oreIds = [21, 14, 16, 15, 56]; //gold, lapis, coal, iron and diamond ore data values; in order of desirability
var oreNames = ["Lapis", "Gold", "Coal", "Iron", "Diamond"]; //gold, lapis, coal, iron and diamond ore string values; in order of desirability

function useItem(x,y,z,itemId,blockId,side) {
	//if item is the wand then continue
	if(itemId == wand) {
		bestValue = -1; //variable to hold the best value found. -1 represents no ores being found
		for(var i = 0;i <= y;i++) {
			var bestXYZ;
			var tile = getTile(x, i, z);
			if (tile == oreIds[0]) {
				if (bestValue < 0) {
					bestValue = 0;
					bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
				}
			} else if (tile == oreIds[1]) {
				if (bestValue < 1) {
					bestValue = 1;
					bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
				}
			} else if (tile == oreIds[2]) {
				if (bestValue < 2) {
					bestValue = 2;
					bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
				}
			} else if (tile == oreIds[3]) {
				if (bestValue < 3) {
					bestValue = 3;
					bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
				}
			} else if (tile == oreIds[4]) {;
				bestValue = 4;
				bestXYZ = ("X: " + x + " Y: " + i + " Z: " + z);
				break; //diamond is the best, no point looping to find a block that is better
			}
		}
		if(bestValue == -1) {
			clientMessage("No ores found");
		} else {
			clientMessage("Found " + oreNames[bestValue] + " " + bestXYZ);
		}
	}
}