const Input = ({ placeholder, value, handleChange }) => {
  return (
    <>
      <input
        className="text-sm font-light py-2 placeholder:text-custom-gray px-4 border border-custom-border rounded-md border-bg outline-1 focus:border-bg-color outline-none"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
