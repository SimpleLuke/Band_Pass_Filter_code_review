const musicFilter = require("./musicFilter");

describe("musicFilter", () => {
  it("returns [40] when given [40]", () => {
    expect(musicFilter([40])).toEqual([40]);
  });
});
