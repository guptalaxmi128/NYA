import * as api from "../../api";
import {
GET_ADMIN_INSTITUTE,
APPROVE_INSTITUTE,
DECLINE_INSTITUTE,
GET_UPDATION_INSTITUTE,
APPROVE_INSTITUTE_UPDATION,
DECLINE_INSTITUTE_UPDATION
} from "../../constants/actionTypes";

export const getAdminInstitute = () => async (dispatch) => {
  try {
    const { data } = await api.getAdminInstitute();
    dispatch({ type: GET_ADMIN_INSTITUTE, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const approveInstitute = (id) => async (dispatch) => {
    try {
      const { data } = await api.approveInstitute(id);
      dispatch({ type: APPROVE_INSTITUTE, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const declineInstitute = (id) => async (dispatch) => {
    try {
      const { data } = await api.declineInstitute(id);
      dispatch({ type: DECLINE_INSTITUTE, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getUpdationInstitute = () => async (dispatch) => {
    try {
      const { data } = await api.getUpdationInstitute();
      dispatch({ type: GET_UPDATION_INSTITUTE, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
    
  
  export const approveInstituteUpdation = (id) => async (dispatch) => {
    try {
      const { data } = await api.approveInstituteUpdation(id);
      dispatch({ type: APPROVE_INSTITUTE_UPDATION, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const declineInstituteUpdation = (id) => async (dispatch) => {
    try {
      const { data } = await api.declineInstituteUpdation(id);
      dispatch({ type: DECLINE_INSTITUTE_UPDATION, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
