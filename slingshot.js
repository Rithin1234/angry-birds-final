class Slingshot{
    constructor(bodyA,pointB){
        var optins = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.pointB = pointB 
        this.slingshot = Constraint.create(optins)
        World.add(world,this.slingshot)
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }
    fly(){
        this.slingshot.bodyA = null
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,170,20)
       
        if(this.slingshot.bodyA){
            var pointA=this.slingshot.bodyA.position
            var pointB=this.pointB
push()
     stroke("rgb(79,18,18)") 
     if(pointA.x<220){
        strokeWeight(7)
        line(pointA.x-25,pointA.y,pointB.x,pointB.y)
    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
    image(this.sling3,pointA.x-30,pointA.y-10,15,30)
     }
 else{
     strokeWeight(3)
     line(pointA.x+25,pointA.y,pointB.x-10,pointB.y)
     line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3)
     image(this.sling3,pointA.x+25,pointA.y-10,15,30)
 }       
    pop()
        }
    }
    attach(body) {
        this.slingshot.bodyA=body
    }
}