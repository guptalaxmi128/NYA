import * as api from "../../api";
import { ADD_INSTITUTE,LOGIN_INSTITUTE,GET_INSTITUTE,UPDATE_INSTITUTE } from "../../constants/actionTypes";


export const addInstitute = (institute) => async (dispatch) => {
    try {
        const { data } = await api.addInstitute(institute);
        dispatch({ type: ADD_INSTITUTE, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const loginInstitute = (instituteInfo) => async (dispatch) => {
    try {
        const { data } = await api.loginInstitute(instituteInfo);
        dispatch({ type: LOGIN_INSTITUTE, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getInstitute = () => async (dispatch) => {
    try {
      const { data } = await api.getInstitute();
      dispatch({ type: GET_INSTITUTE, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const updateInstitute = (instituteInfo) => async (dispatch) => {
    try {
      const response = await api.updateInstitute(instituteInfo);
      dispatch({ type: UPDATE_INSTITUTE, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };