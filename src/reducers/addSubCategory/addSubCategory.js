import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  subcategory: [],
  state: "idle",
  error: null,
  success: null,
};

export const addSubCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SUB_CATEGORY:
      return {
        ...state,
        subcategory: action.payload.subcategory,
      };
    case actionTypes.GET_SUB_CATEGORY:
      return {
        ...state,
        subcategory: action.payload,
      };
      case actionTypes.PUBLISH_SUB_CATEGORY:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
      case actionTypes.UNPUBLISH_SUB_CATEGORY:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
         case actionTypes.UPDATE_SUB_CATEGORY:
        return {
          ...state,
          success: action.payload,
          error: null,
        };

    default:
      return state;
  }
};

export default addSubCategoryReducer;
