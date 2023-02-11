/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result[i] = countOnes(i);
  }
  return result;
}

function countOnes(n) {
  let result = 0;
  while (n > 0) {
    n &= n - 1;
    result++;
  }
  return result;
}
