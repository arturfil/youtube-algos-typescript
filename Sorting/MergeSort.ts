//  Big(O) => nlogn 
export class MergeSort {
    mergeHelperFunction(left: number[], right: number[]) {
        let arr = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift())
            }
        }
        return [...arr, ...left, ...right];
    }

    mergeSort(array: number[]):any {
        const half = array.length / 2;
        
        // ver si solo queda un elemento
        if (array.length < 2) {
            return array;
        }

        const left = array.splice(0, half);
        return this.mergeHelperFunction(this.mergeSort(left), this.mergeSort(array))
    }
       
}