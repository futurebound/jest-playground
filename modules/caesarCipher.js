//
const caesarCipher = (str, shift) => {
  if (typeof str !== 'string') {
    throw new Error('please provide a string');
  } else if (shift === 0) {
    return str;
  }

  let shifted = '';
  for (let i = 0; i < str.length; i++) {
    shifted += shiftLetter(str.charAt(i), shift);
  }
  return shifted;
};

const shiftLetter = (letter, shift) => {
  const lowerAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const upperAlphabet = lowerAlphabet.map((character) => {
    return character.toUpperCase();
  });

  // ignore non-alphabetical characters
  if (!lowerAlphabet.includes(letter) && !upperAlphabet.includes(letter)) {
    return letter;
  } else if (lowerAlphabet.includes(letter)) {
    const preShiftIndex = lowerAlphabet.indexOf(letter);
    const postShiftIndex = (preShiftIndex + shift) % lowerAlphabet.length;
    return lowerAlphabet[postShiftIndex];
  } else {
    const preShiftIndex = upperAlphabet.indexOf(letter);
    const postShiftIndex = (preShiftIndex + shift) % upperAlphabet.length;
    return upperAlphabet[postShiftIndex];
  }
};

export default caesarCipher;
