const reverseString = (str) => {
  if (typeof str !== 'string') {
    throw new Error('please provide a string input');
  }

  // pointer at end of string, add letters to output in reverse order
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }

  return reversed;
};

export default reverseString;
