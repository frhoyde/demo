const Shapes = require('../src/shapes');

test('Calculate total area of shapes', () => {
  const rectangleArea = Shapes.rectangleArea(5, 10);
  const circleArea = Shapes.circleArea(5);
  const triangleArea = Shapes.triangleArea(5, 10);

  const totalArea = calculateTotalArea(rectangleArea, circleArea, triangleArea);

  expect(totalArea).toBeCloseTo(153.54, 2);
});

function calculateTotalArea(rectangleArea, circleArea, triangleArea) {
  return rectangleArea + circleArea + triangleArea;
}
