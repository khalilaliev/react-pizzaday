import { BTN_ADD } from "../../constants/button-text";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";

const MenuListItem = ({
  pizza,
  showCounter,
  onClick,
  selectedPizza,
  counter,
  increment,
  decrement,
}) => {
  const { soldOut, imageUrl, name, unitPrice, id, ingredients } = pizza;

  return (
    <li className="bg-white shadow-md rounded-md flex  items-center p-4 ">
      {soldOut ? (
        <img
          src={imageUrl}
          className="pizza__image w-28 h-28 rounded-md object-cover filter grayscale"
        />
      ) : (
        <img
          src={imageUrl}
          className="pizza__image w-28 h-28 rounded-md object-cover "
        />
      )}
      <div className="pizza__info ml-4 flex-grow">
        <p className="pizza__name text-lg font-semibold text-custom-gray">
          {name}
        </p>
        <p className="pizza__ingredients text-gray-500 italic text-custom-gray">
          {ingredients.join(", ")}
        </p>
        <div className="pizza__actions flex items-center justify-between mt-2">
          {soldOut ? (
            <p className=" uppercase font-semibold text-custom-gray">
              Sold out
            </p>
          ) : (
            <>
              <p className="pizza__price text-lg font-normal mt-2 text-custom-gray">
                €{unitPrice}
              </p>
              {showCounter && selectedPizza === id ? (
                <Counter
                  increment={increment}
                  decrement={decrement}
                  counter={counter}
                  onClick={onClick}
                />
              ) : (
                <Button
                  onClick={() => onClick(pizza.id)}
                  className={"p-4"}
                  text={BTN_ADD}
                />
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuListItem;
