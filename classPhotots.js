function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights = redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights = blueShirtHeights.sort((a, b) => a - b);

  let redShirtsFirst = redShirtHeights[0] < blueShirtHeights[0] ? true : false;

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[i] > blueShirtHeights[i] && !!redShirtsFirst) {
      return false;
    }

    if (redShirtHeights[i] < blueShirtHeights[i] && !redShirtsFirst) {
      return false;
    }

    if (redShirtHeights[i] === blueShirtHeights[i]) {
      return false;
    }
  }
  return true;
}
