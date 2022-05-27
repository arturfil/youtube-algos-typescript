/*
    NOTES: Create a binary tree
    let root:TreeNode = new TreeNode(6);
    let l_n1 = new TreeNode(3);
    let l_n2 = new TreeNode(2);
    let l_n3 = new TreeNode(5);
        
    let r_n1 = new TreeNode(8);
    let r_n2 = new TreeNode(12);
    let r_n3 = new TreeNode(9);

    // left side of tree
    root.left = l_n1;
    l_n1.left = l_n2;
    l_n1.right = l_n3;

    // right side of tree
    root.right = r_n1;
    r_n1.right = r_n2;
    r_n2.left = r_n3;
    
    // root.printTree(root);
    console.log("---- Add Node ---");
    let new_node = new TreeNode(11)
    root.addToTree(new_node, root);
    root.printTree(root);
    // console.log("Node", r_n3.right!.val);
    
    console.log("--- Find Node ---");
    let found = root.findNode(12, root);
    console.log(found ? found.val : found);

    console.log("--- Delete Node ---");
    root.deleteFromTree(12, root)
    root.printTree(root);
*/

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