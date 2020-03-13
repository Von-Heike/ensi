// MOUSE TRACK
document.body.onkeydown = function (e) {
	if (e.code=="KeyN"){
		timer=1000;
		mx = Math.round( Math.random()*1000);
		my = Math.round( Math.random()*1000);
	}
   if (e.code=="KeyA"){
	   let n = parseInt(prompt("Which?"));
	   dots[n].bs=[
				[0,0],
				[1,1],
				[2,2],
				[3,3]
			];
   }
 
}