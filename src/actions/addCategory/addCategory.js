import * as api from "../../api";
import {
 ADD_CATEGORY,
 GET_CATEGORY,
 UNPUBLISH_CATEGORY,
 PUBLISH_CATEGORY,
 UPDATE_CATEGORY
} from "../../constants/actionTypes";

export const addCategory = (formData) => async (dispatch) => {
    try {
      const response = await api.addCategory(formData);
      dispatch({ type: ADD_CATEGORY, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  export const getCategory = () => async (dispatch) => {
    try {
      const { data } = await api.getCategory();
      dispatch({ type: GET_CATEGORY, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const publishCategory = (id) => async (dispatch) => {
    try {
      const { data } = await api.publishCategory(id);
      dispatch({ type: PUBLISH_CATEGORY, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
   
  export const unPublishCategory = (id) => async (dispatch) => {
    try {
      const { data } = await api.unPublishCategory(id);
      dispatch({ type: UNPUBLISH_CATEGORY, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

   export const updateCategory = (formData) => async (dispatch) => {
    try {
      const id = formData.get("id");
      const response = await api.updateCategory(formData, id);
      dispatch({ type: UPDATE_CATEGORY, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };