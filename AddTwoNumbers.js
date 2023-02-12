/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let l = {};
  let result = l;
  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = 0;
    if (sum >= 10) {
      sum = sum % 10;
      carry++;
    }
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
    l.val = sum;
    if (!l1 && !l2) {
      l.next = null;
    } else {
      l = l.next = {};
    }
  }
  if (carry > 0) l.next = { val: carry, next: null };
  return result;
};
