import React from "react";

export default function FormInput({ placeholder, type = "text" }) {
  return (
    <label className="rounded border bg-stone-50 px-4 py-3 focus-within:ring-2 focus-within:ring-offset-2">
      {/* <span>{placeholder}</span> */}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-0"
      />
    </label>
  );
}
