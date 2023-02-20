import React from "react";
const InputBox = (props) => {
  const { type, value, name, label, onChange, placeholder } = props;
  return (
    <>
      {label !== "" && <label className="label mb-2">{label}</label>}
      <div>
        <input
          type={type}
          name={name}
          value={value}
          label={label}
          className="inputBox"
          onChange={onChange}
          required={true}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default InputBox;
