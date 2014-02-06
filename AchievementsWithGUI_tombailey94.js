//Achievements mod by tombailey94
// version 0.0.2

var imgview;
var ctx;
var simpleGUI;
var GUICounter = 0; //counter that will be set to 200 later. It will then decrease until it is 0 and the GUI is hidden.

var achvs = [false,false,false,false];
var achvNames = ["Getting Wood","Bedtime already?","Into The Nether","DIAMONDS!"];

function unlockAchv(intIndex){
	achvs[intIndex] = true;
	clientMessage(achvNames[intIndex] + " unlocked.");
	GUICounter = 200;
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

function newLevel() { //load world	
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
}

function leaveGame() { //exit world
	if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(simpleGUI != null) {
					simpleGUI.dismiss();
					simpleGUI = null;
				}
			}catch(err){
				print("Error: "+err);
			}
		}}));
	}
}

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

function modTick() {
	if(ctx!=null) {
		if (GUICounter==200) {
			//initially display the image
			ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
				try{
					simpleGUI = new android.widget.PopupWindow();
					var layout = new android.widget.RelativeLayout(ctx);
					imgview = new android.widget.ImageView(ctx);
					imgview.setImageBitmap(android.graphics.BitmapFactory.decodeFile(android.os.Environment.getExternalStorageDirectory()+"/games/com.mojang/wood.png"));
					layout.addView(imgview);
					simpleGUI.setContentView(layout);
					simpleGUI.setWidth(555);
					simpleGUI.setHeight(109);
					simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
				}catch(err){
					print("Error: "+err);
				}
			} }));
			GUICounter -= 1; //decrement counter
		} else if(GUICounter>0) {
			GUICounter -= 1; //decrement counter
		} else {
			ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
				try{
					if(simpleGUI != null) {
						simpleGUI.dismiss();
						simpleGUI = null;
					}
				}catch(err){
					print("Error: "+err);
				}
			}}));
		}
	}
}
