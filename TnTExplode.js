// TnT Explode mod by tombailey94; with credit to PEMapModder for correcting my silly 'or' instead of 'and' conditional logic (https://github.com/pemapmodder)
// version 0.0.2
var wandId = 50; //the data value for "the wand" (50 is torches)
var tntDataValue = 46; //current block id (0.7.6) for TnT
var explosionRadius = 2;

function useItem(x,y,z,itemId,blockId,side) {
	if(blockId == tntDataValue && itemId == wandId) { //if the block touched was TnT and item used to touch the block was "the wand"
			explode(x,y,z,explosionRadius); //creates an explosion
	}
}
