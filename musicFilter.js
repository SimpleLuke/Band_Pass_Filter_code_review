const musicFilter = (array, low = 40, high = 1000) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < low) {
      array[i] = low;
    } else if (array[i] > high) {
      array[i] = high;
    }
  }
  return array;
};

module.exports = musicFilter;
