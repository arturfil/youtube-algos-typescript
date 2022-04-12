export class CreateRandomArray {
    arr: number[];

    constructor() {
        this.arr = [];
    }

    generateRandomArray(maxLen: number) {
        
        while(this.arr.length < maxLen){
            let randNumber = Math.floor(Math.random() * maxLen) + 1;
            if(this.arr.indexOf(randNumber) === -1) this.arr.push(randNumber);
        }
        
        return this.arr;
    }

}