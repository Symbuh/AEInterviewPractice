class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  let validateBSTHelper = (tree, minValue, maxValue) => {
    if (!tree) {
      return true;
    }

    if (tree?.value < minValue || tree.value >= maxValue) {
      return false;
    }

    let leftIsValid = validateBSTHelper(tree.left, minValue, tree.value);
    return leftIsValid && validateBSTHelper(tree.right, tree.value, maxValue);
  };

  return validateBSTHelper(tree, -100000, 100000);
}
