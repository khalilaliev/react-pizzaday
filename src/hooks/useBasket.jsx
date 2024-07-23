import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrementPizza,
  deleteItem,
  incrementPizza,
  reset,
} from "../redux/slices/CardSlice";

const useBasket = () => {
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

  const resetBasket = () => {
    dispatch(reset());
  };

  return {
    navigate,
    dispatch,
    pizza,
    goToMainPage,
    increment,
    decrement,
    removeItem,
    resetBasket,
  };
};

export default useBasket;
