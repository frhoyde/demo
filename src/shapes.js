// shapes.js

class Shapes {
    static rectangleArea(width, height) {
      return width * height;
    }
  
    static circleArea(radius) {
      return Math.PI * Math.pow(radius, 2);
    }
  
    static triangleArea(base, height) {
      return (base * height) / 2;
    }
}
  
module.exports = Shapes;