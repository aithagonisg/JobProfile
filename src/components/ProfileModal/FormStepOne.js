import React from "react";
import CustomInput from "../common/CustomInput";

export default function FormStepOne({ handleFormData, formData }) {
  return (
    <>
      <div className=" pb-el">
        <CustomInput
          id="jobTitle"
          name="joTitle"
          label="Job title"
          placeholder="ex. UX UI Designer"
          isRequired
          handleInputChange={handleFormData}
          value={formData?.jobTitle}
        />
      </div>
      <div className=" pb-el">
        <CustomInput
          id="companyName"
          name="companyName"
          label="Company name"
          placeholder="ex. Google"
          isRequired
          handleInputChange={handleFormData}
          value={formData?.companyName}
        />
      </div>
      <div className=" pb-el">
        <CustomInput
          id="industry"
          name="industry"
          label="Industry"
          placeholder="ex. Information Technology"
          isRequired={true}
          handleInputChange={handleFormData}
          value={formData?.industry}
        />
      </div>
      <div className="flex md:justify-between md:flex-row flex-col gap-el">
        <CustomInput
          id="location"
          name="location"
          label="Location"
          placeholder="ex. Chennai"
          handleInputChange={handleFormData}
          value={formData?.location}
        />
        <CustomInput
          id="remoteType"
          name="remotType"
          label="Remote Type"
          placeholder="ex. In-office"
          handleInputChange={handleFormData}
          value={formData?.remoteType}
        />
      </div>
    </>
  );
}
