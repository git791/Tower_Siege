class Polygon extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
      polygon = Bodies.circle(50,200,20);
      World.add(world, polygon);
    
    }
  
    display() {
      super.display();
    }
  }
  