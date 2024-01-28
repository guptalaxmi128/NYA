import * as api from "../../api";
import {
GET_USERS
} from "../../constants/actionTypes";



export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    dispatch({ type: GET_USERS, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};