const InputHeader = ({ placeholder }) => {
  return (
    <>
      <input
        className="italic bg-input-bg text-sm font-light py-2 placeholder:text-custom-gray px-4 border border-custom-border rounded-md border-bg outline-1 focus:border-bg-color outline-none"
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputHeader;
