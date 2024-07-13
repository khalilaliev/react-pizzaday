import { INPUT_TEXT } from "../../constants/input-text";
import { DESCRIPTION } from "../../constants/main-text";
import { useState } from "react";
import Login from "../Login/Login";

const Main = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    setValue("");
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
            handelSubmit={handelSubmit}
            value={value}
            placeholder={INPUT_TEXT.LOGIN}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
