import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  instructor: [],
  updationInstructor: [],
  state: "idle",
  error: null,
  success: null,
};

export const adminInstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADMIN_INSTRUCTOR:
      return {
        ...state,
        instructor: action.payload,
      };
    case actionTypes.APPROVE_INSTRUCTOR:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.DECLINE_INSTRUCTOR:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
      case actionTypes.APPROVE_INSTRUCTOR_UPDATION:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
      case actionTypes.DECLINE_INSTRUCTOR_UPDATION:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
    case actionTypes.GET_UPDATION_INSTRUCTOR:
      return {
        ...state,
        updationInstructor: action.payload,
      };

    default:
      return state;
  }
};

export default adminInstructorReducer;
