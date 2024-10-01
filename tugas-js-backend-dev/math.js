/**
 *
 * @param {number} num
 * @returns number of Array
 */
const circleArea = (num) => {
  return Math.pow(num, 2) * 3.14;
};
console.log(circleArea(4));

/**
 *
 * @param {array} arr
 * @returns number of array that power each litterate
 */
const powerArray = (arr) => {
  return arr.map((elm) => Math.pow(elm, 2));
};

console.log(powerArray([2, 3, 1, 5]));
