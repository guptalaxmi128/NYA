import * as api from "../../api";
import {
ADD_AASANA,
GET_AASANA,
PUBLISH_AASANA,
UNPUBLISH_AASANA,
UPDATE_AASANA,
DELETE_AASANA
} from "../../constants/actionTypes";

export const addAasana = (aasanaInfo) => async (dispatch) => {
  try {
    const { data } = await api.addAasana(aasanaInfo);
    dispatch({ type: ADD_AASANA, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAasana = () => async (dispatch) => {
  try {
    const { data } = await api.getAasana();
    dispatch({ type: GET_AASANA, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const publishAasana = (id) => async (dispatch) => {
    try {
      const { data } = await api.publishAasana(id);
      dispatch({ type: PUBLISH_AASANA, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
   
  export const unPublishAasana = (id) => async (dispatch) => {
    try {
      const { data } = await api.unPublishAasana(id);
      dispatch({ type: UNPUBLISH_AASANA, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

   export const updateAasana = (aasanaInfo) => async (dispatch) => {
    try {
    
      const response = await api.updateAasana(aasanaInfo);
      dispatch({ type: UPDATE_AASANA, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const deleteAasana = (id) => async (dispatch) => {
    try {
      const response = await api.deleteAasana(id);
      dispatch({ type: DELETE_AASANA, payload: id });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };