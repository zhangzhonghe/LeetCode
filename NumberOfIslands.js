/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const tag = {};
  const rows = grid.length,
    columns = grid[0].length;
  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1") {
        result++;
        grid[i][j] = "0";
        bfs(grid, i, j, tag);
      }
    }
  }

  return result;
};

function bfs(grid, i, j, tag) {
  const rows = grid.length;
  const columns = grid[0].length;
  const queue = [[i, j]];
  while (queue.length) {
    [i, j] = queue.shift();
    // right
    if (j + 1 < columns && grid[i][j + 1] === "1") {
      queue.push([i, j + 1]);
      grid[i][j + 1] = "0";
    }
    // bottom
    if (i + 1 < rows && grid[i + 1][j] === "1") {
      queue.push([i + 1, j]);
      grid[i + 1][j] = "0";
    }
    // top
    if (i - 1 >= 0 && grid[i - 1][j] === "1") {
      queue.push([i - 1, j]);
      grid[i - 1][j] = "0";
    }
    // left
    if (j - 1 >= 0 && grid[i][j - 1] === "1") {
      queue.push([i, j - 1]);
      grid[i][j - 1] = "0";
    }
  }
}
