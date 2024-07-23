import { useEffect, useState } from "react";

const useMenu = (api) => {
  const [pizzas, setPizzas] = useState([]);
  const [showCounter, setShowCounter] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const changeState = (id) => {
    if (selectedPizza === id && showCounter) {
      setShowCounter(false);
      setSelectedPizza(null);
    } else {
      setShowCounter(true);
      setSelectedPizza(id);
    }
  };

  useEffect(() => {
    const getPizzasData = async () => {
      try {
        const res = await fetch(api);
        if (!res.ok) throw new Error("Pizzas not found!");
        const data = await res.json();
        setPizzas(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getPizzasData();
  }, [api]);

  return { showCounter, selectedPizza, pizzas, changeState };
};

export default useMenu;
