/**
 * @param {number[]} numbs
 * @return {number}
 */
function majorityElement(numbs) {
  let count = 0;
  for (const n1 of numbs) {
    for (const n2 of numbs) {
      if (n1 === n2) count++;
      if (count > numbs.length / 2) return n1;
    }
    count = 0;
  }
}
