function nodeDepths(root) {
  let total = 0;

  let helper = (currNode, depth) => {
    total = total + depth;
    if (currNode.left === null && currNode.right === null) {
      return;
    }

    currNode.left ? helper(currNode.left, depth + 1) : null;
    currNode.right ? helper(currNode.right, depth + 1) : null;
  };

  helper(root, 0);
  return total;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
