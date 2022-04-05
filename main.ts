import { Recursion } from "./Recursion/Recursion";
import { BubbleSort } from "./Sorting/BubbleSort";

class Main {
    
    main(args?: string[]) {
       
        let rec = new Recursion();
        // console.log(rec.sumMinusOne(4)); // 10
        // console.log(rec.factorial(4));

        let bubble = new BubbleSort();
        bubble.sort([9,3,4,5,1,7,11])
    }
}

const program = new Main();
program.main();