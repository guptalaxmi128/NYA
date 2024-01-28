import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  quiz: [],
  state: "idle",
  error: null,
  success: null,
};

export const adminQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADMIN_QUIZ:
      return {
        ...state,
        quiz: action.payload,
      };
    case actionTypes.APPROVE_QUIZ:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.DECLINE_QUIZ:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
  

    default:
      return state;
  }
};

export default adminQuizReducer;
