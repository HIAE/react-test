import { FETCH_SUCCESS, FETCH_ERROR, FETCH_STARTED } from "./constants";

export const setFetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

export const setFetchError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

export const setFetchStarted = () => ({
  type: FETCH_STARTED,
});
