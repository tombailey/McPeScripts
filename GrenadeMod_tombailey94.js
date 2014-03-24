// GrenadeMod by tombailey94
// version 0.0.2

function procCmd(cmd) {
	var command = cmd.split(" ");
	if(command[0] == "gmtextures" && command.length == 2) {
		if (command[1] == "on") {
			ModPE.overrideTexture("images/items-opaque.png","http://www.tombailey.me/projects/modpe/grenades.png");
			clientMessage("Restart BlockLauncher, with an active internet connection, to apply this.");
		} else if (command[1] == "off") {
			ModPE.resetImages();
			clientMessage("Restart BlockLauncher to apply this.");
		}
	}
}

function useItem(x,y,z,itemId,blockId,side) {
	if (blockId == 46) { //disassemble TnT to get grenades (snowballs)
		if (Level.getGameMode() == 1) {
			Player.addItemCreativeInv(332,16,0);
		} else {
			addItemInventory(332,16,0);
		}
	}
}

function entityRemovedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 81) { //snowball
		Level.explode(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),5);
	}
}