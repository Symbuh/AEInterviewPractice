class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let node = this;
    // Traverse to the bottom of the tree
    while (!!node) {
      if (value < node.value) {
        if (!node.left) {
          node.left = new BST(value, null, null);
          return;
        } else {
          node = node.left;
        }
      } else {
        if (!node.right) {
          node.right = new BST(value, null, null);
          return;
        } else {
          node = node.right;
        }
      }
    }

    return this;
  }

  contains(value) {
    let head = this;
    let output = false;

    let containsHelper = (node) => {
      if (node.value === value) {
        output = true;
        return true;
      } else {
        if (node.right !== null && value > node.value) {
          containsHelper(node.right);
        } else if (node.left !== null) {
          containsHelper(node.left);
        }
      }
    };

    containsHelper(head);
    return output;
  }

  remove(value) {
    let node = this;

    let findSwapNode = (node) => {
      // We know node.right is not null, or we would never hit this function
      let pointer = node.right,
        output,
        prev = node,
        left = false;

      while (!!pointer?.left) {
        prev = pointer;
        pointer = pointer.left;
        left = true;
      }

      output = pointer;
      pointer = null;

      left ? (prev.left = null) : (prev.right = null);
      return output;
    };

    let handleSwapCase = (node, prev) => {
      if (node.left === null && node.right !== null) {
        if (prev) {
          if (node === prev.left) {
            prev.left = node.right;
          } else {
            prev.right = node.right;
          }
        } else {
          node.value = node.right.value;
          node.right = node.right?.right;
          node.left = node.right?.left;
        }

        return;
      } else if (node.right === null && node.left !== null) {
        if (prev) {
          if (node === prev.left) {
            prev.left = node.left;
          } else {
            prev.right = node.left;
          }
        } else {
          node.value = node.left.value;
          node.right = node.left.right;
          node.left = node.left.left;
        }

        return;
      } else if (node.right === null && node.left === null) {
        if (prev?.right === node) {
          if (prev) {
            prev.right = null;
          }
          node = null;
        } else {
          if (prev) {
            prev.left = null;
          }
          node = null;
        }
        return;
      } else if (node?.right !== null && node?.left !== null) {
        let swapNode = findSwapNode(node);
        node.value = swapNode.value;
        return;
      }
    };

    let prev;

    while (!!node) {
      if (node === null) {
        return;
      }

      if (node.value === value) {
        handleSwapCase(node, prev);
        return;
      }

      prev = node;
      if (value > node.value) {
        if (node.right === null) {
          return;
        } else {
          node = node.right;
        }
      } else {
        if (node.left === null) {
          return;
        } else {
          node = node.left;
        }
      }
    }
  }
}
