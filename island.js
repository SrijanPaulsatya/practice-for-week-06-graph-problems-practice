function getNeighbors(row, col, graph) {

  // Check top

  // Check bottom

  // Check left

  // Check right

  // Return neighbors

  // Your code here
  let neighbors = [];

  if (row !== 0 && graph[row - 1][col] !== 0) {
    neighbors.push([row - 1, col]);
  }

  if (row !== graph.length - 1 && graph[row + 1][col] !== 0) {
    neighbors.push([row + 1, col]);
  }

  if (col !== 0 && graph[row][col - 1] !== 0) {
    neighbors.push([row, col - 1]);
  }

  if (col !== (graph[0].length - 1) && graph[row][col + 1] !== 0) {
    neighbors.push([row, col + 1]);
  }

  return neighbors;
    
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visitedIslands = new Set();

  // Create a stack, put the starting node in the stack
  let stack = [[row,col]];

  // Put the stringified starting node in visited
  visitedIslands.add([row,col].join(','));

  // Initialize size to 0
  let islandSize = 0;

  // While the stack is not empty,
  while (stack.length > 0) {

    // Pop the first node
    let currentIsland = stack.pop();
    let [row, col] = currentIsland;

    // DO THE THING (increment size by 1)
    islandSize += 1;

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

    let neighbors = getNeighbors(row, col, graph);

    for (let neighbor of neighbors) {
      let neighborStr = neighbor.join(",");
      if (!visitedIslands.has(neighborStr)) {
        visitedIslands.add(neighborStr);
        stack.push(neighbor);
      }
    }
  }

  // return size
  return islandSize;

  // Your code here
}

module.exports = [getNeighbors, islandSize];
