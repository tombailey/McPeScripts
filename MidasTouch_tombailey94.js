// MidasTouch mod by tombailey94
// version 0.0.1

var blockId = 79;

function procCmd(command) {
	command = command.split(" ");
	if (command[0] == "midas") {
		blockId = command[1];
	}
	clientMessage("Warning: all blocks you touch or walk near will turn to the block with ID " + blockId + "!");
}

function newLevel() {
	clientMessage("Warning: all blocks you touch or walk near will turn to ice!");
}

function modTick() {
	var playerX = getPlayerX();
	var playerY = getPlayerY();
	var playerZ = getPlayerZ();
	
	if (getTile(playerX,playerY+1,playerZ)!=0) { //if the block above the player's head is not air
		setTile(playerX,playerY+1,playerZ,blockId,0); 
	}
	
	if (getTile(playerX,playerY-2,playerZ)!=0) { //if the block below the player's legs is not air
		setTile(playerX,playerY-2,playerZ,blockId,0);
	}
	
	if (getTile(playerX,playerY-1,playerZ+1)!=0) { //if the block to the side of the player's legs is not air
		setTile(playerX,playerY-1,playerZ+1,blockId,0); 
	}
	
	if (getTile(playerX,playerY-1,playerZ-1)!=0) { //if the block to the other side of the player's legs is not air
		setTile(playerX,playerY-1,playerZ-1,blockId,0);  
	}
	
	if (getTile(playerX,playerY,playerZ+1)!=0) { //if the block to the side of the player's head is not air
		setTile(playerX,playerY,playerZ+1,blockId,0); 
	}
	
	if (getTile(playerX,playerY,playerZ-1)!=0) { //if the block to the other side of the player's head is not air
		setTile(playerX,playerY,playerZ-1,blockId,0);  
	}

	if (getTile(playerX+1,playerY-1,playerZ)!=0) { //if the block to the side of the player's legs is not air
		setTile(playerX+1,playerY-1,playerZ,blockId,0); 
	}
	
	if (getTile(playerX-1,playerY-1,playerZ)!=0) { //if the block to the other side of the player's legs is not air
		setTile(playerX-1,playerY-1,playerZ,blockId,0);  
	}
	
	if (getTile(playerX+1,playerY,playerZ)!=0) { //if the block to the side of the player's head is not air
		setTile(playerX+1,playerY,playerZ,blockId,0); 
	}
	
	if (getTile(playerX-1,playerY,playerZ)!=0) { //if the block to the other side of the player's head is not air
		setTile(playerX-1,playerY,playerZ,blockId,0);  
	}
}

function useItem(x,y,z,itemId,blockId,side) {
	setTile(x,y,z,blockId,0);
}
