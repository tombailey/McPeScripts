// Philosopher'sStone by tombailey94 with reference to http://tekkitclassic.wikia.com/wiki/Philosopher's_Stone
// version 0.0.2; not complete

var stone = 1;
var grass = 2;
var cobblestone = 4;
var sand = 12;
var gravel = 13;
var sandstone = 24;
var tallgrass = 31;
var deadbush = 32;
var yellowflower = 37;
var blueflower = 38;
var brownmushroom = 39;
var redmushroom = 40;
var pumpkin = 86;
var netherrack = 87;
var melon = 103;

function newLevel() {
	ModPE.setItem(460, "magma_cream", 0, "Philosophers Stone");
}

function swap(blockId) {
	if (blockId == stone) {
		return cobblestone;
	} else if (blockId == cobblestone) {
		return stone;
	/*} else if (blockId == ) {
		return ;
	} else if (blockId == ) {
		return ;
	} else if (blockId == ) {
		return ;
	} else if (blockId == ) {
		return ;
	*/} else {
		return blockId;
	}
}

function useItem(x, y, z, itemId, blockId, side) {
	if (itemId == 460) {
		Level.setTile(x, y, z, swap(blockId));
	}
}

function procCmd(command) {
	if (command == "ps") {
		Level.dropItem(getPlayerX(), getPlayerY(), getPlayerZ(), 5, 460, 1, 0);
	}
}