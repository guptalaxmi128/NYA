import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  institutePassword: [],
  state: "idle",
  error: null,
  success: null,
};

export const institutePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INSTITUTE_PASSWORD:
      return {
        ...state,
        institutePassword: action.payload.institutePassword,
      };

    default:
      return state;
  }
};

export default institutePasswordReducer;
