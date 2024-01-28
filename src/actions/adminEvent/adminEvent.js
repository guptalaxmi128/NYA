import * as api from "../../api";
import {
  GET_ADMIN_EVENT,
  APPROVE_EVENT,
  DECLINE_EVENT,
  GET_UPDATION_EVENT,
  APPROVE_EVENT_UPDATION,
  DECLINE_EVENT_UPDATION,
  GET_EVENT_BOOK_BY_USER,
} from "../../constants/actionTypes";

export const getAdminEvent = () => async (dispatch) => {
  try {
    const { data } = await api.getAdminEvent();
    dispatch({ type: GET_ADMIN_EVENT, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const approveEvent = (id) => async (dispatch) => {
  try {
    const { data } = await api.approveEvent(id);
    dispatch({ type: APPROVE_EVENT, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const declineEvent = (id) => async (dispatch) => {
  try {
    const { data } = await api.declineEvent(id);
    dispatch({ type: DECLINE_EVENT, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUpdationEvent = () => async (dispatch) => {
  try {
    const { data } = await api.getUpdationEvent();
    dispatch({ type: GET_UPDATION_EVENT, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const approveEventUpdation = (id) => async (dispatch) => {
  try {
    const { data } = await api.approveEventUpdation(id);
    dispatch({ type: APPROVE_EVENT_UPDATION, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const declineEventUpdation = (id) => async (dispatch) => {
  try {
    const { data } = await api.declineEventUpdation(id);
    dispatch({ type: DECLINE_EVENT_UPDATION, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getEventBookByUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getEventBookByUser(id);
    dispatch({ type: GET_EVENT_BOOK_BY_USER, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
