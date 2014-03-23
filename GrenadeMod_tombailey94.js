// GrenadeMod by tombailey94
// version 0.0.2

function useItem(x,y,z,itemId,blockId,side) {
	if (blockId == 46) { //disassemble TnT to get grenades (snowballs)
		if (Level.getGameMode() == 1) {
			Player.addItemCreativeInv(332,16,0);
		} else {
			addItemInventory(332,16,0);
		}
	}
}

function newLevel() {
	try {
		ModPE.overrideTexture("images/items-opaque.png","http://www.tombailey.me/projects/modpe/grenades.png");
	} catch (err) {
		clientMessage("Connect to the internet for the textures");
	}
}

function entityRemovedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 81) { //snowball
		Level.explode(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),5);
	}
}