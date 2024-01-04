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
var evaluateTree = function(root) {
    if (root === null) return null;
    
    const leftNode = evaluateTree(root.left);
    const rightNode = evaluateTree(root.right);
    
    if (leftNode === null && rightNode === null) return root.val;
    
    return root.val === 2 ? leftNode || rightNode : leftNode && rightNode
};