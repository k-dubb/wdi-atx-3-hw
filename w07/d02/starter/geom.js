function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype =  {

  isSquare: function(){
    if (this.length === this.width){
      return true;
    }
      return false;
    }
  },

  area: function() {
    return (this.length * this.width);
  },

  perimeter: function(){
    return (this.length * 2) + (this.width * 2);
  }

};

var rectangle = new Rectangle(3,4);
rectangle.area();

var rectangle2 = new Rectangle(4,2);
rectangle2.isSquare();

var rectangle3 = new Rectangle(5,9);
rectangle3.perimeter();


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  isEquilateral: function() {
    if ((this.sideA === this.sideB) && (this.sideA === this.sideC)){
      return true;
    }
    return false;
  },

  isIsosceles: function(){
    if (this.sideA === this.sideB) || (this.sideA === this.sideC) || (this.sideB === this.sideC){
      return true;
    }
    return false;
  },

  triArea: function(){
    return ((this.sideA + this.sideB + this.sideC) / 2);
  },

  isObtuse: function(){
    var A = Math.pow(this.sideA, 2);
    var B = Math.pow(this.sideB, 2);
    var C = Math.pow(this.sideC, 2);
    
    if (((A + B) < C) || ((A + C) < B) || ((B + C) < A)){
        return true;
    }
    return false;
  }
};

var triangle = new Triangle(3, 2, 8);
triangle.isEquilateral();

var triangle2 = new Triangle(1, 2, 4);
triangle2.isIsosceles();

var triangle3 = new Triangle(3, 2, 9);
triangle3.triArea();

var triangle4 = new Triangle(2, 2, 8);
triangle4.isObtuse();


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype = {
  length: function(){
  var X = Math.pow((this.x1 - this.x2),2);
  var Y = Math.pow((this.y1 - this.y2), 2);
  
  return Math.sqrt(X + Y);
  }
};

var line = new LineSegment(-2, 8, -7, -5);
line.length();



