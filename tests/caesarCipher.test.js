import caesarCipher from '../modules/caesarCipher';

test('throw error for non-string input', () => {
  expect(() => caesarCipher(null)).toThrow();
  expect(() => caesarCipher(null)).toThrow(Error);
});

test('test empty string', () => {
  expect(caesarCipher('', 0)).toBe('');
});

test('test 0 shift', () => {
  expect(caesarCipher('apple', 0)).toBe('apple');
});

test('test 1 shift', () => {
  expect(caesarCipher('apple', 1)).toBe('bqqmf');
});

test('test 1 shift with uppercase', () => {
  expect(caesarCipher('aPPle', 1)).toBe('bQQmf');
});

test('test shift that requires wrapping', () => {
  expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('test shift that requires wrapping with uppercase', () => {
  expect(caesarCipher('xYZ', 1)).toBe('yZA');
});

test('test ignores punctuation', () => {
  expect(caesarCipher(',xY.!Z!', 2)).toBe(',zA.!B!');
});
