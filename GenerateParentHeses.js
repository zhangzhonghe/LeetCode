/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  walkParenthesisTree(2 * n - 1, "(", result, 1, 0, n);
  return result;
};

/**
 * @param {number} n 一共多少的字符，包括 ( 和 )
 * @param {string} choose 由所选择的括号所拼接的字符串
 * @param {string[]} result 用于存放结果
 * @param {number} leftCount 左括号已经被使用的次数
 * @param {number} rightCount 右括号已经被使用的次数
 * @param {number} pairs 一共有多少对括号
 * @return {string[]}
 */
function walkParenthesisTree(n, choose, result, leftCount, rightCount, pairs) {
  if (n === 0) {
    result.push(choose);
    return;
  }
  if (leftCount < pairs) {
    walkParenthesisTree(
      n - 1,
      choose + "(",
      result,
      leftCount + 1,
      rightCount,
      pairs
    );
  }
  if (rightCount < leftCount)
    walkParenthesisTree(
      n - 1,
      choose + ")",
      result,
      leftCount,
      rightCount + 1,
      pairs
    );
}
