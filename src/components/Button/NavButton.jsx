const NavButton = ({ text, onClick, icon }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="btn-back-to mb-7 flex items-center  gap-3 text-blue-700"
      >
        {icon} {text}
      </button>
    </>
  );
};

export default NavButton;
