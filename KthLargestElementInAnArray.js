/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 从大到小排序
  return partition(nums, k, 0, nums.length - 1);
};

function partition(nums, k, start, end) {
  if (start >= end) return nums[start];

  const v = nums[start];
  let l = start,
    r = start + 1;

  while (r <= end) {
    if (nums[r] > v) swap(nums, ++l, r);

    r++;
  }

  if (l + 1 === k) return v;

  swap(nums, start, l);
  if (l < k) return partition(nums, k, l + 1, end);
  return partition(nums, k, start, l - 1);
}

function swap(nums, i, j) {
  const left = nums[i];
  nums[i] = nums[j];
  nums[j] = left;
}
