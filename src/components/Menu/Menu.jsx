import { useEffect, useState } from "react";
import MenuList from "./MenuList";
import { API } from "../../utils/pizzas-api";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const [showCounter, setShowCounter] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
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
        const res = await fetch(API);
        if (!res.ok) throw new Error("Pizzas not found!");
        const data = await res.json();
        setPizzas(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getPizzasData();
  }, []);

  return (
    <>
      <div className="max-w-4xl my-0 mx-auto h-calc-100vh-minus-120px">
        {pizzas.data?.length ? (
          <MenuList
            decrement={decrement}
            increment={increment}
            counter={counter}
            selectedPizza={selectedPizza}
            onClick={changeState}
            showCounter={showCounter}
            pizzas={pizzas.data}
          />
        ) : null}
      </div>
    </>
  );
};

export default Menu;
