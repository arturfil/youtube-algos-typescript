export class Recursion {

    sumMinusOne(k: number): number {
        // caso base
        if (k == 1) return k;

        return this.sumMinusOne(k-1) + k;
    }

    factorial(k: number): number {
        if (k == 1) return k;

        return this.factorial(k-1) * k;
    }
}