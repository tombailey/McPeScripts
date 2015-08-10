//Potions PE mod by tombailey94
//version 0.0.1

function procCmd(cmd) {
	var cmd = cmd.toLowerCase().split(" ");

	if (cmd[0] == "potion") {
		var player = Player.getEntity();

		var ticks = 300*20; //3 minutes
		if (cmd[2] != null && !isNaN(parseInt(cmd[2]))) {
			ticks = parseInt(cmd[2]*20);
		}

		var amplification = 5;
		if (cmd[3] != null && !isNaN(parseInt(cmd[3]))) {
			amplification = parseInt(cmd[3]);
		}

		switch (cmd[1]) {
			case "sprint":
				Entity.addEffect(player, MobEffect.movementSpeed, ticks, amplification, false, false);
				break;
			case "crawl":
				Entity.addEffect(player, MobEffect.movementSlowdown, ticks, amplification, false, false);
				break;
			case "jump":
				Entity.addEffect(player, MobEffect.jump, ticks, amplification, false, false);
				break;
			case "wither":
				Entity.addEffect(player, MobEffect.wither, ticks, amplification, false, false);
				break;
			case "regen":
				Entity.addEffect(player, MobEffect.regeneration, ticks, amplification, false, false);
				break;
			case "heal":
				Entity.addEffect(player, MobEffect.heal, ticks, amplification, false, false);
				break;
			case "water":
				Entity.addEffect(player, MobEffect.waterBreathing, ticks, amplification, false, false);
				break;
			case "fire":
				Entity.addEffect(player, MobEffect.fireResistance, ticks, amplification, false, false);
				break;
			case "invisible":
				Entity.addEffect(player, MobEffect.invisibility, ticks, amplification, false, false);
				break;
			case "night":
				Entity.addEffect(player, MobEffect.nightVision, ticks, amplification, false, false);
				break;
			case "remove":
				Entity.removeAllEffects(player);
				break;
			default:
				clientMessage("Effect unknown, try sprint, crawl, jump, wither, regen, health, water, fire, invisible or remove.");
		}
	}
}