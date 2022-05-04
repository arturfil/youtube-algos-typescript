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

    addToTree(insertNode: TreeNode, root: TreeNode): TreeNode {
        if (insertNode.val === root.val) return root;

        if (insertNode.val! < root.val! && root.left === null) {
            root.left = insertNode;
        } else if (insertNode.val! > root.val! && root.right === null) {
            root.right = insertNode;
        } else if (insertNode.val! < root.val! && root.left !== null) {
            this.addToTree(insertNode, root.left!);
        } else {
            this.addToTree(insertNode, root.right!)
        }
        return root;
    }

    findNode(value: number, root: TreeNode): TreeNode | null {
        if (value === root.val) {
            return root;
        }
        if (value < root.val! && root.left !== null) {
            return this.findNode(value, root.left)
        } else if (value > root.val! && root.right !== null) {
            return this.findNode(value, root.right);
        } else {
            return null;
        }
    }

    deleteFromTree(deleteValue: number, root: TreeNode): void | null {
        if (deleteValue === root.left?.val) {
            if (root.left?.left === null && root.left.right === null) { // leaf node
                return root.left = null;
            } else {
                root.left = root.left?.left ? root.left.left : root.left!.right;
            }

        } else if (deleteValue === root.right?.val) {
            if (root.right?.right === null && root.right.left === null) { // leaf node
                return root.right = null;            
            } else {
                root.right = root.right?.right ? root.right.right : root.right!.left;
            }

        } else if (deleteValue! > root.val! && root.right !== null) {
            return this.deleteFromTree(deleteValue, root.right!);

        } else if (deleteValue! < root.val! && root.left !== null) {
            return this.deleteFromTree(deleteValue, root.left!);

        } else {
            return null;
        }
    }

}