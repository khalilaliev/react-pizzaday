import Button from "../Button/Button";

const Counter = ({ count, decrement, increment, remove }) => {
  return (
    <div className="uppercase flex justify-center items-center gap-4">
      <Button onClick={decrement} text="-" />
      <p className="text-xl">{count}</p>
      <Button onClick={increment} text="+" />
      <Button onClick={remove} text="Delete" />
    </div>
  );
};

export default Counter;
