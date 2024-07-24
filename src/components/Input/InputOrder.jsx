import "./style.css";
const InputOrder = ({ type }) => {
  return (
    <>
      <input
        className="w-9/12 input font-mono text-sm font-light py-3 placeholder:text-custom-gray px-4 border border-custom-border rounded-md border-bg outline-1 focus:border-bg-color outline-none"
        type={type}
      />
    </>
  );
};

export default InputOrder;
