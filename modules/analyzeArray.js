const analyzeArray = (arr) => {
  if (!Array.isArray(arr)) throw new Error('please input an array');

  return {
    average: average(arr),
    min: arr.length > 0 ? Math.min(...arr) : 0,
    max: arr.length > 0 ? Math.max(...arr) : 0,
    length: arr.length,
  };
};

const average = (arr) => {
  if (arr.length <= 0) return 0;

  const startingValue = 0;
  const sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, startingValue);

  return sum / arr.length;
};

export default analyzeArray;
