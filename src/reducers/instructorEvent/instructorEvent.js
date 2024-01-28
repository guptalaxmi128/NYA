import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  instructorEvent: [],
  instructorById: [],
  state: "idle",
  error: null,
  success: null,
};

export const instructorEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INSTRUCTOR_EVENT:
      return {
        ...state,
        instructorEvent: action.payload.instructorEvent,
      };
    case actionTypes.GET_INSTRUCTOR_EVENT:
      return {
        ...state,
        instructorEvent: action.payload,
      };

    case actionTypes.GET_INSTRUCTOR_EVENT_BY_ID:
      return {
        ...state,
        instructorById: action.payload,
      };
    case actionTypes.UPDATE_INSTRUCTOR_EVENT:
      return {
        ...state,
        success: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default instructorEventReducer;
