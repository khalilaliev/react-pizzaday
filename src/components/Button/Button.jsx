const Button = ({ text }) => {
  return (
    <>
      <button className="bg-bg-color border-0 px-4 rounded-md font-mono active:scale-95 transition-all ">
        {text}
      </button>
    </>
  );
};

export default Button;
