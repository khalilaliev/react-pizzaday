import InputOrder from "./InputOrder";

const InputBox = ({ type, text, error, onBlur, onChange, name }) => {
  return (
    <div className="mb-5">
      <div className=" flex flex-wrap justify-between  items-center">
        <label className="font-mono">{text}</label>
        <InputOrder
          error={error}
          type={type}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputBox;
