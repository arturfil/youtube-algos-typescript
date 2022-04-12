export class BinarySearch {

    /*
        target = 11
        
    */
    // Big(O) => log(n)
    binarySearch(arr: number[], target: number) {
        let beg = 0;
        let end = arr.length-1;
        let rounds = 0;
        while(beg <= end) {
            console.log(rounds);
            let mid = Math.floor((beg + end) / 2);
            if (arr[mid] == target) {
                console.log(`\n rounds taken ${rounds} \n`, )
                return arr[mid];
            } else if (target < arr[mid]) {
                end = mid-1;
            } else {
                beg = mid+1;
            }
            rounds++;
        } 
        // return -1;
    }

    sequentialSeach(arr: number[], target: number) {
        for(let i = 0; i < arr.length; i++) {
            console.log(i);
            
            if (arr[i] === target) {
                console.log("Number of rounds ", i);
                return arr[i];
            }
        }
    }

}