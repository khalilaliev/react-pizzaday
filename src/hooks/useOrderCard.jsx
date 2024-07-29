import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsData } from "../redux/slices/PizzaMenuSlice";

const useOrderCard = (id) => {
  const dispatch = useDispatch();
  const { isLoading, isError, items } = useSelector((state) => state.menu);

  useEffect(() => {
    if (!items.length) {
      dispatch(itemsData());
    }
  }, [dispatch, items]);

  let ingredients = [];
  if (!isLoading && !isError && items) {
    const pizza = items.find((pizza) => pizza.id === id);
    if (pizza) {
      // eslint-disable-next-line no-unused-vars
      ingredients = pizza.ingredients;
    }
  }

  const capitalizeIngredients = (ingredients) => {
    return ingredients.map((ingredient) => {
      return ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
    });
  };

  return { capitalizeIngredients, ingredients };
};

export default useOrderCard;
