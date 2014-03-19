// MidasTouch mod by tombailey94
function newLevel() {
	clientMessage("Warning: all blocks you touch or walk near will turn to dimonds!");
}

function modTick() {
	var playerX = getPlayerX();
	var playerY = getPlayerY();
	var playerZ = getPlayerZ();
	
	if (getTile(playerX,playerY+1,playerZ)!=0) { //if the block above the player's head is not air
		setTile(playerX,playerY+1,playerZ,41,0); 
	}
	
	if (getTile(playerX,playerY-2,playerZ)!=0) { //if the block below the player's legs is not air
		setTile(playerX,playerY-2,playerZ,41,0);
	}
	
	if (getTile(playerX,playerY-1,playerZ+1)!=0) { //if the block to the side of the player's legs is not air
		setTile(playerX,playerY-1,playerZ+1,41,0); 
	}
	
	if (getTile(playerX,playerY-1,playerZ-1)!=0) { //if the block to the other side of the player's legs is not air
		setTile(playerX,playerY-1,playerZ-1,41,0);  
	}
	
	if (getTile(playerX,playerY,playerZ+1)!=0) { //if the block to the side of the player's head is not air
		setTile(playerX,playerY,playerZ+1,41,0); 
	}
	
	if (getTile(playerX,playerY,playerZ-1)!=0) { //if the block to the other side of the player's head is not air
		setTile(playerX,playerY,playerZ-1,41,0);  
	}

	if (getTile(playerX+1,playerY-1,playerZ)!=0) { //if the block to the side of the player's legs is not air
		setTile(playerX+1,playerY-1,playerZ,41,0); 
	}
	
	if (getTile(playerX-1,playerY-1,playerZ)!=0) { //if the block to the other side of the player's legs is not air
		setTile(playerX-1,playerY-1,playerZ,41,0);  
	}
	
	if (getTile(playerX+1,playerY,playerZ)!=0) { //if the block to the side of the player's head is not air
		setTile(playerX+1,playerY,playerZ,41,0); 
	}
	
	if (getTile(playerX-1,playerY,playerZ)!=0) { //if the block to the other side of the player's head is not air
		setTile(playerX-1,playerY,playerZ,41,0);  
	}
}

function useItem(x,y,z,itemId,blockId,side) {
	setTile(x,y,z,41,0);
}

function destroyBlock(x, y, z, side) {
	preventDefault();
	setTile(x,y,z,41,0);
}
