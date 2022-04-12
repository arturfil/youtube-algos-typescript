import { CreateRandomArray } from "./Helpers/CreateRandomArray";
import { Recursion } from "./Recursion/Recursion";
import { BinarySearch } from "./Search/BinarySearch";
import { BubbleSort } from "./Sorting/BubbleSort";
import { MergeSort } from './Sorting/MergeSort';
import { QuickSort } from "./Sorting/QuickSort";

class Main {
    
    main(args?: string[]) {
        
        // Create Random Array
        // let createRndArr = new CreateRandomArray();
        // let random = createRndArr.generateRandomArray(100000);
        // console.log("Shuffeld Array");
        // console.log(random);

        let test:number[] = [];
        for (let i = 0; i < 10000000; i++) {
            test.push(i);
        }

        // Sort Array
        // let merge = new MergeSort();
        // console.log("Sorted Array")
        // random = merge.mergeSort(random);
        // console.log(random);
        
        
        // Search
        let bin = new BinarySearch();
        console.log( bin.binarySearch(test, 1100198) );
        // console.log(bin.sequentialSeach(test, 1100198));
        



    }
}

const program = new Main();
program.main();