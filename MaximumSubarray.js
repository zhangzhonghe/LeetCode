/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let result = nums[0];
  let currentMax = 0;
  for (const item of nums) {
    if (currentMax <= 0) {
      currentMax = item;
    } else {
      currentMax += item;
    }
    result = Math.max(result, currentMax);
  }
  return result;
}
