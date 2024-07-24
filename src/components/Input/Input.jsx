const Input = ({ placeholder, type, value, handleChange }) => {
  return (
    <>
      <input
        className="font-mono text-sm font-light py-2 placeholder:text-custom-gray px-4 border border-custom-border rounded-md border-bg outline-1 focus:border-bg-color outline-none"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        type={type}
      />
    </>
  );
};

export default Input;
