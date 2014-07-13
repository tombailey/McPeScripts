// Trading mod by tombailey94; trades are *mostly* according to http://hydra-media.cursecdn.com/minecraft.gamepedia.com/1/1e/Trading-Chart.png
// version 0.0.1

var imgview;
var ctx;
var simpleGui;

var trades = [[["Emerald", 388, 1],["Steak", 364, 6]],[["Emerald", 388, 1],["Cooked Porkchop", 320, 6]],[["Emerald", 388, 2],["Leather Cap", 298, 1]],[["Emerald", 388, 4],["Leather Tunic", 299, 1]],[["Emerald", 388, 2],["Leather Pants", 300, 1]],[["Emerald", 388, 2],["Leather Boots", 301, 1]],[["Emerald", 388, 6],["Saddle", 329, 1]],[["Raw Beef", 363, 14],["Emerald", 388, 1]],[["Raw Porkchop", 319, 14],["Emerald", 388, 1]],[["Coal", 263, 16],["Emerald", 388, 1]],[["Gold Ingot", 266, 8],["Emerald", 388, 1]]];

function newLevel() { //load world	
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
}

function leaveGame() { //exit world
	if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGui != null) {
					simpleGui.dismiss();
					simpleGui = null;
				}
			}catch(err){
				print("Error: " + err);
			}
		}}));
	}
}

function attackHook(attacker, victim) {
	if (Entity.getEntityTypeId(victim) == 15) { //player attacked a villager
        Entity.setHealth(victim, Entity.getHealth(victim)+1); //restore health back to normal (presumes player hit villager with empty hand and not sword, etc)
		showTradeGui();
    }
}

function showTradeGui(){
	if (simpleGui == null) { //don't allow multiple simpleGuis to be opened
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				simpleGui = new android.widget.PopupWindow();
				var layout = new android.widget.LinearLayout(ctx);
				layout.setBackgroundColor(android.graphics.Color.GRAY);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				
							

				var tradeText = new android.widget.TextView(ctx);
				tradeText.setGravity(android.view.Gravity.CENTER);
				
				var rnd = Math.floor(Math.random()*(trades.length)); //(pseudo) random number between 0 and trades.length-1 (inclusive; that means 0 and trades.length-1 could be the number returned)
				tradeText.setText("For " + trades[rnd][0][2] + " " + trades[rnd][0][0] + " I will give you " + trades[rnd][1][2] + " " + trades[rnd][1][0]);
				
				layout.addView(tradeText);	
				
				var tradeButton = new android.widget.Button(ctx);
				tradeButton.setText("Trade with villager");
				tradeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v) {
						if (Level.getGameMode() == 1 || invContains(trades[rnd][0][1], trades[rnd][0][2])) { //if the player is in creative mode or has enough of the required item to trade
							var deduct = invDeduct(trades[rnd][0][1], trades[rnd][0][2]);
							print(deduct);
							Player.addItemInventory(trades[rnd][1][1], trades[rnd][1][2], 0);
							print("Trade complete!");
						} else {
							print("You don't have the items required to complete this trade.");
						}
						simpleGui.dismiss();
						simpleGui = null;
					}
				});
				
				layout.addView(tradeButton);
				
				var closeButton = new android.widget.Button(ctx);
				closeButton.setText("Close");
				closeButton.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v) {
						simpleGui.dismiss();
						simpleGui = null;
					}
				});
				
				layout.addView(closeButton);
				
				simpleGui.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				simpleGui.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

				simpleGui.setContentView(layout);
				simpleGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);
			}catch(err){
				print("Error: "+err);
			}
		} }));
	} else {
		print("Cancel the previous trade first.");
	}
}

function invContains(itemId, count) {
	var hasItem = false; //presume the player doesn't have the item
	
	for (var i = 0; i < 36; i++) {
		if (Player.getInventorySlot(i) == itemId && Player.getInventorySlotCount(i) >= count) {
			hasItem = true;
			break; //break the loop early if the item is found and the count is good
		}
	}
	
	return hasItem;
}

function invDeduct(itemId, count) {
	var didDeduct = false; //presume we didn't deduct
	
	for (var i = 0; i < 36; i++) {
		if (Player.getInventorySlot(i) == itemId && Player.getInventorySlotCount(i) >= count) {
			var remainder = Player.getInventorySlotCount(i) - count;
			Player.clearInventorySlot(i);
			Player.addItemInventory(itemId, remainder, 0);
			//net.zhuoweizhang.mcpelauncher.ScriptManager.nativeSetInventorySlot(i, itemId, Player.getInventorySlotCount(i) - count, 0);
			didDeduct = true;
			break; //break the loop early if the item has been deducted
		}
	}
	
	return didDeduct;
}