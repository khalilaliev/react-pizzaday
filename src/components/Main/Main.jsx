import { INPUT_TEXT } from "../../constants/input-text";
import { DESCRIPTION } from "../../constants/main-text";
// import { useState } from "react";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import { useValueContext } from "../../context/InputValueContext";

const Main = () => {
  const navigate = useNavigate();

  const { inputValue, setInputValue } = useValueContext();

  const goToMenuPage = () => {
    navigate("/menu");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (inputValue.length !== 0 && inputValue !== " ") {
      e.preventDefault();
      goToMenuPage();

      console.log("Form submitted", inputValue);
    } else {
      e.preventDefault();
      return;
    }
  };

  return (
    <>
      <main>
        <h1 className="text-3xl mb-5 text-custom-gray  font-mono">
          {DESCRIPTION.HEAD}
          <br />
          <span className="text-bg-color  font-mono">
            {DESCRIPTION.SUB_TITLE}
          </span>
        </h1>
        <p className="text-custom-gray  mb-6 font-mono">
          {DESCRIPTION.GREETING}
        </p>
        <div className="flex justify-center gap-3">
          <Login
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={inputValue}
            placeholder={INPUT_TEXT.LOGIN}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
