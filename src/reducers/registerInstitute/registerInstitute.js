import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  institute: [],
  institutelogin: null,
  isAuthenticated: false,
  success: null,
  state: "idle",
  error: null,
};

// Retrieve the admin profile from localStorage
const storedProfile = localStorage.getItem("profile");
const initialProfile = storedProfile ? JSON.parse(storedProfile) : null;

const addInstituteReducer = (
  state = { ...initialState, institutelogin: initialProfile },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_INSTITUTE:
      // Update the stored profile in localStorage when admin is added
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        institute: action.payload.institute,
      };
    case actionTypes.LOGIN_INSTITUTE:
      // Update the stored profile in localStorage when admin logs in
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        institutelogin: action.payload,
        isAuthenticated: true,
      };
    case actionTypes.GET_INSTITUTE:
      return {
        ...state,
        institute: action.payload.institute,
      };
    case actionTypes.UPDATE_INSTITUTE:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    // case actionTypes.LOGOUT_INSTITUTE:
    //   localStorage.removeItem("profile");
    //   return {
    //     ...state,
    //     institutelogin: null,
    //     isAuthenticated: false,
    //   };

    default:
      return state;
  }
};

export default addInstituteReducer;
