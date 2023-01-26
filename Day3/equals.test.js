import { strictEquals } from './equals.js';

describe('Given strictEquals', () => {
  describe('when we have two parameters', () => {
    test.each('Then if they are 1 and 1 it should return true', () => {
      const a = 1;
      const b = 1;
      const expected = true;
      const r = strictEquals(a, b);
      expect(r).toBe(expected);
    });
    test('Then if they are NaN and NaN it should return false', () => {
      const a = NaN;
      const b = NaN;
      const expected = false;
      const r = strictEquals(a, b);
      expect(r).toBe(expected);
    });
  });
});
