const Button = ({ text, type, handleAddToCard }) => {
  return (
    <>
      <button
        type={type}
        onClick={handleAddToCard}
        className="bg-bg-color uppercase border-0 px-5 py-3 rounded-xl font-mono active:scale-95 transition-all duration-300"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
