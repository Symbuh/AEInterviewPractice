function findClosestValueInBst(tree, target) {
  if (tree.left === null && tree.right === null) {
    return tree.value;
  }

  let currentWinner,
    smallestDiff = 100000;

  let running = true,
    current = tree;

  while (!!running) {
    let diff = Math.abs(Math.abs(target) - Math.abs(current.value));

    if (diff === 0) {
      currentWinner = current.value;
      running = false;
      break;
    }
    if (diff < smallestDiff) {
      currentWinner = current.value;
      smallestDiff = diff;
    }

    if (target > current.value) {
      current.right === null ? (running = false) : (current = current.right);
    } else {
      current.left === null ? (running = false) : (current = current.left);
    }
  }
  return currentWinner;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
