export const BASE_URL = "https://64edfa091f87218271421f15.mockapi.io/api/v1";
export const CRUD_JOBPROFILE = "jobprofile";

export const applyTypes = {
  internal: { name: "Apply Now", type: "primary" },
  external: { name: "External Apply", type: "secondary" },
};

export const requiredFields = ["jobTitle", "companyName", "industry"];

export const createStepperButtonNames = {
  1: "Next",
  2: "Save",
};

export const editStepperButtonNames = {
  1: "Next",
  2: "Update",
};

export const dummyFormData = {
  jobTitle: "",
  companyName: "",
  industry: "",
  location: "",
  remoteType: "",
  experience: {
    minimum: 0,
    maximum: 0,
  },
  salary: {
    minimum: 0,
    maximum: 0,
  },
};

export const radioGroupStepTwo = {
  id: "applyType",
  name: "applyType",
  label: "Apply Type",
  groupLabels: [
    { id: "internal", label: "Quick apply" },
    { id: "external", label: "External apply" },
  ],
  isRequired: false,
};
