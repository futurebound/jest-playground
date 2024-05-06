const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new Error('please input a string');
  } else if (str.length <= 0) {
    return '';
  }

  const firstLetter = str.charAt(0);
  return firstLetter.toUpperCase() + str.slice(1);
};

export default capitalize;
