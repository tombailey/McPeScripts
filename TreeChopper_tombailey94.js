// TreeChopper mod by tombailey94; with credit to Donalddoesmc for correcting me on the world height (http://www.minecraftforum.net/user/2365623-donalddoesmc/)
// version 0.0.3

var axeIds = [258, 271, 275, 279, 286];
var woodId = 17;

function useItem(x,y,z,itemId,blockId,side) {
	//if item is a wood, stone, iron, gold or diamond axe then continue
	if(itemId == axeIds[0] || itemId == axeIds[1] || itemId == axeIds[2] || itemId == axeIds[3] || itemId == axeIds[4]) {
		if(blockId == woodId) { //check if original block touched was wood
			Level.destroyBlock(x, y, z, true); //destroys and drops original wood block
			for(var i = y+1;i < 128;i++) { //loop to look for wood blocks above original block (y+1 as original block has been destroyed at this point)
				if(getTile(x, i, z) == woodId) { //if the block is a wood block
					Level.destroyBlock(x, i, z, true); //destroys and drops wood block
				} else {
					break;
				}
			}
		}
		preventDefault();
	}
}

function destroyBlock(x, y, z, side) {
	var tile = getTile(x, y, z);
	if(tile == woodId) { //check if original block touched was wood
		Level.destroyBlock(x, y, z, true); //destroys and drops original wood block
		for(var i = y+1;i < 128;i++) { //loop to look for wood blocks above original block (y+1 as original block has been destroyed at this point)
			if(getTile(x, i, z) == woodId) { //if the block is a wood block
				Level.destroyBlock(x, i, z, true); //destroys and drops wood block
			} else {
				break;
			}
		}
	}
}