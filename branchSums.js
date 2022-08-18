class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  let output = [];

  let helper = (currNode, currTotal) => {
    currTotal = currTotal + currNode.value;

    if (currNode.right === null && currNode.left === null) {
      output.push(currTotal);
      return;
    }

    currNode.left !== null ? helper(currNode.left, currTotal) : null;
    currNode.right !== null ? helper(currNode.right, currTotal) : null;
  };

  helper(root, 0);
  return output;
}
