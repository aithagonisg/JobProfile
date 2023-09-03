import React from "react";

export default function CustomRadio({
  label,
  id,
  name,
  handleChecked,
  checked,
}) {
  return (
    <label className="flex items-center gap-es">
      <input
        className="h-el w-el"
        type="radio"
        id={id}
        name={name}
        onChange={handleChecked}
        checked={checked}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
