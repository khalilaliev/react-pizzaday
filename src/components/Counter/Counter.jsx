import { useState } from "react";
import Button from "../Button/Button";

const Counter = ({ onClick }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCounter((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState;
    });
  };

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
