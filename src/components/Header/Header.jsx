import { NavLink, useLocation } from "react-router-dom";
import { INPUT_TEXT } from "../../constants/input-text";
import { useValueContext } from "../../context/InputValueContext";
import InputHeader from "../Input/InputHeader";

const Header = () => {
  const { pathname } = useLocation();
  const { inputValue } = useValueContext();

  return (
    <>
      {pathname === "/" ? (
        <header className="fixed top-0 right-0 left-0 z-50 bg-bg-color w-full  p-4 flex items-center justify-between">
          <NavLink className="logo text-custom-gray font-mono text-xl" to="/">
            Pizza Day
          </NavLink>
          <InputHeader placeholder={INPUT_TEXT.SEARCH} />
        </header>
      ) : (
        <header className="fixed top-0 right-0 left-0 z-50 bg-bg-color w-full   p-4 flex items-center justify-between">
          <NavLink className="logo text-custom-gray font-mono text-xl" to="/">
            Pizza Day
          </NavLink>
          <InputHeader placeholder={INPUT_TEXT.SEARCH} />
          <p className=" text-lg uppercase">{inputValue}</p>
        </header>
      )}
    </>
  );
};

export default Header;
