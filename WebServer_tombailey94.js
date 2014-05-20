var wwwroot = "/sdcard/games/com.mojang/ModPE/wwwroot";

function newLevel() {
	var folder = new java.io.File(wwwroot);
	folder.mkdirs();

	var thread = new java.lang.Thread() {	
		run: function() {
			try {
				const server = new java.net.ServerSocket(80);
				
				var thread2 = new java.lang.Thread() {			
					run: function() {
						while (true) {
							try {
								var client = server.accept();
							
								var br = new java.io.BufferedReader(new java.io.InputStreamReader(client.getInputStream()));
								var bw = new java.io.BufferedWriter(new java.io.OutputStreamWriter(client.getOutputStream()));
								
								var request = br.readLine();
								var requestInfo = request.split(" ");
								
								var filepath = wwwroot + requestInfo[1];
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
					}
				};
				thread2.start();
			} catch (err){
				clientMessage(err.message);
			}
		}
	};
	thread.start();
}