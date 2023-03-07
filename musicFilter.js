const musicFilter = (array) => {
  if (array[0] < 40) {
    return [40];
  }
  return array;
};

module.exports = musicFilter;
