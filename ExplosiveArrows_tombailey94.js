// ExplosiveArrows by tombailey94 & Samueljh1
// version 0.0.1

ent = null;

function entityAddedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 80) { //arrow
		ent = entity;
	}
}

function entityRemovedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 80) { //arrow
		ent = null;
	}
}

function modTick() {
	
	if(ent != null){
	
		if(Entity.getVelX(ent) == 0 && Entity.getVelY(ent) == 0 && Entity.getVelZ(ent) == 0){
		
			Level.explode(Entity.getX(ent),Entity.getY(ent),Entity.getZ(ent),5);
		}
		
	}
}
