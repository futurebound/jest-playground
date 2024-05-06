import calculator from '../modules/calculator';

test('add handles negative numbers', () => {
  expect(calculator.add(-1, -2)).toBe(-3);
});

test('add positive numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('add handles positive and negative numbers', () => {
  expect(calculator.add(-1, 1)).toBe(0);
});

test('subtract handles negative numbers', () => {
  expect(calculator.subtract(-1, -2)).toBe(1);
});

test('subtract positive numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('subtract handles positive and negative numbers', () => {
  expect(calculator.subtract(-1, 1)).toBe(-2);
});

test('divide number by self is 1', () => {
  expect(calculator.divide(3, 3)).toBe(1);
});

test('divide by 0 is Infinity', () => {
  expect(calculator.divide(3, 0)).toBe(Infinity);
});

test('divide negative by positive', () => {
  expect(calculator.divide(-3, 2)).toBeLessThan(0);
});

test('divide positive by negative', () => {
  expect(calculator.divide(3, -2)).toBeLessThan(0);
});

test('divide negative by negative', () => {
  expect(calculator.divide(-3, -2)).toBeGreaterThan(0);
});

test('divide positive by positive', () => {
  expect(calculator.divide(3, 2)).toBeGreaterThan(0);
});

test('multiply by 0', () => {
  expect(calculator.multiply(3, 0)).toBe(0);
});

test('multiply by 1', () => {
  expect(calculator.multiply(3, 1)).toBe(3);
});

test('multiply by negative', () => {
  expect(calculator.multiply(3, -1)).toBeLessThan(0);
});
