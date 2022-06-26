export class Heap {
    // [1,3,7,9,4,2]; k elements 
    findlargestKElement(nums: number[], k: number): number[]{
        let maxHeap = new FakeHeap();
        for(let num of nums) {
            maxHeap.insert(num);
        }
        console.log(maxHeap.heap.slice(0,k));
        return maxHeap.heap.slice(0, k);
    }
}

class FakeHeap {
    heap: number[]

    constructor() {
        this.heap = [];
    }

    insert(val:any) {
        this.heap.unshift(val);
        this.heap.sort((a, b) => b - a) // max heap
        // this.heap.sort((a, b) => a - b) // min heap
    }

    exctract() {
        if (this.size === 0) return null
        this.heap.unshift();
    }

    peek() {
        if (this.size === 0) return null;
        return this.heap[0]; // sorted by max/min -> return the first value
    }

    get size() {
        return this.heap.length;
    }
}