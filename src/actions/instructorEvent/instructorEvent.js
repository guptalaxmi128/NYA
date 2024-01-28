import * as api from "../../api";
import {
ADD_INSTRUCTOR_EVENT,
GET_INSTRUCTOR_EVENT,
GET_INSTRUCTOR_EVENT_BY_ID,
UPDATE_INSTRUCTOR_EVENT
} from "../../constants/actionTypes";

export const addInstructorEvent = (formData) => async (dispatch) => {
    try {
      const response = await api.addInstructorEvent(formData);
      dispatch({ type: ADD_INSTRUCTOR_EVENT, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getInstructorEvent = () => async (dispatch) => {
    try {
      const { data } = await api.getInstructorEvent();
      dispatch({ type: GET_INSTRUCTOR_EVENT, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getInstructorEventById = (id) => async (dispatch) => {
    try {
      const { data } = await api.getInstructorEventById(id);
      dispatch({ type: GET_INSTRUCTOR_EVENT_BY_ID, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const updateInstructorEvent = (formData) => async (dispatch) => {
    try {
    
      const response = await api.updateInstructorEvent(formData);
      dispatch({ type: UPDATE_INSTRUCTOR_EVENT, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };