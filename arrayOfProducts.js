function arrayOfProducts(array) {
  let output = [],
    leftProduct = 1,
    rightProduct = 1;

  if (array.length === 1) {
    return [0];
  }

  for (let i = 0; i < array.length; i++) {
    output.push(leftProduct);
    leftProduct = leftProduct * array[i];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    output[i] = output[i] * rightProduct;
    rightProduct = rightProduct * array[i];
  }

  return output;
}
