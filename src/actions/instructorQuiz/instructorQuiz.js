import * as api from "../../api";
import { ADD_INSTRUCTOR_QUIZ } from "../../constants/actionTypes";

export const addInstructorQuiz = (formData) => async (dispatch) => {
  try {
    const response = await api.addInstructorQuiz(formData);
    dispatch({ type: ADD_INSTRUCTOR_QUIZ, payload: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
