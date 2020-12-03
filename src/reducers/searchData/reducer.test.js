import { FETCH_ERROR, FETCH_STARTED, FETCH_SUCCESS } from "./constants";
import searchedDataReducer, { INITIAL_STATE } from "./reducer";

describe("searchedItem()", () => {
  describe("when the action.type is not included in the reducer actionTypes", () => {
    it("should return the initial state", () => {
      const action = { type: undefined };

      expect(searchedDataReducer(undefined, action)).toEqual(INITIAL_STATE);
    });
  });

  describe(`when action.type is equal to FETCH_STARTED`, () => {
    it("should return the state with loading equal to true", () => {
      const action = {
        type: FETCH_STARTED,
        payload: false,
      };

      const reducer = searchedDataReducer(undefined, action);

      expect(reducer).toEqual({ data: null, loading: true, error: false });
    });
  });

  describe(`when action.type is equal to FETCH_SUCCESS`, () => {
    describe("and action.payload is defined", () => {
      it("should return the state as expected", () => {
        const data = { name: "APPL", value: 123.456 };

        const action = {
          type: FETCH_SUCCESS,
          payload: data,
        };

        const reducer = searchedDataReducer(undefined, action);

        expect(reducer).toEqual({
          data,
          error: null,
          loading: false,
        });
      });
    });
  });

  describe(`when action.type is equal to FETCH_ERROR`, () => {
    describe("and action.payload is defined", () => {
      it("should return the state as expected", () => {
        const error = new Error("erro por aqui");

        const action = {
          type: FETCH_ERROR,
          payload: error,
        };

        const reducer = searchedDataReducer(undefined, action);

        expect(reducer).toEqual({
          data: null,
          error: error,
          loading: false,
        });
      });
    });
  });
});
