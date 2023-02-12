/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
  let z = x ^ y;
  let n = 0;
  while (z > 0) {
    z &= z - 1;
    n++;
  }
  return n;
}
