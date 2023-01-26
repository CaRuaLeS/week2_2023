import { add } from './sample.js';

// Gerkin Gwt(Given..when..then)

describe('Given add function', () => {
  describe('when we have two numbers', () => {
    test('then If a = 1 and b = 1 result should', () => {});
  });
});

// Arrange
const n1 = 2;
const n2 = 2;
const expected = 2;
// Act
const r = add(1, 2);
// Asert
expect(r).toBe(expected);

test('If a = 1 and b = 1 result should be 2', () => {
  const r = add(1, 1);
  expect(r).toBe(2);
});
