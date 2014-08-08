// Trading mod by tombailey94; trades are *mostly* (lower values for count are used; e.g. 2 emeralds for leather cap not 2-3 emeralds and, also, trades involving items that are not in Pocket Edition are omitted)  according to http://hydra-media.cursecdn.com/minecraft.gamepedia.com/1/1e/Trading-Chart.png
// version 0.0.4 (butcher and farmer implemented, trades for blacksmith, librarian and priest still to go)

var imgview;
var ctx;
var simpleGui;
var simpleGuiButton;

var trades = [
	[["Emerald", 388, 1],["Steak", 364, 6]],
	[["Emerald", 388, 1],["Cooked Porkchop", 320, 6]],
	[["Emerald", 388, 2],["Leather Cap", 298, 1]],
	[["Emerald", 388, 4],["Leather Tunic", 299, 1]],
	[["Emerald", 388, 2],["Leather Pants", 300, 1]],
	[["Emerald", 388, 2],["Leather Boots", 301, 1]],
	[["Emerald", 388, 6],["Saddle", 329, 1]],
	[["Raw Beef", 363, 14],["Emerald", 388, 1]],
	[["Raw Porkchop", 319, 14],["Emerald", 388, 1]],
	[["Coal", 263, 16],["Emerald", 388, 1]],
	[["Gold Ingot", 266, 8],["Emerald", 388, 1]],
	[["Emerald", 388, 1],["Apple", 260, 5]],
	[["Emerald", 388, 1],["Bread", 297, 3]],
	[["Emerald", 388, 1],["Cooked Chicken", 366, 7]],
	[["Emerald", 388, 1],["Cookies", 357, 1]],
	[["Emerald", 388, 1],["Melon", 360, 5]],
	[["Emerald", 388, 1],["Arrow", 262, 9]],
	[["Emerald", 388, 1],["Flint and Steel", 259, 1]],
	[["Emerald", 388, 3],["Shears", 359, 1]],
	[["Emerald", 388, 3],["Flint", 318, 4]],
	[["Raw Chicken", 365, 14],["Emerald", 388, 1]],
	[["Wheat", 296, 18],["Emerald", 388, 1]],
	[["Wool", 35, 14],["Emerald", 388, 1]],
	[["Gold Ignot", 266, 8],["Emerald", 388, 1]]
	[["Diamond",266,8],["Emerald",388,2]]
	
	]]
];

function newLevel() { //load world	
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
}

function leaveGame() { //exit world
	if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try {
				if(simpleGui != null) {
					simpleGui.dismiss();
					simpleGui = null;
				}
				if(simpleGuiButton != null) {
					simpleGuiButton.dismiss();
					simpleGuiButton = null;
				}
			} catch (err){
				print("Error: " + err);
			}
		}}));
	}
}

function showTradeGui(){
	if (simpleGui == null) { //don't allow multiple simpleGuis to be opened
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try {
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
							invDeduct(trades[rnd][0][1], trades[rnd][0][2]);
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
			} catch (err){
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

function modTick() {
	if (Entity.getEntityTypeId(Player.getPointedEntity()) == 15) { //player is looking at a villager
		if (simpleGui == null && simpleGuiButton == null) { //if gui isn't open
			ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
				try {
					simpleGuiButton = new android.widget.PopupWindow();

					var layout = new android.widget.LinearLayout(ctx);
						
					var tradeButton = new android.widget.Button(ctx);
					tradeButton.setText("Trade");
					tradeButton.setBackgroundColor(android.graphics.Color.GRAY);
					tradeButton.setOnClickListener(new android.view.View.OnClickListener() {
						onClick: function(v) {
							showTradeGui();
							simpleGuiButton.dismiss();
							simpleGuiButton = null;
						}
					});
					
					layout.addView(tradeButton);
					
					simpleGuiButton.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
					simpleGuiButton.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

					simpleGuiButton.setContentView(layout);
					simpleGuiButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER||android.view.Gravity.BOTTOM, 0, 300);
				} catch (err){
					//print("Error: "+err); //modTick causes a spam of error messages 
				}
			} }));
		}
	} else {
		if (simpleGuiButton != null) {
			ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
				simpleGuiButton.dismiss();
				simpleGuiButton = null;
			}}));
		}
	}
}
