function productSum(array) {
  let handleSpecialArray = (array, depth) => {
    let bucketsum = 0;

    for (let i = 0; i < array.length; i++) {
      if (!!Array.isArray(array[i])) {
        bucketsum = bucketsum + handleSpecialArray(array[i], depth + 1);
      } else {
        bucketsum = bucketsum + array[i];
      }
    }
    return bucketsum * depth;
  };

  return handleSpecialArray(array, 1);
}
