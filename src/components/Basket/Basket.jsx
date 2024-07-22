import { GoArrowLeft } from "react-icons/go";
import { BACK_TO_MENU } from "../../constants/button-text";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../Counter/Counter";
import {
  decrementPizza,
  deleteItem,
  incrementPizza,
} from "../../redux/slices/CardSlice";

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pizza = useSelector((state) => state.card);

  const goToMainPage = () => {
    navigate("/menu");
  };

  const increment = (id) => {
    dispatch(incrementPizza(id));
  };

  const decrement = (id) => {
    dispatch(decrementPizza(id));
  };

  const removeItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className=" max-h-screen   w-1/2 my-0 mx-auto flex justify-between flex-col">
      <button
        onClick={goToMainPage}
        className="mb-7 flex items-center gap-3 text-blue-700"
      >
        <GoArrowLeft /> {BACK_TO_MENU}
      </button>
      <h2 className="mb-7 text-3xl text-left">Your cart, {pizza.totalItems}</h2>
      {pizza.items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center flex-row mb-7 border-bs p-6 "
        >
          <div>
            <p className=" text-xl">
              {item.count}x {item.name}
            </p>
          </div>
          <div className="flex justify-between items-center gap-5 ">
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
        <Button text="Order pizzas" />
        <Button text="Clean cart" />
      </div>
    </div>
  );
};

export default Basket;
