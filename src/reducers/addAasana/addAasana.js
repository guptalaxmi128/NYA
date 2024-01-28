import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  aasana: [],
  state: "idle",
  error: null,
  success: null,
};

export const addAasanaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_AASANA:
      return {
        ...state,
        aasana: action.payload.aasana,
      };
    case actionTypes.GET_AASANA:
      return {
        ...state,
        aasana: action.payload,
      };
    case actionTypes.PUBLISH_AASANA:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.UNPUBLISH_AASANA:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.UPDATE_AASANA:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.DELETE_AASANA:
      const aasanaIdToDelete = action.payload;
      console.log(action.payload)
      return {
        ...state,
        aasana: state.aasana.data.filter((aasana) => aasana.id !== aasanaIdToDelete),
      };

    default:
      return state;
  }
};

export default addAasanaReducer;
