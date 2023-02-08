/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isMirror(root.left, root.right);
};

function isMirror(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (left.val === right.val) &&
        isMirror(left.left, right.right) &&
        isMirror(left.right, right.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricIteratively = function(root) {
    const q = [];
    q.push(root);
    q.push(root);

    while(q.length) {
        const node_1 = q.shift();
        const node_2 = q.shift();

        if (!node_1 && !node_2) continue;
        if (!node_1 || !node_2) return false;
        if (node_1.val !== node_2.val) return false;
        q.push(node_1.left);
        q.push(node_2.right);
        q.push(node_1.right);
        q.push(node_2.left);
    }

    return true;
};