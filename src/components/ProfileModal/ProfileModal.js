import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  requiredFields,
  createStepperButtonNames,
  editStepperButtonNames,
} from "../../constants";
import CustomButton from "../common/CustomButton";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import {
  deleteJobProfile,
  postJobProfile,
  updateJobProfile,
} from "../../services/crudServices";
import { showToast } from "../../store/toastSlice";

const getStepperForm = (step, handleFormData, formData) => {
  switch (step) {
    case 1:
      return (
        <FormStepOne handleFormData={handleFormData} formData={formData} />
      );

    case 2:
      return (
        <FormStepTwo handleFormData={handleFormData} formData={formData} />
      );
    default:
      return <></>;
  }
};

const Modal = ({ setShowModal, modalHeader, modalType, profileData }) => {
  const [formData, setFormData] = useState({});
  const [stepper, setStepper] = useState(1);
  const [disbaleNext, setDisableNext] = useState(true);

  const dispatch = useDispatch();

  const handleFormData = (event) => {
    if (event.target.id === "internal" || event.target.id === "external") {
      setFormData({ ...formData, applyType: event.target.id });
    } else if (
      event.target.name === "experience" ||
      event.target.name === "salary"
    ) {
      setFormData({
        ...formData,
        [event.target.name]: {
          ...formData[event.target.name],
          [event.target.id]: parseInt(event.target.value),
        },
      });
    } else {
      setFormData({ ...formData, [event.target.id]: event.target.value });
    }
  };

  useEffect(() => {
    if (requiredFields?.every((item) => formData[item]?.length > 0)) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
  }, [formData]);

  useEffect(() => {
    setFormData(profileData);
  }, [profileData]);

  const handleStepper = () => {
    if (stepper === 1) {
      setStepper(2);
    } else {
      if (modalType === "create") {
        postJobProfile(formData)
          .then((res) => {
            setShowModal(false);
            if (res?.status === 200 || res?.status === 201) {
              dispatch(
                showToast({
                  message: "Job Profile is created successfully",
                  show: true,
                  delay: 3000,
                  type: "success",
                })
              );
            } else {
              dispatch(
                showToast({
                  message: "Sorry unable to create Job Profile",
                  show: true,
                  delay: 3000,
                  type: "error",
                })
              );
            }
          })
          .catch((err) => setShowModal(false));
      } else if (modalType === "edit") {
        updateJobProfile(formData, formData?.id)
          .then((res) => {
            setShowModal(false);
            if (res?.status === 200 || res?.status === 201) {
              dispatch(
                showToast({
                  message: "Job Profile is updated successfully",
                  show: true,
                  delay: 3000,
                  type: "success",
                })
              );
            } else {
              dispatch(
                showToast({
                  message: "Sorry unable to update Job Profile",
                  show: true,
                  delay: 3000,
                  type: "error",
                })
              );
            }
          })
          .catch((err) => setShowModal(false));
      } else {
        deleteJobProfile(formData, formData?.id)
          .then((res) => {
            setShowModal(false);
            if (res?.status === 200 || res?.status === 201) {
              dispatch(
                showToast({
                  message: "Job Profile is deleted successfully",
                  show: true,
                  delay: 3000,
                  type: "success",
                })
              );
            } else {
              dispatch(
                showToast({
                  message: "Sorry unable to delete Job Profile",
                  show: true,
                  delay: 3000,
                  type: "error",
                })
              );
            }
          })
          .catch((err) => {
            setShowModal(false);
          });
      }
    }
  };
  return (
    <div className="block fixed z-10 left-[0px] top-[0px] w-[100%] h-[100%] overflow-auto bg-backgroundfallback">
      <div className="m-auto p-elg border md:rounded-xl border-cardborder md:w-[577px] w-[100%] h-auto  bg-card overflow-y-auto">
        <div className="flex justify-between text-[20px] pb-el">
          <div>{modalHeader}</div>
          {modalType !== "delete" && <div>step {stepper}</div>}
        </div>
        {modalType !== "delete" ? (
          <>
            {getStepperForm(stepper, handleFormData, formData)}
            <div className=" flex justify-end mt-[96px]">
              <CustomButton
                buttonName={
                  modalType === "create"
                    ? createStepperButtonNames[stepper]
                    : editStepperButtonNames[stepper]
                }
                buttonType="primary"
                handleButtonClick={handleStepper}
                disabled={disbaleNext}
              />
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              Are you sure do you want to delete this job ?
            </div>
            <div className="flex justify-end gap-md mt-el">
              <CustomButton
                buttonName="Cancel"
                buttonType="secondary"
                handleButtonClick={() => setShowModal(false)}
              />
              <CustomButton
                buttonName="Delete"
                buttonType="primary"
                handleButtonClick={handleStepper}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
