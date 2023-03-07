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
});
