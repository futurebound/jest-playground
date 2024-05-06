import capitalize from '../modules/capitalize';

test('throw error for non-string input', () => {
  expect(() => capitalize(null)).toThrow();
  expect(() => capitalize(null)).toThrow(Error);
});

test('returns empty string for empty input', () => {
  expect(capitalize('')).toBe('');
});

test('correctly capitalizes car -> Car', () => {
  expect(capitalize('car')).toBe('Car');
});

test('correctly capitalizes oar -> Oar', () => {
  expect(capitalize('oar')).toBe('Oar');
});
