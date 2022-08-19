function minimumWaitingTime(queries) {
  queries = queries.sort((a, b) => a - b);

  let total = 0;
  let currWaiting = 0;
  for (let i = 0; i < queries.length - 1; i++) {
    currWaiting = currWaiting + queries[i];
    total = total + currWaiting;
  }

  return total;
}
