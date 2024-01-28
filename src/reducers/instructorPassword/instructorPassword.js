import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  instructorPassword: [],
  state: "idle",
  error: null,
  success: null,
};

export const instructorPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INSTRUCTOR_PASSWORD:
      return {
        ...state,
        instructorPassword: action.payload.instructorPassword,
      };

    default:
      return state;
  }
};

export default instructorPasswordReducer;
