/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (!head) return false;
  if (!head.next) return false;
  const map = new Map();

  while (head) {
    map.set(head, true);
    head = head.next;
    if (map.get(head)) return true;
  }
  return false;
}
