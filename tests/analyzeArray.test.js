import analyzeArray from '../modules/analyzeArray';

test('throw error for non-array input', () => {
  expect(() => analyzeArray(null)).toThrow();
  expect(() => analyzeArray('')).toThrow(Error);
});

test('do not throw error for array input', () => {
  expect(() => analyzeArray([])).not.toThrow();
});

test('returns an object', () => {
  expect(analyzeArray([])).toBeInstanceOf(Object);
});

test('returns an object', () => {
  expect(analyzeArray([])).toBeInstanceOf(Object);
});

test('calculates empty array correctly', () => {
  const emptyResult = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };
  expect(analyzeArray([])).toStrictEqual(emptyResult);
});

test('calculates array with positive values correctly', () => {
  const emptyResult = {
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  };
  expect(analyzeArray([1, 2, 3])).toStrictEqual(emptyResult);
});

test('calculates array with negative values correctly', () => {
  const emptyResult = {
    average: -2,
    min: -3,
    max: -1,
    length: 3,
  };
  expect(analyzeArray([-1, -2, -3])).toStrictEqual(emptyResult);
});
