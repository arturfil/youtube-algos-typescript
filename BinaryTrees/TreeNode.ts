export class TreeNode {
    val: number | null;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }

    printTree(node: TreeNode) {
        if (node == null) return;
        console.log(node.val);
        this.printTree(node.left!)
        this.printTree(node.right!)
    }
}