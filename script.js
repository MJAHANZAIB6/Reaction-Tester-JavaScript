	var starttime = new Date().getTime();
	function appearShape(){
		var topPosition = Math.random() * 350;
		var leftPosition = Math.random() * 800;
		var width = (Math.random() * 200)+ 50;
		if (Math.random() > 0.5) {
			document.getElementById("shapes").style.borderRadius = "50%";
			} else {
				document.getElementById("shapes").style.borderRadius = "0";
					}
		document.getElementById("shapes").style.backgroundColor = randomColor();
		document.getElementById("shapes").style.top = topPosition + "px";
		document.getElementById("shapes").style.left = leftPosition + "px";
		document.getElementById("shapes").style.width = width + "px";
		document.getElementById("shapes").style.height = width + "px";
		document.getElementById("shapes").style.display="block";
		starttime = new Date().getTime();
	}
	function randomColor(){
		var letters = '0123456789ABCDEF' .split('');
		var color = '#';
		for (var i = 0; i < 6; i++){
			color += letters[Math.floor(Math.random() * 16)];
				}
			return color;
	}
	function appearAfterTime(){
		setTimeout(appearShape , Math.random() * 2000);
	}
	appearAfterTime();
	document.getElementById("shapes").onclick = function(){
		document.getElementById("shapes").style.display="none";
		var endtime = new Date().getTime();
		var time = (endtime - starttime) / 1000;
		document.getElementById("time").innerHTML = time + " Sec";
		appearAfterTime();
	}