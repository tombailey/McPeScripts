var ES = 502;

ModPE.overrideTexture("images/items-opaque.png","http://www.tombailey.me/projects/modpe/energysword.png");
ModPE.setItem(ES, "ruby", 0, "Energy Sword");


function procCmd(cmd) {
	if(cmd == "resettextures") {
		ModPE.resetImages();
		clientMessage("Restart BlockLauncher to apply this.");
	}
}

function attackHook(attacker, victim) {
	if (Player.getCarriedItem() == ES) {
		Entity.setHealth(victim, 0);
	}
}
