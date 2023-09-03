import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "../../store/toastSlice";

export default function CustomToast() {
  const [showToaster, setShowToast] = useState(false);
  const { show, message, type, delay } = useSelector(
    (state) => state?.toast?.toastInfo
  );

  const dispatch = useDispatch();

  const closeToast = useCallback(() => {
    setShowToast(false);
    dispatch(
      showToast({
        message: "",
        show: false,
        delay: 3000,
        type: "success",
      })
    );
    window.location.reload();
  }, [dispatch]);

  useEffect(() => {
    if (show) {
      setShowToast(true);
      const interval = setTimeout(() => {
        closeToast();
      }, delay);
      return () => {
        clearTimeout(interval);
        setShowToast(false);
      };
    }
  }, [show, delay, closeToast]);

  return (
    <>
      {showToaster && (
        <div
          id="toast-simple"
          className="flex items-center w-full justify-center fixed"
          role="alert"
        >
          <span className=" flex items-center justify-center gap-sm max-w-auto p-md text-gray-500 bg-card border rounded-xl border-cardborder">
            {type === "error" && (
              <i className="fa-solid fa-circle-exclamation text-error"></i>
            )}
            {type === "success" && (
              <i className="fa-fas fa-solid fa-circle-check text-primary"></i>
            )}
            <div className="font-normal">{message}</div>
            <button type="button" aria-label="Close" onClick={closeToast}>
              <i className="fa-fas fa-solid fa-xmark cursor-pointer text-placholder"></i>
            </button>
          </span>
        </div>
      )}
    </>
  );
}
