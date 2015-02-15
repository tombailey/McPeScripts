// Ultra Hard Core Pocket Edition by tombailey94
// version 0.0.1

function entityAddedHook(entity) {
	var id = Entity.getEntityTypeId(entity);
	if (id == 64) { 
		var rnd = Math.floor((Math.random()*3)+1);
		if (rnd == 1) { //1 in every 3 blocks dropped gets removed
			Entity.remove(entity);
		}
	} else {
		Entity.setHealth(entity,Entity.getHealth(entity)*2); //double health
	}	
}
