import React from "react";
import CustomInput from "../common/CustomInput";
import CustomRadio from "../common/CustomRadio";
export default function FormStepTwo({ handleFormData, formData }) {
  return (
    <>
      <div className="flex md:justify-between md:flex-row flex-col gap-es md:pb-el pb-el">
        <CustomInput
          id="minimum"
          name="experience"
          label="Experience"
          placeholder="Minimum"
          type="number"
          handleInputChange={handleFormData}
          value={formData?.experience?.minimum}
        />
        <CustomInput
          id="maximum"
          name="experience"
          label=""
          placeholder="Maximum"
          type="number"
          handleInputChange={handleFormData}
          value={formData?.experience?.maximum}
        />
      </div>
      <div className="flex md:justify-between md:flex-row flex-col gap-es md:pb-el pb-el">
        <CustomInput
          id="minimum"
          name="salary"
          label="Salary"
          placeholder="Mimimum"
          type="number"
          handleInputChange={handleFormData}
          value={formData?.salary?.minimum}
        />
        <CustomInput
          id="maximum"
          name="salary"
          label=""
          placeholder="Maximum"
          type="number"
          handleInputChange={handleFormData}
          value={formData?.salary?.maximum}
        />
      </div>
      <div className="pb-el">
        <CustomInput
          id="totalEmployee"
          name="totalEmployee"
          label="Total Employee"
          placeholder="Ex. 100"
          handleInputChange={handleFormData}
          value={formData?.totalEmployee}
        />
      </div>
      <div className="flex gap-md text-placholder">
        <CustomRadio
          id="internal"
          name="internal"
          label="Quick apply"
          handleChecked={handleFormData}
          checked={formData?.applyType === "internal" ? true : false}
        />
        <CustomRadio
          id="external"
          name="external"
          label="External apply"
          handleChecked={handleFormData}
          checked={formData?.applyType === "external" ? true : false}
        />
      </div>
    </>
  );
}
