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
