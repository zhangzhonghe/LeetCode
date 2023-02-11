/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  const _headB = headB;
  while (headA) {
    while (headB) {
      if (headA === headB) return headA;
      headB = headB.next;
    }
    headA = headA.next;
    headB = _headB;
  }
  return null;
}
