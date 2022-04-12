export class QuickSort {
    
    partitionHelper(arr: number[], start: number, end: number) {
        const pivotValue = arr[end];
        let currentIndex = start;
        for(let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                // let temp = arr[i];
                // arr[i] = arr[pivotValue];
                // arr[pivotValue] = arr[i];
                [arr[i], arr[currentIndex]] = [arr[currentIndex], arr[i]];
                currentIndex++;
            }
        }
        [arr[currentIndex], arr[end]] = [arr[end], arr[currentIndex]];
        return currentIndex;
    }

    quickSort(arr: number[], start: number, end: number) {
        if (start >= end) {
            return;
        }

        let index = this.partitionHelper(arr, start, end);

        this.quickSort(arr, start, index - 1);
        this.quickSort(arr, index + 1, end);
    }
}