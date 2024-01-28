
import * as api from "../../api";
import { ADD_ADMIN, LOGIN_ADMIN } from "../../constants/actionTypes";


export const addAdmin = (admin) => async (dispatch) => {
    try {
        const { data } = await api.addAdmin(admin);
        dispatch({ type: ADD_ADMIN, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const loginAdmin = (userInfo) => async (dispatch) => {
    try {
        const { data } = await api.loginAdmin(userInfo);
        dispatch({ type: LOGIN_ADMIN, payload: data });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};