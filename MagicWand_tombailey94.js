// MagicWand mod by tombailey94
// version 0.0.1

var quantity = 1; //the amount of blocks to give the player
var wandId = 280; //the data value for "the wand" (280 is sticks)

function useItem(x,y,z,itemId,blockId,side) {
	if(itemId == 280) {
		addItemInventory(blockId,quantity,0);
	}
}