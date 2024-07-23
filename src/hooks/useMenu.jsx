import { useEffect, useState } from "react";

const useMenu = (api) => {
  const [pizzas, setPizzas] = useState([]);

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

  return { pizzas };
};

export default useMenu;
