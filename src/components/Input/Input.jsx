import { BTN_TEXT } from "../../constants/button-text";
import Button from "../Button/Button";

const Input = ({ placeholder, showButton }) => {
  return (
    <>
      <form className="flex justify-center gap-3">
        <input
          className="text-sm py-2 placeholder:text-custom-gray px-4 border border-custom-border rounded-md border-bg outline-1 focus:border-bg-color outline-none"
          placeholder={placeholder}
        />
        {showButton ? <Button text={BTN_TEXT} /> : null}
      </form>
    </>
  );
};

export default Input;
