// ExplosiveMinecarts by tombailey94
// version 0.0.1

var ctx;
var simpleGUI;

var minecarts = [];

function newLevel(){
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function() {
				    explodeMinecarts();
				}
			}));
			button.setText("*");
			layout.addView(button);
			
			simpleGUI = new android.widget.PopupWindow(layout,200,200);
			simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
		}catch(err){
			print("Error: "+err);
		}
	} }));
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
				//print("Error: "+err);
			}
		}}));
	}
}

function explodeMinecarts() {
	for (var i = 0; i < minecarts.length; i++) {
		Level.explode(Entity.getX(minecarts[i]),Entity.getY(minecarts[i]),Entity.getZ(minecarts[i]),5);
		Entity.remove(minecarts[i]);
		minecarts.splice(i,1);
	}
}

function entityAddedHook(entity) {
	if (Entity.getEntityTypeId(entity) == 84) { //entity is a minecart
		minecarts.push(entity);
	}
}