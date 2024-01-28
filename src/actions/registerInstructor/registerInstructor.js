import * as api from "../../api";
import { ADD_INSTRUCTOR,LOGIN_INSTRUCTOR,GET_INSTRUCTOR,UPDATE_INSTRUCTOR } from "../../constants/actionTypes";


export const addInstructor = (instructor) => async (dispatch) => {
    try {
        const { data } = await api.addInstructor(instructor);
        dispatch({ type: ADD_INSTRUCTOR, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const loginInstructor = (instructorInfo) => async (dispatch) => {
    try {
        const { data } = await api.loginInstructor(instructorInfo);
        dispatch({ type: LOGIN_INSTRUCTOR, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const getInstructor = () => async (dispatch) => {
    try {
      const { data } = await api.getInstructor();
      dispatch({ type: GET_INSTRUCTOR, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const updateInstructor = (instructorInfo) => async (dispatch) => {
    try {
    
      const response = await api.updateInstructor(instructorInfo);
      dispatch({ type: UPDATE_INSTRUCTOR, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };