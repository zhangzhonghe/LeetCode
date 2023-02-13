/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let start = 0,
    end = height.length - 1;
  while (start < end) {
    const leftHeight = height[start];
    const rightHeight = height[end];
    result = Math.max(
      result,
      Math.min(leftHeight, rightHeight) * (end - start)
    );
    if (leftHeight < rightHeight) {
      start++;
    } else {
      end--;
    }
  }
  return result;
};
