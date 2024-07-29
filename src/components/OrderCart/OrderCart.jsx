import useOrderCard from "../../hooks/useOrderCard";
import "./style.css";

const OrderCart = ({ name, quantity, totalPrice, pizzaId }) => {
  const { capitalizeIngredients, ingredients } = useOrderCard(pizzaId);

  return (
    <div className="order-box py-4 px-2 flex justify-between items-center">
      <div>
        <p className="mb-3">
          {quantity}x {name}
        </p>
        <p>{capitalizeIngredients(ingredients).join(", ")}</p>
      </div>
      <div>
        <p className="text-lg font-bold">€{totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderCart;
