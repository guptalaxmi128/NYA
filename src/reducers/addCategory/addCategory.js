import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  category: [],
  state: "idle",
  error: null,
  success: null,
};

export const addCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
      };
    case actionTypes.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
      case actionTypes.PUBLISH_CATEGORY:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
      case actionTypes.UNPUBLISH_CATEGORY:
        return {
          ...state,
          success: action.payload,
          error: null,
        };
         case actionTypes.UPDATE_CATEGORY:
        return {
          ...state,
          success: action.payload,
          error: null,
        };

    default:
      return state;
  }
};

export default addCategoryReducer;
