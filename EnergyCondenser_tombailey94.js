// EngergyCondenser by TomBailey94; a recreation of the energy condenser from Equivalent Exchange (version 2 not 3) with reference to http://tekkitclassic.wikia.com/wiki/Energy_Condenser
// version 0.0.1; not finished yet
var itemToDispense = 0;
var ecx;
var ecy;
var ecz;

var cx;
var cy;
var cz;

var EC = 28;

var counter = 0;

function procCmd(command) {
	if (command == "ec") {
		Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 5, EC, 1, 0);
	}
}

function newLevel() {
	Block.defineBlock(EC, "Energy Condenser", ["coal_block", 0], 1, false, 0);
	Block.setDestroyTime(EC, 0.3);
    Block.setExplosionResistance(EC, 9001); //it's over 9000!
}

function useItem(x, y, z, itemId, blockId, side) {
	if (blockId == 54) { //if the block is a chest
		itemToDispense = Level.getChestSlot(x,y,z,1);
		if (Level.getTile(x+1,y,z+1) == EC) {
			if (itemToDispense != 0) {
				ecx = x+1;
				ecy = y;
				ecz = z+1;
				cx = x;
				cy = y;
				cz = z;
			}
		} else if (Level.getTile(x+1,y,z-1) == EC) {
			if (itemToDispense != 0) {
				ecx = x+1;
				ecy = y;
				ecz = z-1;
				cx = x;
				cy = y;
				cz = z;
			}
		} else if (Level.getTile(x-1,y,z+1) == EC) {
			if (itemToDispense != 0) {
				ecx = x-1;
				ecy = y;
				ecz = z+1;
				cx = x;
				cy = y;
				cz = z;
			}
		} else if (Level.getTile(x-1,y,z-1) == EC) {
			if (itemToDispense != 0) {
				ecx = x-1;
				ecy = y;
				ecz = z-1;
				cx = x;
				cy = y;
				cz = z;
			}
		} 
	}
}

function modTick() {
	counter++;
	if (counter == 20) { //every second
		if (itemToDispense != 0) {
			//Level.dropItem(ecx, ecy, ecz, 5, itemToDispense, 1, 0);
			for (var i = 1; i < 28; i++) {
				if (Level.getChestSlotCount(cx,cy,cz) != 64) {
					Level.setChestSlot(ecx,ecy,ecz,2,EC,0,1); //add an item to the chest
					break;
				}
			}
		}
		counter = 0;
	}
}