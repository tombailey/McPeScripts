// Philosopher'sStone by tombailey94 with reference to http://tekkitclassic.wikia.com/wiki/Philosopher's_Stone
// version 0.0.2; not complete

var PS = 460;

var STONE = 1;
var GRASS = 2;
var COBBLESTONE = 4;
var SAND = 12;
var GRAVEL = 13;
var SANDSTONE = 24;
var TALLGRASS = 31;
var DEADBUSH = 32;
var BROWNMUSHROOM = 39;
var REDMUSHROOM = 40;
var PUMPKIN = 86;
var NETHERRACK = 87;
var MELON = 103;

function newLevel() {
	ModPE.setItem(PS, "magma_cream", 0, "Philosophers Stone");
}

function swapUse(oldBlockId, damageValue) {
	var newBlock = {
		tileId:oldBlockId,
		damageValue:damageValue
	};
	
	switch (oldBlockId) {
		case STONE:
			newBlock.tileId = COBBLESTONE;
			break;
		case COBBLESTONE:
			newBlock.tileId = STONE;
			break;
		case GRASS:
			newBlock.tileId = SAND;
			break;
		case SAND:
			newBlock.tileId = GRASS;
			break;
		case TALLGRASS:
			newBlock.tileId = DEADBUSH;
			break;
		case NETHERRACK:
			newBlock.tileId = COBBLESTONE;
			break;
		case GRAVEL:
			newBlock.tileId = SANDSTONE;
			break;
		case MELON:
			newBlock.tileId = PUMPKIN;
			break;
		case PUMPKIN:
			newBlock.tileId = MELON;
			break;
		case WOOD:
			switch (damageValue) {
				case 0: //oak
				case 4:
				case 8:
				case 12:
					newBlock.damageValue = 1;
					break;
				case 1: //spurce / pine
				case 5:
				case 9:
				case 13:
					newBlock.damageValue = 2;
					break;
				case 2: //birch
				case 6:
				case 10:
				case 14:
					newBlock.damageValue = 0;
					break;
			}
			break;
		case BROWNMUSHROOM:
			newBlock.tileId = REDMUSHROOM;
			break;
		case REDMUSHROOM:
			newBlock.tileId = BROWNMUSHROOM;
			break;
	}
	
	return newBlock;
}

function swapDestroy(oldBlockId) {
	var newBlockId = oldBlockId;
	
	switch (oldBlockId) {
		case STONE:
		case COBBLESTONE:
			newBlockId = GRASS;
			break;
		case GRASS:
		case SAND:
			newBlockId = COBBLESTONE;
			break;
		case SANDSTONE:
			newBlockId = GRAVEL;
			break;
		case GLASS:
			newBlockId = SAND;
			break;
	}
	
	return newBlockId;
}

function useItem(x, y, z, itemId, blockId, side) { //acts as right click
	if (itemId == PS) {
		var newBlock = swapUse(blockId, Level.getData(x, y, z));
		Level.setTile(x, y, z, newBlock.tileId, newBlock.damageValue);
	}
}

function destroyBlock(x, y, z, side) { //acts as shift right click
	if (Player.getCarriedItem() == PS) {
		Level.setTile(x, y, z, swapDestroy(Level.getTile(x, y, z), Level.getData(x, y, z)));
	}
}

function procCmd(command) {
	if (command == "ps") {
		Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 5, PS, 1, 0);
	}
}