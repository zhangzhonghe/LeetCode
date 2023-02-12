/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) return 0;
  const strArr = s.split("");
  const resultArr = [];
  let map = {};
  let start = 0;
  let end = 0;
  for (let i = 0; i < strArr.length; i++) {
    const item = strArr[i];
    if (item in map && map[item] >= start) {
      resultArr.push(end - start + 1);
      start = map[item] + 1;
      map[item] = i;
    } else {
      end = i;
      map[item] = i;
    }
  }
  resultArr.push(end - start + 1);
  return Math.max(...resultArr);
};
