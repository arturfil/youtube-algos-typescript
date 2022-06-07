// Stack -> LI + FO -> Last in, First Out
export class Stack {
    items:any;
    constructor() {
        this.items = [];
    }

    push(val:any) {
        this.items.push(val);
    }

    // elimina el ultimo valor
    pop() {
        if (this.isEmpty()) return "Underflow";
        this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "Underflow";
        return this.items[this.items.length-1]
    }

    // regresa true ? si esta vacio : false
    isEmpty() {
        return this.items.length === 0;
    } 

    printStack() {
        if (this.isEmpty()) return "Underflow"
        let str = "[";
        for(let item in this.items) {
            str += `${item} `
        }
        str += "]"
        console.log(str)
    }
}
