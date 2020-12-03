import * as constants from "./constants";

describe("constants", () => {
  it("should have the action FETCH_STARTED", () => {
    expect(constants.FETCH_STARTED).toEqual("FETCH_STARTED");
  });

  it("should have the action FETCH_SUCCESS", () => {
    expect(constants.FETCH_SUCCESS).toEqual("FETCH_SUCCESS");
  });

  it("should have the action FETCH_ERROR", () => {
    expect(constants.FETCH_ERROR).toEqual("FETCH_ERROR");
  });
});
