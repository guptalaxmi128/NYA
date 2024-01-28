import * as api from "../../api";
import {
INSTRUCTOR_PASSWORD
} from "../../constants/actionTypes";

export const instructorPassword = (instructorInfo) => async (dispatch) => {
  try {
    const { data } = await api.instructorPassword(instructorInfo);
    dispatch({ type: INSTRUCTOR_PASSWORD, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};