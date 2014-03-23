// ExplosiveArrows by tombailey94
// version 0.0.1

var Entities = [];
var counter = 0;

function entityAddedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 80) { //arrow
		var oldXYZ = [Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)];
		Entities.push([entity,oldXYZ]);
	}
}

function modTick() {
	counter++;
	
	if(counter == 2) { //executed 10 times a second
		for (i = 0; i < Entities.length; i++) {
		
			var element = Entities[i];
			var entity = element[0];
			var oldXYZ = element[1];
			var newXYZ = [Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity)];
			
			if (oldXYZ[0] == newXYZ[0] && oldXYZ[1] == newXYZ[1] && oldXYZ[2] == newXYZ[2]) { //arrow hasn't moved
				Entities.splice(i,1); //removes the entity as it no longer needs to be tracked
				Level.explode(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity),5);
			} else { //arrow has moved; update position
				Entities[i][1] = newXYZ; //oldXYZ becomes the new XYZ
			}
		}
		counter = 0;
	}
}