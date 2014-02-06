var textview;
var ctx;
var simpleGUI;

function getXYZ() {
	if(ctx!=null) {
		ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
			try{
				if(textview != null) {
					textview.setText("X: " + Math.round(Player.getX()) + " , Y: " + Math.round(Player.getY()) + " , Z: " + Math.round(Player.getZ()));
				}
			}catch(err){
				//print("Error: "+err); //will cause spam of dialogue boxes because of modTick
			}
		}}));
	}
}

function newLevel(){
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			simpleGUI = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			textview = new android.widget.TextView(ctx);
			textview.setTextColor(android.graphics.Color.WHITE);
			getXYZ();
			layout.addView(textview);
			simpleGUI.setContentView(layout);
			simpleGUI.setWidth(400);
			simpleGUI.setHeight(60);
			simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
		}catch(err){
			print("Error: "+err);
		}
	} }));
}

function modTick() {
	getXYZ();
}

function leaveGame(){
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