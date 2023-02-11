/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      n++;
      continue;
    }
    const value = nums[i - n];
    nums[i - n] = nums[i];
    nums[i] = value;
  }
  return nums;
}
