import Button from "../Button/Button";

const Counter = ({ onClick, counter, decrement, increment }) => {
  return (
    <>
      <div className=" flex justify-center items-center gap-4">
        <Button onClick={decrement} text="-" />
        <p>{counter}</p>
        <Button onClick={increment} text="+" />
        <Button onClick={onClick} text="Delete" />
      </div>
    </>
  );
};

export default Counter;
