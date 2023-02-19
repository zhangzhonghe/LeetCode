const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const numArr = digits.split("");
  const result = [];
  walkTree(numArr, 0, "", result);
  return result;
};

function walkTree(numArr, i, v, result) {
  if (i >= numArr.length) {
    result.push(v);
    return;
  }

  for (let j = 0; j < map[numArr[i]].length; j++) {
    walkTree(numArr, i + 1, v + map[numArr[i]][j], result);
  }
}
