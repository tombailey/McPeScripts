// Me and Me by tombailey94
// version 0.0.1
var me;
var messages = ["Ouch dude!","Wow... stop that we are the same bro.","I am going to die if you keep doing that :("]

function procCmd(cmd) {
	if (cmd == "clone") {
		me = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11, "mob/char.png");
		Entity.setRenderType(me, 3);
		Entity.setNameTag(me, "me");
	}
}

function attackHook(attacker,victim) {
	if (Entity.getEntityTypeId(attacker) == 0 && victim == me) { //player was attacker and victim was the clone
		var rnd = Math.floor(Math.random()*(messages.length)); //(pseudo) random number from 0 to the length of the messages array
		clientMessage("Your clone: " + messages[rnd]);
	}
}