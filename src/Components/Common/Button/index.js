import React from "react";

const NormalButton = (props) => {
  const { label, className, onClick } = props;
  return (
    <div>
      <button className={className} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default NormalButton;
