class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.image=loadImage("sprites/paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		
			
			push()
			rectMode(CENTER)
			fill(255,0,255);
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			
			image(this.image,0,0,this.r+45, this.r+45);
			pop()
			
	}

}