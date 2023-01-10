function zeroSumSubarray(nums) {
  let leftSideSum = {},
    firstPassTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    firstPassTotal = firstPassTotal + nums[i];
    if (leftSideSum[firstPassTotal] === undefined) {
      leftSideSum[firstPassTotal] = [i];
    } else {
      return true;
    }
  }

  if (firstPassTotal === 0 && nums.length !== 0) {
    return true;
  }

  return false;
}
