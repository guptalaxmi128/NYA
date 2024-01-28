import * as api from "../../api";
import {
 ADD_SUB_CATEGORY,
 GET_SUB_CATEGORY,
 UNPUBLISH_SUB_CATEGORY,
 PUBLISH_SUB_CATEGORY,
 UPDATE_SUB_CATEGORY
} from "../../constants/actionTypes";

export const addSubCategory = (formData) => async (dispatch) => {
    try {
      const response = await api.addSubCategory(formData);
      dispatch({ type: ADD_SUB_CATEGORY, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const getSubCategory = () => async (dispatch) => {
    try {
      const { data } = await api.getSubCategory();
      dispatch({ type: GET_SUB_CATEGORY, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const publishSubCategory = (id) => async (dispatch) => {
    try {
      const { data } = await api.publishSubCategory(id);
      dispatch({ type: PUBLISH_SUB_CATEGORY, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
   
  export const unPublishSubCategory = (id) => async (dispatch) => {
    try {
      const { data } = await api.unPublishSubCategory(id);
      dispatch({ type: UNPUBLISH_SUB_CATEGORY, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const updateSubCategory = (formData) => async (dispatch) => {
    try {
      const id = formData.get("id");
      const response = await api.updateSubCategory(formData, id);
      dispatch({ type: UPDATE_SUB_CATEGORY, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };