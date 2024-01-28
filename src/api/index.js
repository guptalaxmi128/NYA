import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

api.interceptors.request.use(
  (req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).authToken
      }`;
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const addAdmin = (userInfo) => api.post(`api/admin/register`, userInfo);
export const loginAdmin = (userInfo) => api.post(`api/admin/login`, userInfo);

export const addCategory = (formData) => {
  return api.post(`api/admin/createCategory`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getCategory = () => api.get(`api/admin/getCategory`);

export const addSubCategory = (formData) => {
  return api.post(`api/admin/createSubCategory`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getSubCategory = () => api.get(`api/admin/getSubCategory`);

export const addAasana = (aasanaInfo) => {
  return api.post(`api/admin/createAasana`, aasanaInfo);
};
export const getAasana = () => api.get(`api/admin/getAasana`);

export const publishCategory = (id) => {
  return api.put(`api/admin/publicCategory/${id}`);
};
export const updateCategory = (formData, id) => {
  return api.put(`api/admin/updateCategory/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const unPublishCategory = (id) => {
  return api.put(`api/admin/unPublicCategory/${id}`);
};

export const publishSubCategory = (id) => {
  return api.put(`api/admin/publicSubCategory/${id}`);
};
export const updateSubCategory = (formData, id) => {
  return api.put(`api/admin/updateSubCategory/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const unPublishSubCategory = (id) => {
  return api.put(`api/admin/unPublicSubCategory/${id}`);
};

export const publishAasana = (id) => {
  return api.put(`api/admin/publicAasana/${id}`);
};
export const updateAasana = ({ id, ...aasanaInfo }) => {
  return api.put(`api/admin/updateAasana/${id}`, aasanaInfo);
};

export const unPublishAasana = (id) => {
  return api.put(`api/admin/unPublicAasana/${id}`);
};

export const deleteAasana = (id) =>
  api.delete(`api/admin/hardDeleteAasana/${id}`);
export const getUser = () => api.get(`api/admin/users`);

export const addInstructor = (instructor) =>
  api.post(`api/instructor/register`, instructor);
export const loginInstructor = (instructor) =>
  api.post(`api/instructor/login`, instructor);
  export const instructorPassword = (instructor) =>
  api.post(`api/instructor/changePassword`, instructor);
export const getAdminInstructor = () => api.get(`api/admin/instructors`);
export const approveInstructor = (id) => {
  return api.put(`api/admin/approveInstructorRegistration/${id}`);
};
export const declineInstructor = (id) => {
  return api.put(`api/admin/disApproveInstructorRegistration/${id}`);
};

export const getUpdationInstructor = () => api.get(`api/admin/instructorsUpdation`);
export const approveInstructorUpdation = (id) => {
  return api.put(`api/admin/approveInstructorUpdation/${id}`);
};
export const declineInstructorUpdation = (id) => {
  return api.put(`api/admin/disApproveInstructorUpdation/${id}`);
};

export const getInstructor = () => api.get(`api/instructor/instructor`);
export const updateInstructor = (instructorInfo) => {
  return api.put(`api/instructor/updateInstructor`,instructorInfo);
};

export const addInstitute = (institute) =>
  api.post(`api/institute/register`, institute);
  export const loginInstitute = (institute) =>
  api.post(`api/institute/login`, institute);
  export const getInstitute = () => api.get(`api/institute/institute`);
export const updateInstitute = (instituteInfo) => {
  return api.put(`api/institute/updateInstitute`,instituteInfo);
};

  export const getAdminInstitute = () => api.get(`api/admin/institutes`);
  export const approveInstitute = (id) => {
    return api.put(`api/admin/approveInstituteRegistration/${id}`);
  };
  export const declineInstitute = (id) => {
    return api.put(`api/admin/disApproveInstituteRegistration/${id}`);
  };

  export const getUpdationInstitute = () => api.get(`api/admin/institutesUpdation`);
export const approveInstituteUpdation = (id) => {
  return api.put(`api/admin/approveInstituteUpdate/${id}`);
};
export const declineInstituteUpdation = (id) => {
  return api.put(`api/admin/disApproveInstituteUpdate/${id}`);
};

export const institutePassword = (institute) =>
api.post(`api/institute/changePassword`, institute);

export const addInstructorEvent = (formData) => {
  return api.post(`api/instructor/createEvent`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getInstructorEvent = () => api.get(`api/instructor/events`);

export const addInstituteEvent = (formData) => {
  return api.post(`api/institute/createEvent`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getInstituteEvent = () => api.get(`api/institute/events`);
export const getAdminEvent = () => api.get(`api/admin/events`);

export const approveEvent = (id) => {
  return api.put(`api/admin/approveEventCreation/${id}`);
};
export const declineEvent = (id) => {
  return api.put(`api/admin/disApproveEventCreation/${id}`);
};

export const getInstituteEventById = (id) => api.get(`api/institute/events/${id}`);

export const updateInstituteEvent = async (formData) => {
  const id = formData.get("id");
  const formDataWithoutId = new FormData();
  formData.forEach((value, key) => {
    if (key !== "id") {
      formDataWithoutId.append(key, value);
    }
  });
  return api.put(`api/institute/updateEvent/${id}`, formDataWithoutId, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
};

export const getInstructorEventById = (id) => api.get(`api/instructor/events/${id}`);

export const updateInstructorEvent = async (formData) => {
  const id = formData.get("id");
  const formDataWithoutId = new FormData();
  formData.forEach((value, key) => {
    if (key !== "id") {
      formDataWithoutId.append(key, value);
    }
  });
  return api.put(`api/instructor/updateEvent/${id}`, formDataWithoutId, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
};

export const getUpdationEvent = () => api.get(`api/admin/getEventUpdation`);

export const approveEventUpdation = (id) => {
  return api.put(`api/admin/approveEventUpdation/${id}`);
};
export const declineEventUpdation = (id) => {
  return api.put(`api/admin/disApproveEventUpdation/${id}`);
};

export const addInstructorQuiz = (formData) => {
  return api.post(`api/instructor/createQuiz`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAdminQuiz = () => api.get(`api/admin/quizs`);
export const approveQuiz = (id) => {
  return api.put(`api/admin/approveQuizCreation/${id}`);
};
export const declineQuiz = (id) => {
  return api.put(`api/admin/disApproveQuizCreation/${id}`);
};

export const getEventBookByUser = (id) => api.get(`api/admin/eventUsers/${id}`);