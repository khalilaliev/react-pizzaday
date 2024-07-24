import "./style.css";
import { GoArrowLeft } from "react-icons/go";
import { BACK_TO_MENU, CLEAN, ORDER } from "../../constants/button-text";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import useBasket from "../../hooks/useBasket";

const Basket = () => {
  const {
    goToMainPage,
    pizza,
    increment,
    decrement,
    removeItem,
    resetBasket,
    goToOrderPage,
  } = useBasket();

  return (
    <div className="font-mono max-w-5xl my-28 mx-auto flex justify-between flex-col">
      <button
        onClick={goToMainPage}
        className="btn-back-to mb-7 flex items-center gap-3 text-blue-700"
      >
        <GoArrowLeft /> {BACK_TO_MENU}
      </button>
      <h2 className="mb-7 font-mono text-3xl text-left">
        Your cart, {pizza.totalItems}
      </h2>
      {pizza.items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center flex-row mb-7 border-bs p-6 list-box"
        >
          <div>
            <p className=" text-xl">
              {item.count}x {item.name}
            </p>
          </div>
          <div className=" flex justify-between items-center gap-5 ">
            <p className="font-medium text-xl text-custom-gray">
              {item.count * item.unitPrice}$
            </p>
            <Counter
              count={item.count}
              increment={() => increment(item.id)}
              decrement={() => decrement(item.id)}
              remove={() => removeItem(item.id)}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-row gap-5">
        <Button text={ORDER} onClick={goToOrderPage} />
        <Button
          text={CLEAN}
          onClick={resetBasket}
          background="none"
          border="1px solid rgba(0, 0, 0, 0.221)"
        />
      </div>
    </div>
  );
};

export default Basket;
