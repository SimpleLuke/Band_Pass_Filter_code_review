const musicFilter = require("./musicFilter");

describe("musicFilter", () => {
  it("returns [40] when given [40]", () => {
    expect(musicFilter([40])).toEqual([40]);
  });

  it("returns [1000] when given [1000]", () => {
    expect(musicFilter([1000])).toEqual([1000]);
  });

  it("returns [40] when given [20]", () => {
    expect(musicFilter([20])).toEqual([40]);
  });

  it("returns [50] when given [50]", () => {
    expect(musicFilter([50])).toEqual([50]);
  });

  it("returns [1000] when given [1300]", () => {
    expect(musicFilter([1300])).toEqual([1000]);
  });

  it("returns [50] when given [40] and cutomer lower thershold is 50", () => {
    expect(musicFilter([40], 50, 100)).toEqual([50]);
  });

  it("returns [100] when given [200] and cutomer high thershold is 100", () => {
    expect(musicFilter([200], 50, 100)).toEqual([100]);
  });

  it("returns [40,800] when given [40,800]", () => {
    expect(musicFilter([40, 800])).toEqual([40, 800]);
  });

  it("returns [40,1000] when given [40,1200]", () => {
    expect(musicFilter([40, 1200])).toEqual([40, 1000]);
  });

  it("returns [40,1000] when given [20,1000]", () => {
    expect(musicFilter([20, 1000])).toEqual([40, 1000]);
  });
});
