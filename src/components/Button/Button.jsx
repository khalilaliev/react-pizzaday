const Button = ({
  text,
  type,
  onClick,
  background,
  handleAddToCard,
  width,
  border,
}) => {
  const buttonStyle = {
    width: width || "auto",
    background: background,
    border: border,
  };

  const handleClick = (event) => {
    if (onClick) onClick(event);
    if (handleAddToCard) handleAddToCard(event);
  };
  return (
    <>
      <button
        style={buttonStyle}
        type={type}
        onClick={handleClick}
        className="bg-bg-color uppercase border-0 px-5 py-3 rounded-xl font-mono active:scale-95 transition-all duration-300"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
