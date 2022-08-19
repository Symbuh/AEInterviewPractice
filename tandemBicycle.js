function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds = redShirtSpeeds.sort((a, b) => a - b);

  fastest
    ? (blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => b - a))
    : (blueShirtSpeeds = blueShirtSpeeds.sort((a, b) => a - b));

  let total = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    total = total + Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  return total;
}
