import * as api from "../../api";
import {
INSTITUTE_PASSWORD
} from "../../constants/actionTypes";

export const institutePassword = (instituteInfo) => async (dispatch) => {
  try {
    const { data } = await api.institutePassword(instituteInfo);
    dispatch({ type: INSTITUTE_PASSWORD, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};