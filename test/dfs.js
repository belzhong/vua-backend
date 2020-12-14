const row = 3;
const col = 7;
const matrix = new vuaMatrix(row, col, 0);
const counter = new vuaVector();
counter[0] = 0;

function dfs(x, y) {
  if (x === row - 1 && y === col - 1) {
    ++counter[0];
  }
  if (x < row && y < col) {
    matrix[x][y] = 1;
    dfs(x + 1, y);
    dfs(x, y + 1);
    matrix[x][y] = 0;
  }
}

dfs = addListener(dfs);

dfs(0, 0);
