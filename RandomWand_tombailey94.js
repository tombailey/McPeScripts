// RandomWand mod by tombailey94
// version 0.0.1
var wandId = 280; //the data value for "the wand" (280 is sticks)
var blockDataValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,141,15,16,17,18,20,21,22,24,26,30,31,32,35,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,54,56,57,58,59,60,61,62,63,64,65,67,68,71,73,74,78,79,80,81,82,83,85,87,89,92,95,98,102,103,105,107,109,108,112,114,128,155,156,245,246,247,248,249,253,254,255]; //current block ids (0.7.6) including bedrock, game update block, etc

function useItem(x,y,z,itemId,blockId,side) {
	if(itemId == 280) { //if the item used to touch a block is "the wand"
		var rnd = Math.floor(Math.random()*(blockDataValues.length+1)); //random number between 0 and the length of blockIds array
		setTile(x,y,z,blockDataValues[rnd],0); //use the random number as an index for the block id array and set the tile to the block id 
	}
	preventDefault(); //prevent default stops interface opening if the block created is a crafting table, etc
}