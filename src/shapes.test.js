// shapes.test.js

const Shapes = require('./shapes');

test('Rectangle area', () => {
  expect(Shapes.rectangleArea(5, 10)).toBe(50);
});

test('Circle area', () => {
  expect(Shapes.circleArea(5)).toBeCloseTo(78.54, 2);
});

test('Triangle area', () => {
  expect(Shapes.triangleArea(5, 10)).toBe(25);
});

test('Integration test: Calculate area of shapes', () => {
  const rectangleArea = Shapes.rectangleArea(5, 10);
  const circleArea = Shapes.circleArea(5);
  const triangleArea = Shapes.triangleArea(5, 10);

  // Assuming there's a function to sum up areas
  const totalArea = rectangleArea + circleArea + triangleArea;

  expect(totalArea).toBeCloseTo(153.54, 2);
});
