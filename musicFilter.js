const musicFilter = (array, low = 40, high = 1000) => {
  if (array[0] < low) {
    return [low];
  } else if (array[0] > high) {
    return [high];
  }
  return array;
};

module.exports = musicFilter;
