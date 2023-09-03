import axios from "axios";
import { BASE_URL, CRUD_JOBPROFILE } from "../constants";

const axiosConfig = async (urlPath, methodType, data) => {
  return await axios({
    url: `${BASE_URL}/${urlPath}`,
    method: methodType,
    ...(data ? { data } : {}),
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      return {
        status: error.status,
        data: error.response,
      };
    });
};
export const getJobProfiles = () => {
  return axiosConfig(CRUD_JOBPROFILE, "get", {});
};

export const postJobProfile = (postData) => {
  return axiosConfig(CRUD_JOBPROFILE, "post", postData);
};

export const updateJobProfile = (postData, id) => {
  return axiosConfig(`${CRUD_JOBPROFILE}/${id}`, "put", postData);
};

export const deleteJobProfile = (postData, id) => {
  return axiosConfig(`${CRUD_JOBPROFILE}/${id}`, "delete", postData);
};
