import React from "react";

export default function CustomInput({
  label,
  id,
  name,
  placeholder,
  handleInputChange,
  isRequired,
  type = "text",
  value,
}) {
  return (
    <label className="block">
      {label ? (
        <span
          className={`${
            isRequired
              ? "after:content-['*'] after:ml-0.5 after:text-error"
              : ""
          } block text-sm font-medium pb-es`}
        >
          {label}
        </span>
      ) : (
        <span>&nbsp;</span>
      )}
      <input
        id={id}
        name={name}
        type={type}
        className="mt-1 px-3 py-2 bg-white border-[1px] shadow-sm border-cardborder  focus:outline-none  block w-full rounded-[5px] sm:text-sm py-sm px-em"
        placeholder={placeholder}
        onChange={handleInputChange}
        value={value ? value : ""}
      />
    </label>
  );
}
