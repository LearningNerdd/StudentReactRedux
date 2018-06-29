import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
} from "./consts"

const initialState = {
  fetched: false,
  fetching: false,
  error: false,
  data: {},
}

const students = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_DATA_SUCCESS:
      return {
        ...initialState,
        fetched: true,
        data: action.data,
      }
    case FETCH_DATA_ERROR:
      return {
        ...initialState,
        error: action.error,
      }
    default:
      return state
  }
}

export default students
