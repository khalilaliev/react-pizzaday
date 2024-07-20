const Button = ({ text, onClick, type }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="bg-bg-color border-0 px-4 py-2 rounded-lg font-mono active:scale-95 transition-all duration-300"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
