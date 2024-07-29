const CheckboxInput = (props) => {
  const { checked, onChange, onBlur, name, label } = props;

  return (
    <div className="mb-8">
      <div className="ml-5 flex gap-4 justify-center items-center">
        <input
          className=""
          type="checkbox"
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {label && <label className="font-mono tracking-wide">{label}</label>}
      </div>
    </div>
  );
};

export default CheckboxInput;
