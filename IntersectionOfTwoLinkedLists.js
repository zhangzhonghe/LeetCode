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

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// function getIntersectionNode(headA, headB) {
//   let nodeA = headA;
//   let nodeB = headB;
//   let n = 0;

//   while (nodeA && nodeB) {
//     if (nodeA === nodeB) return nodeA;
//     nodeA = nodeA.next;
//     nodeB = nodeB.next;
//     if (n >= 2) continue;
//     if (!nodeA) {
//       nodeA = headB;
//       n++;
//     }
//     if (!nodeB) {
//       nodeB = headA;
//       n++;
//     }
//   }

//   return null;
// }

// 官方解法
// var getIntersectionNode = function (headA, headB) {
//   if (headA === null || headB === null) {
//     return null;
//   }
//   let pA = headA,
//     pB = headB;
//   while (pA !== pB) {
//     pA = pA === null ? headB : pA.next;
//     pB = pB === null ? headA : pB.next;
//   }
//   return pA;
// };
