function newLevel() {
	clientMessage("Go into third person");
}

function procCmd(command) {
	command = command.split(" ");
	switch (command[0].toLowerCase()) {
		case "chicken":
			Entity.setRenderType(Player.getEntity(), 6);
			Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");
			break;
		case "cow":
			Entity.setRenderType(Player.getEntity(), 7);
			Entity.setMobSkin(Player.getEntity(),"mob/cow.png");
			break;
		case "creeper":
			Entity.setRenderType(Player.getEntity(), 14);
			Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");
			break;
		case "pig":
			Entity.setRenderType(Player.getEntity(), 8);
			Entity.setMobSkin(Player.getEntity(),"mob/pig.png");
			break;
		case "sheep":
			Entity.setRenderType(Player.getEntity(), 9);
			Entity.setMobSkin(Player.getEntity(),"mob/sheep_0.png");
			break;
		case "skeleton":
			Entity.setRenderType(Player.getEntity(), 12);
			Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");
			break;
		case "spider":
			Entity.setRenderType(Player.getEntity(), 13);
			Entity.setMobSkin(Player.getEntity(),"mob/spider.png");
			break;
		case "steve":
			Entity.setRenderType(Player.getEntity(), 3);
			Entity.setMobSkin(Player.getEntity(),"mob/char.png");
			break;
		case "zombie":
			Entity.setRenderType(Player.getEntity(), 11);
			Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");
			break;
		case "zombiepigman":
			Entity.setRenderType(Player.getEntity(), 11);
			Entity.setMobSkin(Player.getEntity(),"mob/pigzombie.png");
			break;
	}
}