/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    result = result.concat(twoSum(nums, i + 1, nums.length - 1, 0 - nums[i]));
  }
  return result;
};

// 数组已经排好序
function twoSum(nums, start, end, sum) {
  const result = [];
  const _start = start;
  const _end = end;
  while (start < end) {
    const v1 = nums[start];
    const v2 = nums[end];
    const _sum = v1 + v2;
    if (_sum === sum) {
      if (start > _start && nums[start] === nums[start - 1]) {
        start++;
        continue;
      }
      if (end < _end && nums[end] === nums[end + 1]) {
        end--;
        continue;
      }
      start++;
      // 适配 treeSum
      result.push([-sum, v1, v2]);
    } else if (_sum <= sum) {
      start++;
    } else {
      end--;
    }
  }
  return result;
}
