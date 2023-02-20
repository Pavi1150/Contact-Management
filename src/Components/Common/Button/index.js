import React from "react";
import { IoIosAdd } from "react-icons/io";

const NormalButton = (props) => {
  const { label, className, onClick, isShow = false } = props;
  return (
    <div>
      <button className={className} onClick={onClick}>
        {isShow ? <IoIosAdd /> : ""}

        {label}
      </button>
    </div>
  );
};

export default NormalButton;
