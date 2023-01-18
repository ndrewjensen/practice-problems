/**
 * https://leetcode.com/problems/number-of-islands/
 */

function numIslands(grid: string[][]): number {
	if (grid.length === 0) return 0;
	let islandCount: number = 0;
	const height = grid.length;
	const width = grid[0].length;

	function followIsland(i: number, j: number): void {
		grid[i][j] = "*";
		if (i + 1 < height && grid[i + 1][j] === "1") followIsland(i + 1, j);
		if (i - 1 >= 0 && grid[i - 1][j] === "1") followIsland(i - 1, j);
		if (j + 1 < width && grid[i][j + 1] === "1") followIsland(i, j + 1);
		if (j - 1 >= 0 && grid[i][j - 1] === "1") followIsland(i, j - 1);
		return;
	}

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			if (grid[i][j] === "1") {
				islandCount++;
        followIsland(i,j)
			}
		}
	}
	return islandCount;
}