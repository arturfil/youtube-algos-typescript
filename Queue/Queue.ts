// FI + FO -> First In, First Out
export class Queue {
    items: any[]
    constructor() {
        this.items = [];
    }

    // add value to the back
    enqueue(val:any) {
        this.items.push(val);
    }

    // remove first value
    deqeue() {
        if (this.isEmpty()) return "Underflow"
        this.items.shift();
    }

    // return first value
    front() {
        if (this.isEmpty()) return "Underflow";
        return this.items[0];
    }

    // checks if empty
    isEmpty() { 
        return this.items.length === 0;
    }

    // logs queue
    printQueue() {
        // if (this.isEmpty()) return "Underflow"
        let str = "[";
        for(let item of this.items) {
            str += `${item} `
        }
        str += "]"
        console.log(str)
    }
}