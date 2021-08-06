const mult = require('../src/mult');

test('calculate 2 * 3 to equal 6', () => {
    expect(mult(2, 3)).toBe(6);
  });