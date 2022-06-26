export class DFS {
    numberOfIslands(grid: string[][]):number {
        let islands = 0;
        for(let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[row].length; col++) {
                if (grid[row][col] ===  "1") {
                    islands += 1;
                    this.dfs(grid, row, col);
                }
            }
        }
        return islands;
    }

    dfs(grid: string[][], row:number, col:number) {
        if (grid[row][col] === "0") return;

        grid[row][col] = "0"
        if (row > 0) this.dfs(grid, row - 1, col);
        if (row < grid.length -1) this.dfs(grid, row + 1, col);
        if (col > 0) this.dfs(grid, row, col - 1);
        if (col < grid[row].length -1) this.dfs(grid, row, col + 1);
        
    }
}