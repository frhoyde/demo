const Shapes = require('../src/shapes');

test('Regression test: Ensure existing functionalities are not affected', () => {
  const newRectangleArea = Shapes.rectangleArea(3, 7);

  const expectedArea = 21;

  expect(newRectangleArea).toBe(expectedArea); 
});
