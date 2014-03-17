function newLevel() {
	ModPE.overrideTexture("images/items-opaque.png","http://www.tombailey.me/grenade.png");
}

function entityRemovedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 81) { //snowball
		Level.explode(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),5);
		//clientMessage("that was a snowball");
	}
}