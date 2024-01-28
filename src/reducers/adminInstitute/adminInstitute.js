import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  institute: [],
  updationInstitute: [],
  state: "idle",
  error: null,
  success: null,
};

export const adminInstituteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADMIN_INSTITUTE:
      return {
        ...state,
        institute: action.payload,
      };
    case actionTypes.APPROVE_INSTITUTE:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.DECLINE_INSTITUTE:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
      case actionTypes.APPROVE_INSTITUTE_UPDATION:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
      case actionTypes.DECLINE_INSTITUTE_UPDATION:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
    case actionTypes.GET_UPDATION_INSTITUTE:
      return {
        ...state,
        updationInstitute: action.payload,
      };

    default:
      return state;
  }
};

export default adminInstituteReducer;
