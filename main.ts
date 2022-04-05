
class Main {
    
    main() {
        let arr = [1,2,3,4,5,6,7,8,9,0];
        // console.log(arr.length);
        // BigO => O(n);

        // Omega => mejor caso, lower bound
        // Theta => en promedio, mid bound
        // O     => pero case, upper bound
       
        // BigO => O(n)
        // for (let i = 0; i < arr.length; i++) {
        //     console.log(i);
        // }

        // ------------------------------------
        // BigO => O(n^2) 
        // for(let i = 0; i < arr.length; i++) {
        //     for(let j = 0; j < arr.length; j++) {
        //         console.log(`Outer ${i}, Inner ${j}`);
        //     }
        // }


        // BigO => O(n);
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < 1; j++) { // solo itera una vez el neted forloop
                console.log(`Outer ${i}, Inner ${j}`);
            }
        }
    }
}

const program = new Main();
program.main();