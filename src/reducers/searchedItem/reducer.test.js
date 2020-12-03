import { SET_SEARCH_ITEM_NAME } from "./constants";
import searchedItemReducer, { INITIAL_STATE } from "./reducer";

describe("searchedItem()", () => {
  describe("when the action.type is not included in the reducer actionTypes", () => {
    it("should return the initial state", () => {
      const action = { type: undefined };

      expect(searchedItemReducer(undefined, action)).toEqual(INITIAL_STATE);
    });
  });

  describe(`when action.type is equal to SET_SEARCH_ITEM_NAME`, () => {
    describe("and action.payload is defined", () => {
      it("should return the state with name equal to action.payload", () => {
        const action = {
          type: SET_SEARCH_ITEM_NAME,
          payload: { name: "APPL" },
        };

        const reducer = searchedItemReducer(undefined, action);

        expect(reducer).toHaveProperty("name.name", "APPL");
      });
    });
  });
});
