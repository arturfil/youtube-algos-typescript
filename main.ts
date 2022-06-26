import { BFS } from "./Graphs/BFS";
import { DFS } from "./Graphs/DFS";
import { Heap } from "./Heap/Heap";
import { Queue } from "./Queue/Queue";

class Main {

    
  main(args?: string[]) {
    
    let maxHeap = new Heap();
    maxHeap.findlargestKElement([1,3,7,9,4,2], 3);

  }
}

const program = new Main();
program.main();
