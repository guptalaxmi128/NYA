import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  instituteEvent: [],
  instituteById: [],
  state: "idle",
  error: null,
  success: null,
};

export const instituteEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INSTITUTE_EVENT:
      return {
        ...state,
        instituteEvent: action.payload.instituteEvent,
      };
    case actionTypes.GET_INSTITUTE_EVENT:
      return {
        ...state,
        instituteEvent: action.payload,
      };
    case actionTypes.GET_INSTITUTE_EVENT_BY_ID:
      return {
        ...state,
        instituteById: action.payload,
      };
    case actionTypes.UPDATE_INSTITUTE_EVENT:
      return {
        ...state,
        success: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default instituteEventReducer;
