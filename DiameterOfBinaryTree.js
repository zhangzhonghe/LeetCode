/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let max = 0;

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  max = 0;
  getMaxDepth(root);
  return max;
};

function getMaxDepth(root) {
  if (!root) return 0;
  const l = getMaxDepth(root.left) + (root.left ? 1 : 0);
  const r = getMaxDepth(root.right) + (root.right ? 1 : 0);
  max = Math.max(max, l + r);
  return Math.max(l, r);
}
