import React from "react";
import "./style.css";
// eslint-disable-next-line react-refresh/only-export-components
const InputOrder = (props, ref) => {
  const { type, error, onBlur, onChange, name } = props;

  return (
    <>
      <input
        ref={ref}
        className=" w-9/12 input font-mono text-sm font-light py-3 placeholder:text-custom-gray px-4 border border-custom-border rounded-md border-bg outline-1 focus:border-bg-color outline-none"
        type={type}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <p className="mt-3 text-custom-red">{error.message}</p>}
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.forwardRef(InputOrder);
