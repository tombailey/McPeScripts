/**
Created by Tom Bailey, 16/01/2016.

This is a showcase of how it is possible to load AdMob ads within BlockLauncher free (not pro),
since BlockLauncher free uses the AdMob SDK to show ads, we already have the dependency setup.
All that is left to do it programmatically crate the AdView to show an ad.

THIS DOES NOT WORK IN BLOCKLAUNCH PRO, IN FACT, IN ITS CURRENT STATE, IT WILL CRASH BL PRO.
YOU WILL NEED TO IMPLEMENT A CHECK (POSSIBLY BY USING THE PACKAGE NAME) TO NOT SHOW ADS ON BL PRO
TO STOP THIS CRASH.

Before using adverts within BlockLauncher free, please consider the following this:
		- It is not good user experience if users are bombarded by ads whilst playing
			Minecraft. BlockLauncher free already has adverts so use your adverts wisely.
			If you play to show an advert for the whole duration of gameplay, you are NOT
			welcome to make use of my code.
		- AdMob have a lot of rules for showing ads, you should review them here:
			https://support.google.com/admob/answer/6128543?hl=en-GB&ref_topic=2745287
			to ensure you are not breakig them!
		- zhuowei is yet to comment on putting ads in mods; personally I think this
			is acceptable as long as it is done in good taste.

To run this demo, add your AdUnitId to the mod. Also put your test device id.
Then import the mod in BL free. Load any world and give the ad a while to load.
The PopupWindow used spans the entire width and height of the device's screen
and doesn't close so you have to kill BL free from multi-tasking.

Lastly, sorry ModPE users if this gets misused and you get spammed with Ads :(

**/

var mContext = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function newLevel() {
		init();
}

function init() {
		createAndShowPopupView();
}

function createAndShowPopupView() {
		print("createAndShowPopupView()");

		mContext.runOnUiThread(new java.lang.Runnable() {
				run : function() {
					var popupWindow = new android.widget.PopupWindow();
					var linearLayout = new android.widget.LinearLayout(mContext);
					linearLayout.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
					linearLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
					var adView = createAdView("yourAdUnitIdHere"); //needs to be a banner, get it from AdMob site. It is of the form ca-app-pub-abcedfghijklmnopqrstuvwxyz
					linearLayout.addView(adView);

					var textView = new android.widget.TextView(mContext);
					textView.setWidth(100);
					textView.setHeight(60);
					textView.setText("hello");

					linearLayout.addView(textView);

					popupWindow.setHeight(android.view.ViewGroup.LayoutParams.MATCH_PARENT);
					popupWindow.setWidth(android.view.ViewGroup.LayoutParams.MATCH_PARENT);

					popupWindow.setContentView(linearLayout);
					popupWindow.showAtLocation(mContext.getWindow().getDecorView(), android.view.Gravity.CENTER, 0, 0);

					loadAd(adView, ["yourTestDevice1IdHere", "yourTestDevice2IdHere"]); //use this SO post to find your test device id: http://stackoverflow.com/questions/4524752/how-can-i-get-device-id-for-admob

					return popupWindow;
				}
		});
}

function createAdView(adUnit) {
		print("createAdView()");

		var adView = new com.google.android.gms.ads.AdView(mContext);
		adView.setAdSize(com.google.android.gms.ads.AdSize.SMART_BANNER);
		adView.setAdUnitId(adUnit);

		return adView;
}

function loadAd(adView, testIds) {
		print("loadAd()");

		var adRequestBuilder = new com.google.android.gms.ads.AdRequest.Builder();

		for (var index in testIds) {
				var testId = testIds[index];
				adRequestBuilder.addTestDevice(testId);
		}

		adView.loadAd(adRequestBuilder.build());
}
