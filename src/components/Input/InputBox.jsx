import InputOrder from "./InputOrder";

const InputBox = ({ type, text }) => {
  return (
    <div className="mb-5">
      <div className=" flex justify-between  items-center">
        <label className="font-mono">{text}</label>
        <InputOrder type={type} />
      </div>
    </div>
  );
};

export default InputBox;
