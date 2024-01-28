import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  instructorQuiz: [],
  state: "idle",
  error: null,
  success: null,
};

export const instructorQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INSTRUCTOR_QUIZ:
      return {
        ...state,
        instructorQuiz: action.payload.instructorQuiz,
      };

    default:
      return state;
  }
};

export default instructorQuizReducer;
