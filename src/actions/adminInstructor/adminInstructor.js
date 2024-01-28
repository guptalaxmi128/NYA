import * as api from "../../api";
import {
GET_ADMIN_INSTRUCTOR,
APPROVE_INSTRUCTOR,
DECLINE_INSTRUCTOR,
GET_UPDATION_INSTRUCTOR,
APPROVE_INSTRUCTOR_UPDATION,
DECLINE_INSTRUCTOR_UPDATION,
} from "../../constants/actionTypes";

export const getAdminInstructor = () => async (dispatch) => {
  try {
    const { data } = await api.getAdminInstructor();
    dispatch({ type: GET_ADMIN_INSTRUCTOR, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const approveInstructor = (id) => async (dispatch) => {
    try {
      const { data } = await api.approveInstructor(id);
      dispatch({ type: APPROVE_INSTRUCTOR, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const declineInstructor = (id) => async (dispatch) => {
    try {
      const { data } = await api.declineInstructor(id);
      dispatch({ type: DECLINE_INSTRUCTOR, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  
export const getUpdationInstructor = () => async (dispatch) => {
  try {
    const { data } = await api.getUpdationInstructor();
    dispatch({ type: GET_UPDATION_INSTRUCTOR, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
  

export const approveInstructorUpdation = (id) => async (dispatch) => {
  try {
    const { data } = await api.approveInstructorUpdation(id);
    dispatch({ type: APPROVE_INSTRUCTOR_UPDATION, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const declineInstructorUpdation = (id) => async (dispatch) => {
  try {
    const { data } = await api.declineInstructorUpdation(id);
    dispatch({ type: DECLINE_INSTRUCTOR_UPDATION, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};