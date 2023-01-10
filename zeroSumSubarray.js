// The idea here is to store the sum of the array from 0 to N and the index of N in an object
// If we ever get a duplicate sum we know there is an existing subarray which adds to 0.
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
