import { Queue } from "./Queue/Queue";

class Main {
  main(args?: string[]) {
    
    let laptops:Set<string> = new Set(["macbook", "dell"]);


    let laptopsOnEbay = [
        "macbook",
        "macbook",
        "dell",
        "macbook",
        "macbook",
        "chromebook",
        "razer",
        "macbook",
        "macbook",
        "macbook",
        "razer"
    ]

    let repeatedProducts = 0;
    for (let i = 0; i < laptopsOnEbay.length; i++) {
        let key = laptopsOnEbay[i];
        if (!laptops.has(key)) {
            laptops.add(key)
        } else {
            repeatedProducts += 1;
        }
    }

    if (laptops.has("razer")) {
        console.log("we do have razers");
    }

    console.log(laptops)
    console.log(`We have ${repeatedProducts} repeated products`);

  }
}

const program = new Main();
program.main();
