function getNthFib(n) {
  let fibs = [0, 1];
  for (let i = 2; i < n; i++) {
    let nextFib = fibs[i - 1] + fibs[i - 2];
    fibs.push(nextFib);
  }
  return fibs[n - 1];
}
