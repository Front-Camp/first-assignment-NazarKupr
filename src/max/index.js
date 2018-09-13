/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (isNumeric(arr[i]) && arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const isNumeric = number => {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

export default max;
