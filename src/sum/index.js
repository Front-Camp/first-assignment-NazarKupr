/**
* This function should return sum of two numbers
*
* @param {number} a - this is a number value
* @param {number} b - this is a number value
* @return {number} result of the sum values
* @example
* sum(1, 2);   // 3
* sum(0, 5);   // 5
* sum(-1, 13); // 12
*/
const sum = (a, b) => {
  if(!isNumeric(a) || !isNumeric(b)) {
    throw new Error('');
  }

  return a + b;
};

const isNumeric = number => {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

export default sum;
