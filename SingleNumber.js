/**
 * @param {number[]} numbs
 * @return {number}
 */
function singleNumber(numbs) {
  let result = 0;
  for (const element of numbs) {
    result ^= element;
  }
  return result;
}
