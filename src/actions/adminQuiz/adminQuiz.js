import * as api from "../../api";
import { GET_ADMIN_QUIZ,APPROVE_QUIZ,DECLINE_QUIZ} from "../../constants/actionTypes";

export const getAdminQuiz = () => async (dispatch) => {
  try {
    const { data } = await api.getAdminQuiz();
    dispatch({ type: GET_ADMIN_QUIZ, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const approveQuiz = (id) => async (dispatch) => {
    try {
      const { data } = await api.approveQuiz(id);
      dispatch({ type: APPROVE_QUIZ, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const declineQuiz = (id) => async (dispatch) => {
    try {
      const { data } = await api.declineQuiz(id);
      dispatch({ type: DECLINE_QUIZ, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };