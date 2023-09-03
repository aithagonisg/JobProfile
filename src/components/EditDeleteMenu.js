import React, { useEffect, useState } from "react";
import Modal from "./ProfileModal/ProfileModal";

export default function EditDeleteMenu({ profileData }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleEditDeleteClick = (type) => {
    if (type === "edit") {
      setShowEditModal(true);
    } else {
      setShowDeleteModal(true);
    }
  };

  useEffect(() => {
    const body = document.getElementsByTagName("BODY")[0];
    if (showEditModal || showDeleteModal) {
      body.className = "removeScroll";
    } else {
      body.className = "addScroll";
    }
  }, [showEditModal, showDeleteModal]);

  return (
    <div className="flex gap-md ">
      <i
        className="fas fa-thin fa-trash-can text-error cursor-pointer"
        onClick={() => handleEditDeleteClick("delete", profileData)}
      ></i>
      <i
        className="fas fa-thin fa-pen-to-square text-[#00ced1] cursor-pointer"
        onClick={() => handleEditDeleteClick("edit", profileData)}
      ></i>
      {showEditModal && (
        <Modal
          setShowModal={setShowEditModal}
          modalHeader="Update a job"
          modalType="edit"
          profileData={profileData}
        />
      )}
      {showDeleteModal && (
        <Modal
          setShowModal={setShowDeleteModal}
          modalHeader="Delete a job"
          modalType="delete"
          profileData={profileData}
        />
      )}
    </div>
  );
}
