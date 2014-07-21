// Zoom mod by tombailey94
// version 0.0.1

var ctx;
var simpleGui;


function newLevel() { //load world	
	ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			simpleGui = new android.widget.PopupWindow();
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(android.widget.LinearLayout.VERTICAL);
			
			var zoomButton = new android.widget.Button(ctx);
			zoomButton.setText("Zoom");
			zoomButton.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
					if (v.getText() == "Zoom") {
						ModPE.setFov(10.0);
						v.setText("Unzoom");
					} else {
						ModPE.resetFov(); 
						v.setText("Zoom");
					}
				}
			});
			
			layout.addView(zoomButton);
			
			simpleGui.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
			simpleGui.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);

			simpleGui.setContentView(layout);
			simpleGui.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 120, 0); //to avoid overlapping tooManyItems
		} catch(err){
			print("Error: " + err);
		}
	}}));
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