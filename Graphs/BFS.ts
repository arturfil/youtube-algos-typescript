export class BFS {

    findShortesBfs(grid: number[][]) {
        if (grid[0][0] == 1) return -1; // cannot solve
        let directions = [
            // [-1, -1], [-1,1], [1, -1],[1,1], // diagonal moves
            [0,-1],[-1,0],[0,1],[1,0] // vertical/horizontal moves
        ]
        let queue = [[0,0, 0]] // x, y, length of path

        while (queue.length) {
            let [i, j, length] = queue.shift()!;
            if (i === grid.length-1 && j === grid[0].length-1) {
                return length; // base case, we solved the problem
            }
            for(let [moveI, moveJ] of directions) {
                const nextI = i + moveI;
                const nextJ = j + moveJ;
                if (this.inBound(nextI, nextJ, grid.length, grid[0].length) && 
                    grid[nextI][nextJ] === 0) {
                    grid[nextI][nextJ] === 1;
                    queue.push([nextI, nextJ, length + 1]);
                }
            }
        }
    }

    inBound(i:number, j: number, rowLen: number, colLen: number) {
        return i < rowLen && j < colLen && i >= 0 && j >= 0
    }
}