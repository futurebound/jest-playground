import reverseString from '../modules/reverseString';

test('throw error for non-string input', () => {
  expect(() => reverseString(null)).toThrow();
  expect(() => reverseString(null)).toThrow(Error);
});

test('returns empty string for empty input', () => {
  expect(reverseString('')).toBe('');
});

test('returns 1 letter string as is', () => {
  expect(reverseString('a')).toBe('a');
});

test('returns 2 letter string reversed', () => {
  expect(reverseString('ab')).toBe('ba');
});

test('returns 3 letter string reversed', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('returns even letter string reverse', () => {
  expect(reverseString('crabby')).toBe('ybbarc');
});

test('returns odd letter string reverse', () => {
  expect(reverseString('whale')).toBe('elahw');
});
