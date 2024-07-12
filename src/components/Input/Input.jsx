const Input = ({ placeholder }) => {
  return (
    <>
      <form>
        <input
          className="text-sm py-2 placeholder:text-custom-gray px-4 border border-custom-border rounded-md border-bg focus:outline-bg-color outline-none"
          placeholder={placeholder}
        />
      </form>
    </>
  );
};

export default Input;
