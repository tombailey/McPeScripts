function procCmd(cmd) {
	var command = cmd.split(" ");
	if(command[0] == "textures" && command.length == 2) {
		if (command[1] == "on") {
			ModPE.overrideTexture("images/terrain-atlas.tga","http://www.tombailey.me/projects/modpe/luckyblocks.tga");
			clientMessage("Restart BlockLauncher, with an active internet connection, to apply this.");
		} else if (command[1] == "off") {
			ModPE.resetImages();
			clientMessage("Restart BlockLauncher to apply this.");
		}
	}
}