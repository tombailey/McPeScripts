var thread;

function newLevel() {
	var folder = new java.io.File("/sdcard/games/com.mojang/ModPE/wwwroot");
	folder.mkdirs();
	
	var indexExample = new java.io.File("/sdcard/games/com.mojang/ModPE/wwwroot", "index.html");
	if (!indexExample.exists()) {
		var indexFile = new java.io.BufferedWriter(new java.io.FileWriter(indexExample));
		indexFile.write("<html><head><title>A Java Web server example</title><style>body {margin: 0 auto;width: 200px;}</style></head><body><h1>Hello world!</h1></body></html>");
		indexFile.close();
	}

	thread = new java.lang.Thread() {	
		run: function() {
			try {
				const server = new java.net.ServerSocket(49999); //can't use port less than 1024 without root 
				
				while (true) {
					try {
						var client = server.accept();
					
						var br = new java.io.BufferedReader(new java.io.InputStreamReader(client.getInputStream()));
						var bw = new java.io.BufferedWriter(new java.io.OutputStreamWriter(client.getOutputStream()));
						
						var request = br.readLine();
						var requestInfo = request.split(" ");
						
						var filepath = new java.lang.String(folder + requestInfo[1]);
						var error = null;
						
						var brFile = null;
						try {
							if (filepath.endsWith("/")) {
								brFile = new java.io.BufferedReader(new java.io.FileReader(filepath + "index.html"));
							} else {
								if (!filepath.endsWith("html")) {
									error = "HTTP/1.1 501 Not Implemented";
								} else {
									brFile = new java.io.BufferedReader(new java.io.FileReader(filepath));
								}
							}
						} catch (filenotfoundprobably) {
							error = "HTTP/1.1 404 Not Found";
							clientMessage(filenotfoundprobably.message);
						}
						
						if (error == null) {
							var line = brFile.readLine();
							while (line != null) {
								bw.write(line + "\n");
								bw.flush();
								line = brFile.readLine();
							}
						} else {
							bw.write(error + "\n");
							bw.write("Connection: close" + "\n");
							bw.flush();
						}
						
						bw.close();
						br.close();
						if (brFile != null) {
							brFile.close();
						}
					} catch (err2) {
						clientMessage(err2.message);
					}
				}
			} catch (err){
				clientMessage(err.message);
			}
		}
	};
	thread.start();
}

function leaveLevel() {
	thread.stop();
}