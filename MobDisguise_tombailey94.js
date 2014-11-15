function newLevel() {
	clientMessage("Go into third person");
}

function procCmd(command) {
	command = command.split(" ");
	switch (command[0].toLowerCase()) {
		case "chicken":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
			Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");
			break;
		case "cow":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
			Entity.setMobSkin(Player.getEntity(),"mob/cow.png");
			break;
		case "creeper":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
			Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");
			break;
		case "enderman":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
			Entity.setMobSkin(Player.getEntity(),"mob/enderman.png");
			break;
		case "mooshroomcow":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.mushroomCow);
			Entity.setMobSkin(Player.getEntity(),"mob/mooshroom.png");
			break;
		case "pig":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.pig);
			Entity.setMobSkin(Player.getEntity(),"mob/pig.png");
			break;
		case "sheep":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.sheep);
			Entity.setMobSkin(Player.getEntity(),"mob/sheep_0.png");
			break;
		case "silverfish":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
			Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");
			break;
		case "skeleton":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
			Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");
			break;
		case "spider":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
			Entity.setMobSkin(Player.getEntity(),"mob/spider.png");
			break;
		case "steve":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
			Entity.setMobSkin(Player.getEntity(),"mob/char.png");
			break;
		case "villager":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
			Entity.setMobSkin(Player.getEntity(),"mob/villager/villager.png");
			break;
		case "zombie":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
			Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");
			break;
		case "zombiepigman":
			Entity.setRenderType(Player.getEntity(), EntityRenderType.player);
			Entity.setMobSkin(Player.getEntity(),"mob/pigzombie.png");
			break;
	}
}