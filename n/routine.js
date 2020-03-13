
// main script, bounds dot, time etc

var mx=0;
var my=0;

var dots = [
	new dot(500,500, randomBS() ), 
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() ),
	new dot(500,500, randomBS() )
	];


var timer=0;
var time;
str = "";

function restart(){
	timer=0;
	
	
	tab.innerHTML = str;
	//best.value = dots[0].fit;
	time = setInterval(function(){
		
		ctx.fillStyle ='rgba(255,255,255,0.01)'; 
		ctx.fillRect(0,0,1000,1000);
		
		ctx.fillStyle ='rgba(255,25,0,1)'; 
		ctx.fillRect(mx-5,my-5,10,10);
		
	
		timer++
		
		for(c=0; c<dots.length;c++){
			dots[c].live();
		}
	
		if(timer>=1000){
			clearInterval(time);
			
			str = "";
			dots.sort (function( a,b ){
				if(a.fit < b.fit){return -1}
				if(a.fit >= b.fit){return 1}
			});
			
			for(c=0; c<dots.length;c++){
				dots[c].x = 500;
				dots[c].y = 500;
				str = str.concat ("</br>", ("<span style='background-Color:"+dots[c].color+"'>#"+ c +" DOT: "+dots[c].fit+"\n" + dots[c].bs.join("\n") ),"</span>");
			}
			
			
			if(dots[dots.length-1].fit!=0){mutate(dots[dots.length-1]);}

			restart();
		}
	},1);
}





restart();