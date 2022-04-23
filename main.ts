import { TreeNode } from "./BinaryTrees/TreeNode";
import { CreateRandomArray } from "./Helpers/CreateRandomArray";
import { Recursion } from "./Recursion/Recursion";
import { BinarySearch } from "./Search/BinarySearch";
import { BubbleSort } from "./Sorting/BubbleSort";
import { MergeSort } from './Sorting/MergeSort';
import { QuickSort } from "./Sorting/QuickSort";

class Main {
    
    main(args?: string[]) {
        
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
        
        root.printTree(root);
    }

}

const program = new Main();
program.main();