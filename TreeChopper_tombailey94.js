// TreeChopper mod by tombailey94
// version 0.0.1

var axeIds = [258, 271, 275, 279, 286];
var woodId = 17;

function useItem(x,y,z,itemId,blockId,side) {
	//if item is a wood, stone, iron, gold or diamond axe then continue
	if(itemId == axeIds[0] || itemId == axeIds[1] || itemId == axeIds[2] || itemId == axeIds[3] || itemId == axeIds[4]) {
		if(blockId == woodId) { //check if original block touched was wood
			var tile = getTile(x, y, z); 
			Level.dropItem(x, y, z, 0, tile, 1, Level.getData()); //drops wood on the ground
			Level.destroyBlock(x, y, z, true); //destroys wood block
			for(var i = y;i < 256;i++) { //loop to look for wood blocks above original block
				tile = getTile(x,i,z);
				if(tile == woodId) { //if the block is a wood block
					Level.dropItem(x,y,z,0,tile,1,Level.getData()); //drops wood on the ground
					Level.destroyBlock(x,i,z,false); //destroys wood block
				}
			}
		}
	}
}