import { BTN_TEXT } from "../../constants/button-text";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Login = ({ placeholder, handelSubmit, handleChange, value, onClick }) => {
  return (
    <>
      <form onSubmit={handelSubmit} className="flex justify-center gap-3">
        <Input
          handleChange={handleChange}
          value={value}
          placeholder={placeholder}
        />
        <Button onClick={onClick} text={BTN_TEXT} />
      </form>
    </>
  );
};

export default Login;
