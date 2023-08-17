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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const newTree = new TreeNode();
    let head = newTree;
    
    const inorder = (root) => {
        if (!root) return;
        
        inorder(root.left);
        
        head.right = new TreeNode(root.val)
        head = head.right;
        
        inorder(root.right);
    }
    
    inorder(root)
    
    return newTree.right
};