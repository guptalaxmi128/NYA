import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  instructor: [],
  instructorlogin: null,
  isAuthenticated: false,
  success: null,
  state: "idle",
  error: null,
};

// Retrieve the admin profile from localStorage
const storedProfile = localStorage.getItem("profile");
const initialProfile = storedProfile ? JSON.parse(storedProfile) : null;

const addInstructorReducer = (
  state = { ...initialState, instructorlogin: initialProfile },
  action
) => {
  switch (action.type) {
    case actionTypes.ADD_INSTRUCTOR:
      // Update the stored profile in localStorage when admin is added
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        instructor: action.payload.instructor,
      };
    case actionTypes.LOGIN_INSTRUCTOR:
      // Update the stored profile in localStorage when admin logs in
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        instructorlogin: action.payload,
        isAuthenticated: true,
      };
    case actionTypes.GET_INSTRUCTOR:
      return {
        ...state,
        instructor: action.payload.instructor,
      };
    case actionTypes.UPDATE_INSTRUCTOR:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case actionTypes.LOGOUT_ADMIN:
      localStorage.removeItem("profile");
      return {
        ...state,
        instructorlogin: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default addInstructorReducer;
