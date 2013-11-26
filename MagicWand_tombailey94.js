// MagicWand mod by tombailey94; with credit to PEMapModder for correcting my silly unused variable and optional parameter mistakes (https://github.com/pemapmodder)
// version 0.0.2

var quantity = 64; //the amount of blocks to give the player
var wandId = 280; //the data value for "the wand" (280 is sticks)

function useItem(x,y,z,itemId,blockId,side) {
	if(itemId == wandId) { 
		addItemInventory(blockId,quantity); 
	}
}