class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction' : 3
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width
      this.height = height
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push ();
      translate (pos.x, pos.y);
      rotate (this.body.angle)
      rectMode(CENTER);
      stroke(0,179,196)
      strokeWeight(4);
      fill(2,68,73);
      rect(0, 0, this.width, this.height);
      pop();
      
    }
  };