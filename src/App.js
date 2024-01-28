import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditCategoryLayout from "./components/category/editCategory/EditCategoryLayout";
import SubCategoryLayout from "./components/subCategory/editSubCategory/SubCategoryLayout";
import AasanaLayout from "./components/aasana/editAasana/AasanaLayout";
import RegisterInstructor from "./components/instructor/register/RegisterInstructor";
import InstructorLayout from "./components/instructor/layout/InstructorLayout";
import LoginInstructor from "./components/instructor/login/LoginInstructor";
import RegisterInstitute from "./components/institute/register/RegisterInstitute";
import LoginInstitute from "./components/institute/login/LoginInstitute";
import UpdateEvent from "./components/instructor/updateEvent/UpdateEvent";
import UpdateInstituteEvent from "./components/institute/updateEvent/UpdateEvent";
import Institute from "./components/institute/layout/Institute";
import MyLayout from "./components/layout/MyLayout";
import "./App.css";
import Login from "./components/login/Login";
import BookedEvent from "./components/adminEvent/BookedEvent";





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register-instructor" element={<RegisterInstructor />} />
          <Route path="login-instructor" element={<LoginInstructor />} />
          <Route path="/instructor/*" element={<InstructorLayout />} />
          <Route path="register-institute" element={<RegisterInstitute />} />
          <Route path="login-institute" element={<LoginInstitute />} />
          <Route path="/institute/*" element={<Institute />} />
          <Route path="/admin/*" element={<MyLayout />} />
          <Route
            path="/admin/edit-category/:id"
            element={<EditCategoryLayout />}
          />
          <Route
            path="/admin/edit-subcategory/:id"
            element={<SubCategoryLayout />}
          />
          <Route path="/admin/edit-aasana/:id" element={<AasanaLayout />} />
          <Route
            path="/instructor/edit-event/:id"
            element={<UpdateEvent />}
          />
           <Route
            path="/institute/edit-event/:id"
            element={<UpdateInstituteEvent />}
          />
           <Route
            path="/booked-event/:id"
            element={<BookedEvent />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
