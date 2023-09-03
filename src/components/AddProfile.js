import React, { useEffect, useState } from "react";
import CustomButton from "./common/CustomButton";
import Modal from "./ProfileModal/ProfileModal";
import { dummyFormData } from "../constants";

export default function AddProfile() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("BODY")[0];
    if (showModal) {
      body.className = "removeScroll";
    } else {
      body.className = "addScroll";
    }
  }, [showModal]);

  return (
    <div className="flex justify-end mr-lg pr-es">
      <CustomButton
        buttonName="Add Profile"
        buttonType="primary"
        handleButtonClick={() => setShowModal(true)}
      />
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          modalHeader="Create a Job"
          modalType="create"
          profileData={dummyFormData}
        />
      )}
    </div>
  );
}
