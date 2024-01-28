import * as api from "../../api";
import {
ADD_INSTITUTE_EVENT,
GET_INSTITUTE_EVENT,
GET_INSTITUTE_EVENT_BY_ID,
UPDATE_INSTITUTE_EVENT
} from "../../constants/actionTypes";

export const addInstituteEvent = (formData) => async (dispatch) => {
    try {
      const response = await api.addInstituteEvent(formData);
      dispatch({ type: ADD_INSTITUTE_EVENT, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getInstituteEvent = () => async (dispatch) => {
    try {
      const { data } = await api.getInstituteEvent();
      dispatch({ type: GET_INSTITUTE_EVENT, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getInstituteEventById = (id) => async (dispatch) => {
    try {
      const { data } = await api.getInstituteEventById(id);
      dispatch({ type: GET_INSTITUTE_EVENT_BY_ID, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const updateInstituteEvent = (formData) => async (dispatch) => {
    try {
    
      const response = await api.updateInstituteEvent(formData);
      dispatch({ type: UPDATE_INSTITUTE_EVENT, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };