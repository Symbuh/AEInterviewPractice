let checkNodeForCycle = (edges, start, index) => {
  let cycleFound = false;

  let inner = (indicies, idx, visited) => {
    if (indicies === []) {
      visited = {};
      return false;
    }
    if (visited[idx] === true || cycleFound === true) {
      cycleFound = true;
      return true;
    }

    if (indicies) {
      for (let i = 0; i < indicies.length; i++) {
        let temp = Object.create(visited);
        temp[idx] = true;
        inner(edges[indicies[i]], indicies[i], temp);
        if (cycleFound === true) {
          return true;
        }
      }
    }
  };
  inner(start, index, {});
  return cycleFound;
};

function cycleInGraph(edges) {
  for (let i = 0; i < edges.length; i++) {
    let check = checkNodeForCycle(edges, edges[i], i);
    if (check === true) {
      return true;
    }
  }

  return false;
}
