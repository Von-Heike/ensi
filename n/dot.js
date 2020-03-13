class dot{
	constructor(x,y, bs){
		this.x=x;
		this.y=y;
		this.fit=3000;
		self = this; //per accedere this anche dalle funzioni int e otp
		
		this.inp = [
			function(){
				if(self.x<mx){return true;
				}return false;
			},
			function(){
				if(self.x>mx){return true;}
				return false;
			},
			function(){
				if(self.y < my){return true;}
				return false;
			},
			function(){
				if(self.y > my){return true;}
				return false;
			}
			];
			
		this.otp =  [ 
		function(){self.x+=1;},
		function(){self.x-=1;},
		function(){self.y+=1;},
		function(){self.y-=1;}
		];
		
		/* this.bs = [     GOOD ONE
			[0,0],
			[1,1],
			[2,2],
			[3,3]
			];
		*/
		
		this.bs = bs;
		this.color = 'rgba(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ',1)'; 
	}
	
	draw(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x-3,this.y-3, 6,6);
	}
	
	live(){
		self = this;
		for(let i=0; i < this.bs.length; i++){
			if( this.inp[this.bs[i][0]]() ){
				this.otp[ this.bs[i][1]]();
			}
		}
		if(this.x>1000){this.x=1000;}else if(this.x<0){this.x=0;}
		if(this.y>1000){this.y=1000;}else if(this.y<0){this.y=0;}

		this.draw();
		
		this.fit=Math.sqrt(Math.abs(this.x- mx) + Math.abs(this.y-my));
		
	}
	
}





function randomBS(){

	return  [    
			[ Math.round( Math.random()*3) , Math.round( Math.random()*3)],
			[ Math.round( Math.random()*3) , Math.round( Math.random()*3)],
			[ Math.round( Math.random()*3) , Math.round( Math.random()*3)],
			[ Math.round( Math.random()*3) , Math.round( Math.random()*3)]
			];
	
	
}

function mutate(obj){
	obj.bs[ Math.round( Math.random()*3) ][ Math.round( Math.random()*1) ] = Math.round( Math.random()*3);
	
	
}
	
	
	
	