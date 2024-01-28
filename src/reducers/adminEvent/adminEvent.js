import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  event: [],
  updationEvent: [],
  bookByUser:[],
  state: "idle",
  error: null,
  success: null,
};

export const adminEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADMIN_EVENT:
      return {
        ...state,
        event: action.payload,
      };
    case actionTypes.APPROVE_EVENT:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.DECLINE_EVENT:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.APPROVE_EVENT_UPDATION:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.DECLINE_EVENT_UPDATION:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.GET_UPDATION_EVENT:
      return {
        ...state,
        updationEvent: action.payload,
      };
      case actionTypes.GET_EVENT_BOOK_BY_USER:
        return {
          ...state,
          bookByUser: action.payload,
        };

    default:
      return state;
  }
};

export default adminEventReducer;
