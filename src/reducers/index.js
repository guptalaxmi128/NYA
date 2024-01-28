import { combineReducers } from "redux";
import addAdmin from "./addAdmin/addAdmin";
import addCategory from "./addCategory/addCategory";
import addSubCategory from "./addSubCategory/addSubCategory";
import addAasana from "./addAasana/addAasana";
import user from "./users/users";
import addInstructor from "./registerInstructor/registerInstructor";
import adminInstructor from "./adminInstructor/adminInstructor";
import instructorPassword from "./instructorPassword/instructorPassword";
import addInstitute from "./registerInstitute/registerInstitute";
import adminInstitute from "./adminInstitute/adminInstitute";
import institutePassword from "./institutePassword/institutePassword";
import instructorEvent from "./instructorEvent/instructorEvent";
import instituteEvent from "./instituteEvent/instituteEvent";
import adminEvent from "./adminEvent/adminEvent";
import instructorQuiz from "./instructorQuiz/instructorQuiz";
import adminQuiz from "./adminQuiz/adminQuiz";

export const reducers = combineReducers({
  addAdmin,
  addCategory,
  addSubCategory,
  addAasana,
  user,
  addInstructor,
  adminInstructor,
  instructorPassword,
  addInstitute,
  adminInstitute,
  institutePassword,
  instructorEvent,
  instituteEvent,
  adminEvent,
  instructorQuiz,
  adminQuiz

});
