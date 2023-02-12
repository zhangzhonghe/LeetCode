/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const result = [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) result.push(i);
  }
  return result;
}
