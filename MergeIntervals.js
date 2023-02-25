/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let k = 0;
    for (let j = i + 1; j < intervals.length; j++) {
      if (intervals[j][0] > intervals[i][1]) break;
      intervals[i][1] = Math.max(intervals[i][1], intervals[j][1]);
      k++;
    }
    result.push(intervals[i]);
    i += k;
  }

  return result;
};
