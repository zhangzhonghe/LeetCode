/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const arr = s.split("");
  let n = 1;
  let start = 0,
    end = arr.length - n;
  while (true) {
    if (isPalindromic(arr, start, end)) return s.slice(start, end + 1);
    if (end === arr.length - 1) {
      n++;
      start = 0;
      end = arr.length - n;
    } else {
      start++;
      end++;
    }
  }
};

function isPalindromic(arr, start, end) {
  while (start < end) {
    if (arr[start] !== arr[end]) return false;
    start++;
    end--;
  }
  return true;
}
