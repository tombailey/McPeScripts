//Achievements mod by tombailey94
// version 0.0.1

var achvs = [false,false,false,false];
var achvNames = ["Getting Wood","Bedtime already?","Into The Nether","DIAMONDS!"];

function unlockAchv(intIndex){
	achvs[intIndex] = true;
	clientMessage(achvNames[intIndex] + " unlocked.");
}

function destroyBlock(x, y, z, side) {
	blockId = getTile(x,y,z);
	if(blockId == 17 && !achvs[0]) { //if player has mined wood for the first time
		unlockAchv(0);
	} else if(blockId == 56 && !achvs[3]) { //if player has mined diamond ore for the first time
		unlockAchv(3);
	}
}

function useItem(x,y,z,itemId,blockId,side) {
	if(blockId == 247 && !achvs[2]) { //if player has touched a nether reactor core for the first time
		unlockAchv(2);
	} else if(blockId == 26 && !achvs[1]) { //if player has touched a bed for the first time
		unlockAchv(1);
	}
}

/*function newLevel() { //load world
	for(var i=0;i<achvs.length;i++){
		achvs[i] = ModPE.readData("achievement" + i);
	}
}

function leaveGame() { //exit world
	for(var i=0;i<achvs.length;i++){
		ModPE.saveData("achievement" + i, achvs[i]);
	}
}*/

function procCmd(cmd) {
	var commandElements = cmd.split(" ");
	if(commandElements[0] == "achvs") { //if command was /achievements // suggestion: shorten it
		if(commandElements.length==1) {
			for(var i=0;i<achvs.length;i++){
				if(achvs[i]) { //achievement unlocked
					clientMessage(achvNames[i] + " unlocked.");
				} else { //achievement locked
					clientMessage(achvNames[i] + " locked.");
				}
			}
		} else if(commandElements.length==2){
			if(commandElements[1] == "reset") {
				for(var i=0;i<achvs.length;i++){
					achvs[i] == false;
				}
				clientMessage("Achievements reset.");
			} else {
				clientMessage("Your parameters were wrong. Achievements command only allows for 'reset' parameter.");
			}
		} else {
			clientMessage("Your parameters were wrong. Achievements command only allows for 'reset' parameter.");
		}
	}
}
